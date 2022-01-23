import Carousel from "react-multi-carousel";

import ClientItem from "./ClientItem";

import { clients } from "data/clients";
import CustomCarouselDot from "./CustomCarouselDot";

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
