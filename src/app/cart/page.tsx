"use client";
import BackBtn from "@/utils/backBtn";
import styled from "styled-components";
import ValuesCart from "@/components/unique-pages/cart/valueCart";
import GetProductsCart from "@/components/unique-pages/cart/getProducts";


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
  overflow-y: scroll;
  height: 795px;
  &::-webkit-scrollbar {
  display:none;
}
`;

export default function Cart() {
  //pega os itens do localStorage e converte em Object, tornando-se o carrinho
  let cartArray = JSON.parse(localStorage.getItem("cartItem") || "[]");
  console.log(cartArray); 
  return (
    <main>
      <Conteiner>
        <BacBtnCase>
          <BackBtn />
        </BacBtnCase>
        <BigConteinerToAlign>
          <MidConteiner>
            <ProductConteiner>
              <div>{GetProductsCart(cartArray)}</div>
            </ProductConteiner>
            {ValuesCart(cartArray)}
          </MidConteiner>
        </BigConteinerToAlign>
      </Conteiner>
    </main>
  );
}
