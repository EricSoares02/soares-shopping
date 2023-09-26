import Load from "@/components/loading/loading";
import { useProduct } from "@/hooks/useGetProduct";
import styled from "styled-components";
import { converterParaReal } from "./../../../hooks/useConversor";
import AddBtnCart from "@/utils/addToCart";
import AddBtnFavorite from "@/utils/addToFavorite";
import { devices } from "@/app/global.style";

const ProductCase = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  padding: 50px;
  justify-content: space-around;
  grid-template-columns: repeat(2, auto);
  @media ${devices.sm} {
    display: block;
    justify-content: center;
  }

`;



const ProductImg = styled.div`
  width: 500px;
  height: 700px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 18px;
  }

  @media ${devices.lg} {
    width: 400px;
  }
  @media ${devices.sm} {
    width: 100%;
  }
`;

const ProductDesc = styled.div`
  width: 700px;
  height: 700px;
  display: block;
  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 23px;
    font-size: 20px;
  }
  & p {
    text-align: justify;
    padding: 15px;
  }
  @media ${devices.lg} {
    width: 400px;
  }
  @media ${devices.sm} {
    width: 100%;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BtnConteiner = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  width: 700px;
  height: auto;
  position: absolute;
  bottom: 30px;
  @media ${devices.lg} {
    justify-content: start;
  }
  @media ${devices.sm} {
    width: 100%;
  }
`;
export default function Product(value: string) {
  const { data, isLoading } = useProduct(value);

  if (isLoading && !data) {
    return <Load />;
  }

  return (
    <ProductCase>
      <ProductImg>
        <img src={data?.data.url_img} alt="img" />
      </ProductImg>
      <ProductDesc>
        <h1>{data?.data.name.toUpperCase()}</h1>
        <p>{data?.data.desc}</p>
        <Price>
          <p>{converterParaReal(data?.data.price_in_cent)}</p>
          <p>Categoria: {data?.data.category}</p>
        </Price>
        <BtnConteiner>
          <AddBtnCart />
          <AddBtnFavorite />
        </BtnConteiner>
      </ProductDesc>
    </ProductCase>
  );
}
