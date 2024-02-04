import "./App.css";
import Brand from "./components/layout/brand";
import BrandBanner from "./components/layout/brand-banner";
import Footer from "./components/layout/footer";
import GridProducts from "./components/layout/grid-products";
import HotCategory from "./components/layout/hot-category";
import NewsletterInstagram from "./components/layout/newsletter-instagram";
import SliderProducts from "./components/layout/slider-products";
import TopMain from "./components/layout/top-main";

function App() {
  return (
    <>
      <TopMain />
      <Brand />
      <HotCategory />
      <GridProducts />
      <BrandBanner />
      <SliderProducts />
      <NewsletterInstagram />
      <Footer />
    </>
  );
}

export default App;
