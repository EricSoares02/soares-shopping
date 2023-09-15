"use client";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./global.style";
import NavBar from "@/components/header/header";
import App from "./home";

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60,
    },
  },
});

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
