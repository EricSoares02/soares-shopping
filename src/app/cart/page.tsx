"use client";
import BackBtn from "@/utils/backBtn";
import styled from "styled-components";
import { devices } from "../global.style";
import Link from "next/link";
import { converterParaReal } from "@/hooks/useConversor";

const Conteiner = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const BacBtnCase = styled.div`
  width: 100%;
  height: auto;
`;
const BigConteinerToAlign = styled.div``;
const MidConteiner = styled.div`
  display: flex;
  width: 1500px;
  height: auto;
`;

const ProductConteiner = styled.div`
  display: flex;
  flex-direction: column;
`;

// case para todos os produtos

const ProductCase = styled.div`
  width: 900px;
  height: 300px;
  font-weight: 600;
  margin: 0 10px 10px 0;
  display: flex;
  transition: ${(props) => props.theme.transition.transition};
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.colors.white};
  &:hover {
    box-shadow: 0 0 7px ${(props) => props.theme.colors.shadowcolor};
  }
  @media ${devices.xl} {
    width: 360px;
  }
  @media ${devices.lg} {
    width: 320px;
  }
  @media ${devices.sm} {
    width: 280px;
  }
`;

const ProductImgConteiner = styled.div`
  width: 200px;
  height: 300px;
  background-color: #aaa;
`;
const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductDesc = styled.div`
  width: 100%;
  padding-left: 5px;
  h2 {
    font-size: 14px;
    padding-top: 5px;
  }
  h3 {
    color: ${(props) => props.theme.colors.shadowcolor};
    font-size: 11px;
  }
  @media ${devices.sm} {
    height: 55px;
    h2 {
      font-size: 12px;
    }
    h3 {
      font-size: 10px;
    }
    p {
      font-size: 12px;
    }
  }
`;
const PriceAndButton = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
  }
  @media ${devices.sm} {
    &p {
      font-size: 12px;
    }
  }
`;

// conteiner de configuração toral do carrinho

const Finish = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
 
`;
const Text = styled.div`
  width: 100%;
  font-size: 12px;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Cart() {
  function getCart() {
    let cartArray = JSON.parse(localStorage.getItem("cartItem") || "[]");
    console.log(cartArray);
    return (
      <>
        {cartArray.map((item: any) => (
          <div key={item.id}>
            <ProductCase key={item.id}>
              <Link href={`/product?id=${item.id}`}>
                <ProductImgConteiner>
                  <ProductImg src={item.url_img}></ProductImg>
                </ProductImgConteiner>
              </Link>
              <ProductDesc>
                <h2>{item.name.toUpperCase()}</h2>
                <h3>{item.category.toUpperCase()}</h3>
                <p>{converterParaReal(item.price_in_cent)}</p>
              </ProductDesc>
            </ProductCase>
          </div>
        ))}
      </>
    );
  }

  return (
    <main>
      <Conteiner>
        <BacBtnCase>
          <BackBtn />
        </BacBtnCase>
        <BigConteinerToAlign>
          <MidConteiner>
            <ProductConteiner>
              <div>{getCart()}</div>
            </ProductConteiner>
            <Finish>
              <Text>
                <h1>Cart</h1>
              </Text>
              <Section>
                <h1>Total</h1>
                <p></p>
              </Section>
            </Finish>
          </MidConteiner>
        </BigConteinerToAlign>
      </Conteiner>
    </main>
  );
}
