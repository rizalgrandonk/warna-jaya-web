import Carousel from "react-multi-carousel";

import ClientItem from "./ClientItem";

import { clients } from "data/clients";

const CustomCarouselDot = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
    <button
      className={`h-3 mx-1 mb-16 transition-all ${
        active ? "w-8 bg-primary" : "w-4 bg-gray-400"
      }`}
      onClick={() => onClick()}
    ></button>
  );
};

const ClientList = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
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
    >
      {clients.map((client, index) => (
        <ClientItem key={index} client={client} />
      ))}
    </Carousel>
  );
};

export default ClientList;
