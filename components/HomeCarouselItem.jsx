import Image from "next/image";

const HomeCarouselItem = ({ image }) => {
  return (
    <div className="w-full h-screen md:h-[140vh]">
      <Image
        src={image}
        alt=""
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        loading="lazy"
      />
      <div className="relative w-full h-full bg-black/60" />
    </div>
  );
};

export default HomeCarouselItem;
