import Load from "@/components/loading/loading";
import { converterParaReal } from "@/hooks/useConversor";
import { PropsProduct } from "@/types/product";
import { api } from "@/services/api";
import Link from "next/link";
import { useQuery } from "react-query";
import styled from "styled-components";

const Conteiner = styled.section`
  padding: 15px;
  width: 100%;
  height: auto;
`;
const Text = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 16px;
`;

const ProductConteiner = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 15px;
  margin: 32px 0;
  padding: 15px;
  &  a {
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
  }
`;
const ProductCase = styled.div`
  width: 310px;
  height: auto;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  transition: 0.8s;
  padding-bottom: 50px;
  &:hover {
    box-shadow: 0 0 7px ${(props) => props.theme.colors.shadowcolor};
  }
`;

const ProductImgConteiner = styled.div`
  width: 100%;
  height: 300px;
  background-color: #aaa;
`;
const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductDesc = styled.div`
  width: 100%;
  & h2 {
    font-size: 14px;
    text-align: right;
    padding-right: 5px;
    padding-top: 15px;
  }

  h3 {
    font-size: 14px;
    text-align: right;
    padding-right: 5px;
    color: var(--text-color2);
  }
`;

export default function Products() {
  const getProducts = async () => {
    const response = await api
      .get("http://localhost:3333/produtos")
      .then((response) => response.data);
    return response;
  };

const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <Load />;
  }
  return (
    <Conteiner>
      <Text>Produtos</Text>
      <ProductConteiner>
        {data.products.map((value: PropsProduct) => (
          <ProductCase key={value.id}>
            <Link href={`/product?id=${value.id}`}>
              <ProductImgConteiner>
                <ProductImg src={value.url_img}></ProductImg>
              </ProductImgConteiner>
              <ProductDesc>
                <h2>{value.name.toUpperCase()}</h2>
                <h3>{converterParaReal(value.price_in_cent)}</h3>
              </ProductDesc>
            </Link>
          </ProductCase>
        ))}
      </ProductConteiner>
    </Conteiner>
  );
}
