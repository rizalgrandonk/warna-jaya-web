import { useState } from "react";
import Carousel from "react-multi-carousel";
import CustomCarouselDot from "../CustomCarouselDot";

import { products } from "data/products";
import ProductItem from "./ProductItem";

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative pb-28 w-full">
      <Carousel
        draggable
        swipeable
        customDot={<CustomCarouselDot />}
        showDots
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        renderDotsOutside
        infinite
        centerMode
        afterChange={(_, { currentSlide }) => {
          setCurrentSlide(currentSlide);
        }}
      >
        {products.map((product, index) => (
          <ProductItem
            key={product.id}
            slide={index + 2}
            product={product}
            currentSlide={currentSlide}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
