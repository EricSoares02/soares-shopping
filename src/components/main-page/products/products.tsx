import Load from "@/components/loading/loading";
import { converterParaReal } from "@/hooks/useConversor";
import { useProducts } from "@/hooks/useGetProducts";
import { PropsProduct } from "@/types/product";
import Link from "next/link";
import styled from "styled-components";
import AddCart from "./addToCart";
import { devices } from "@/app/global.style";

const Conteiner = styled.section`
  width: 100%;
  height: auto;
`;
const Text = styled.div`
  padding: 10px 0 0 75px;
  width: 100%;
  font-weight: 600;
  font-size: 20px;
`;
const ProductConteiner = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  gap: 25px;
  margin: 32px 0;
  padding: 15px;

   a {
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
  }

  @media ${devices["2xl"]} {
    grid-template-columns: repeat(3, auto);
  }
  @media ${devices.lg} {
    grid-template-columns: repeat(2, auto);
  }
  @media ${devices.xs} {
    grid-template-columns: repeat(1, auto);
  }
`;

const ProductCase = styled.div`
  width: 410px;
  height: 550px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  transition: ${(props) => props.theme.transition.transition};
  padding-bottom: 50px;
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
  width: 100%;
  height: 420px;
  background-color: #aaa;

`;
const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductDesc = styled.div`
  width: 100%;
  padding-left: 15px;
 h2 {
    font-size: 14px;
    padding-top: 15px;
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
  }
`;
const PriceAndButton = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
  }
  @media ${devices.sm} {
    &p{
      font-size: 12px;
    }
  }
`;

export default function Products() {

  const { data, isLoading} = useProducts();
  if (isLoading && data==undefined) {
    return <Load />;
  }
  return (
    <Conteiner>
      <Text>Produtos</Text>
      <ProductConteiner>
        {data?.products.map((value: PropsProduct) => (
          <ProductCase key={value.id}>
            <Link href={`/product?id=${value.id}`}>
              <ProductImgConteiner>
                <ProductImg src={value.url_img}></ProductImg>
              </ProductImgConteiner>
            </Link>
            <ProductDesc>
              <h2>{value.name.toUpperCase()}</h2>
              <h3>{value.category.toUpperCase()}</h3>
            </ProductDesc>
            <PriceAndButton>
              <p>{converterParaReal(value.price_in_cent)}</p>
              <AddCart />
            </PriceAndButton>
          </ProductCase>
        ))}
      </ProductConteiner>
    </Conteiner>
  );
}
