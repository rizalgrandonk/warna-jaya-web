import Image from "next/image"
import HeroImage from "../public/images/bg-1.jpg"


export default function Home() {
  return (
    <>
      <div className="w-full h-screen md:h-[140vh] relative">
        <Image 
          src={HeroImage}
          alt=""
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
        />
        <div className="relative w-full h-full flex items-center bg-black/60">

          
        </div>
        <svg className="hidden md:block absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f3f4f6" fillOpacity="1" d="M0,96L120,133.3C240,171,480,245,720,240C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
      </div>
      <div className="h-screen relative">
        
      </div>
    </>
  )
}
