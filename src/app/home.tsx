import SearchMobile from "@/components/header/searchMobile";
import Products from "@/components/main-page/products/products";
import Slider from "@/components/main-page/slider/slider";

export default function App() {
  return (
    <main>
      <SearchMobile></SearchMobile>
      <Slider></Slider>
      {Products()}
    </main>
  );
}
