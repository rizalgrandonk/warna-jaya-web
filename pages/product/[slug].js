import HeroSection from "@/components/HeroSection";
import { useRouter } from "next/router";

import { products } from "data/products";
import LoadingSpinner from "@/components/LoadingSpinner";
import CategoryList from "@/components/Product/CategoryList";
import { localize } from "lib/formater";

const SingleProduct = () => {
  const { query, locale } = useRouter();
  const slug = query.slug;

  if (!slug) {
    return (
      <>
        <div className="w-full h-44 bg-secondary flex items-end"></div>
        <span className="block w-full h-8 rounded-b-lg bg-secondary" />
        <LoadingSpinner />
      </>
    );
  }

  const product = products.find((product) => product.slug == slug);

  const navList = [
    {
      text: "beranda",
      url: "/",
    },
    {
      text: "produk",
      url: "/product",
    },
    {
      text: localize(locale, product.name),
      url: `/product/${product.slug}`,
    },
  ];

  return (
    <>
      <HeroSection
        image={product.image}
        title={product.name}
        navList={navList}
      />

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-5xl font-semibold mb-12 text-center">
          Pilihan Warna {localize(locale, product.name)}
        </h2>

        <CategoryList categories={product.categories} />
      </div>
    </>
  );
};

export default SingleProduct;
