'use client'
import Filter from "@/components/unique-pages/search-page/filter";
import ProductsCaseSearch from "@/components/unique-pages/search-page/products";
import styled from "styled-components";
import { devices } from "../global.style";


const Conteiner = styled.div`
width: 100%;
height: auto;
display: grid;
grid-template-columns: repeat(2, auto);
`

const ProductsConteiner = styled.div`
height: auto;
display: grid;
grid-template-columns: repeat(3, auto);
padding: 25px;
gap: 12px;
@media ${devices["2xl"]} {
    grid-template-columns: repeat(2, auto);
  }
`

export default function SearchPage({
    searchParams,
  }: {
    searchParams: { value: string };
  }){

    
return(
  
   <main>
   <Conteiner>
    <Filter></Filter>
    <ProductsConteiner>
    {ProductsCaseSearch(searchParams.value)}
    </ProductsConteiner>
   </Conteiner>
   </main>
)

}