import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product, currentSlide, slide }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <a className="block w-full h-[30vh] md:h-[60vh] px-1 lg:px-3">
        <div className="relative w-full h-full shadow-md overflow-hidden group">
          <div
            className={`w-full h-full transition-all duration-500 bg-cover bg-center ${
              currentSlide == slide ? "scale-125" : "scale-100"
            }`}
          >
            <Image
              src={product.image}
              alt={product.name}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all flex justify-center items-center overflow-hidden">
            <h2
              className={`text-3xl md:text-6xl text-white text-center uppercase font-semibold transition-all duration-300 group-hover:scale-125 w-min ${
                currentSlide == slide ? "translate-y-0" : "translate-y-80"
              }`}
            >
              {product.name}
            </h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductItem;
