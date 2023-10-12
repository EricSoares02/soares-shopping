"use client";
import SearchMobile from "@/components/header/searchMobile";
import Slider from "@/components/main-page/slider/slider";
import Products from "@/components/main-page/products/products";
import "dotenv";
import Footer from "@/components/footer/footer";
import styled from "styled-components";

const Separetor = styled.div`
width: 100%;
height: 20px;
background-color: ${props=>props.theme.colors.bg};
`

export default function Home() {
 
  return (
    <>
      <main>
        <SearchMobile></SearchMobile>
        <Slider></Slider>
        <Separetor></Separetor>
        {Products()}
      </main>
      
    </>
  );
}
