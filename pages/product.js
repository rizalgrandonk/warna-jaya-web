import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/Product/ProductCarousel";

import Hero from "../public/images/bg-3.jpg";

const Product = () => {
  const navList = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Product",
      url: "/product",
    },
  ];
  return (
    <>
      <HeroSection image={Hero} title="Produk" navList={navList} />

      <div className="container mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-5xl font-semibold mb-16 text-center">
          Produk Produk Kami
        </h2>

        <ProductCarousel />
      </div>
    </>
  );
};

export default Product;
