import Load from "@/components/loading/loading";
import { useProduct } from "@/hooks/useGetProduct";
import styled from "styled-components";
import { converterParaReal } from "./../../../hooks/useConversor";
import AddBtnCart from "@/utils/addToCart";

const ProductCase = styled.div`
  width: 1000px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  box-shadow: 0 0 7px ${(props) => props.theme.colors.shadowcolor};
`;
const ProductImg = styled.div`
  width: 500px;
  height: 700px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const ProductDesc = styled.div`
  width: 500px;
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
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BtnConteiner = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: auto;
  position: absolute;
  bottom: 30px;

  /* padding-bottom: 10px ; */
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
          <AddBtnCart></AddBtnCart>
        </BtnConteiner>
      </ProductDesc>
    </ProductCase>
  );
}
