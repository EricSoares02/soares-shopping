"use client";
import NavBar from "@/components/header/header";
import SearchMobile from "@/components/header/searchMobile";
import Slider from "@/components/main-page/slider/slider";
import Products from "@/components/main-page/products/products";
import "dotenv";



export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <SearchMobile></SearchMobile>
        <Slider></Slider>
        {Products()}
      </main>
    </>
  );
}
