"use client";
import NavBar from "@/components/header/header";
import SearchMobile from "@/components/header/searchMobile";
import Slider from "@/components/main-page/slider/slider";
import Products from "@/components/main-page/products/products";
import styled from "styled-components";

const Conteiner = styled.main`
  background-color: ${(props) => props.theme.colors.bg};
`;

export default function Home() {
  return (
    <>
      <NavBar />
      <Conteiner>
        <SearchMobile></SearchMobile>
        <Slider></Slider>
        {Products()}
      </Conteiner>
    </>
  );
}
