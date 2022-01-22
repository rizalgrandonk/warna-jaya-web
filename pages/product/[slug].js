import HeroSection from "@/components/HeroSection";
import { useRouter } from "next/router";

import { products } from "data/products";
import LoadingSpinner from "@/components/LoadingSpinner";
import CategoryList from "@/components/Product/CategoryList";

const SingleProduct = () => {
  const router = useRouter();
  const slug = router.query.slug;

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
      text: "Home",
      url: "/",
    },
    {
      text: "Product",
      url: "/product",
    },
    {
      text: product.name,
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
          Pilihan Warna {product.name}
        </h2>

        <CategoryList categories={product.categories} />
      </div>
    </>
  );
};

export default SingleProduct;
