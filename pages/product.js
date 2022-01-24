import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/Product/ProductCarousel";
import { localize } from "lib/formater";
import { useRouter } from "next/router";

import Hero from "../public/images/bg-3.jpg";

const Product = () => {
  const { locale } = useRouter();

  const navList = [
    {
      text: "beranda",
      url: "/",
    },
    {
      text: "produk",
      url: "/product",
    },
  ];
  return (
    <>
      <HeroSection image={Hero} title="produk" navList={navList} />

      <div className="container mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-5xl font-semibold mb-16 text-center">
          {localize(locale, "produkKami")}
        </h2>

        <ProductCarousel />
      </div>
    </>
  );
};

export default Product;
