"use client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./global.style";
import NavBar from "@/components/header/header";
import SearchMobile from "@/components/header/searchMobile";
import Load from "@/components/loading/loading";
import Slider from "@/components/main-page/slider/slider";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}
main{

position: absolute;
top:75px;
width: 100%;
height: auto;
}
`;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <main>
        <SearchMobile></SearchMobile>
        <Slider></Slider>
      </main>
    </ThemeProvider>
  );
}
