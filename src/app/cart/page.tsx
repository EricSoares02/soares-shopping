"use client";
import BackBtn from "@/utils/backBtn";
import styled from "styled-components";
import { devices } from "../global.style";
import Link from "next/link";
import { converterParaReal } from "@/hooks/useConversor";
import ValuesCart from "@/components/unique-pages/cart/valueCart";

const Conteiner = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.color};
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

// conteiner de produtos
const ProductConteiner = styled.div`
  display: flex;
  flex-direction: column;
`;

// case para todos os produtos
const ProductCase = styled.div`
  width: 800px;
  height: 300px;
  font-weight: 600;
  margin: 0 10px 10px 0;
  display: flex;
  transition: ${(props) => props.theme.transition.transition};
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.colors.white};
  &:hover {
    box-shadow: 0 0 14px ${(props) => props.theme.colors.shadowcolor};
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

const Checked = styled.div`
  width: 100px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputChecked = styled.input.attrs({ type: "checkbox" })`
  width: 25px;
  height: 25px;
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

const ConteinerToAlign = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const ProductDesc = styled.div`
  width: 100%;
  height: 150px;
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
  height: 150px;
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


export default function Cart() {
  //pega os itens do localStorage e converte em Object, tornando-se o carrinho
  let cartArray = JSON.parse(localStorage.getItem("cartItem") || "[]");
  console.log(cartArray);
  // função para pegar os itens do carrinho
  function getCart() {
    return (
      <>
        {cartArray.map((item: any) => (
          <div key={item.id}>
            <ProductCase key={item.id}>
              <Checked>
                <InputChecked
                  defaultChecked={item.cheked}
                  onChange={() => {
                    if (item.cheked) {
                      item.cheked = false;
                      localStorage.setItem(
                        "cartItem",
                        JSON.stringify(cartArray)
                      );
                    } else {
                      item.cheked = true;
                      localStorage.setItem(
                        "cartItem",
                        JSON.stringify(cartArray)
                      );
                    }
                    window.location.reload();
                  }}
                />
              </Checked>
              <Link href={`/product?id=${item.id}`}>
                <ProductImgConteiner>
                  <ProductImg src={item.url_img}></ProductImg>
                </ProductImgConteiner>
              </Link>
              <ConteinerToAlign>
                <ProductDesc>
                  <h2>{item.name.toUpperCase()}</h2>
                  <h3>{item.category.toUpperCase()}</h3>
                </ProductDesc>
                <PriceAndButton>
                  <p>{converterParaReal(item.price_in_cent * item.quatity)}</p>
                  <p>Quantidade: {item.quatity}</p>
                </PriceAndButton>
              </ConteinerToAlign>
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
            {ValuesCart(cartArray)}
          </MidConteiner>
        </BigConteinerToAlign>
      </Conteiner>
    </main>
  );
}