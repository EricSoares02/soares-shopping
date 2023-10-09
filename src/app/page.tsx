"use client";
import SearchMobile from "@/components/header/searchMobile";
import Slider from "@/components/main-page/slider/slider";
import Products from "@/components/main-page/products/products";
import "dotenv";
import Footer from "@/components/footer/footer";



export default function Home() {
 
  return (
    <>
      <main>
        <SearchMobile></SearchMobile>
        <Slider></Slider>
        {Products()}
        
      </main>
      
    </>
  );
}
