import Carousel from "react-multi-carousel";

import Hero1 from "../public/images/bg-1.jpg"
import Hero2 from "../public/images/bg-2.jpg"
import Hero3 from "../public/images/bg-3.jpg"
import Hero4 from "../public/images/bg-4.jpg"
import HomeCarouselItem from "./HomeCarouselItem";

import {FaAngleLeft, FaAngleRight} from "react-icons/fa"

const CustomRightArrow = ({ onClick, ...rest }) => {
  // onMove means if dragging or swiping in progress.
  return <button className="hidden md:block text-5xl text-white absolute top-1/3 right-6 opacity-40" onClick={() => onClick()} >
    <FaAngleRight />
  </button>;
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  // onMove means if dragging or swiping in progress.
  return <button className="hidden md:block text-5xl text-white absolute top-1/3 left-6 opacity-40" onClick={() => onClick()} >
    <FaAngleLeft />
  </button>;
};

const HomeCarousel = () => {
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

  const images = [Hero1, Hero2, Hero3, Hero4]

  return (
    <Carousel
      draggable
      swipeable
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={2000}
      arrows={true}
      infinite
      customLeftArrow={<CustomLeftArrow/>}
      customRightArrow={<CustomRightArrow/>}
    >
      {images.map((image, index) => (
        <HomeCarouselItem key={index} image={image} />
      ))}
    </Carousel>
  )
}

export default HomeCarousel
