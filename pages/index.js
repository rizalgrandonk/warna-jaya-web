import ClientList from "@/components/ClientList";
import HomeCarousel from "@/components/HomeCarousel";
import ServiceList from "@/components/ServiceList";
import Image from "next/image";
import Link from "next/link";

import Bg from "../public/images/bg-4.jpg";

import { Parallax } from "react-parallax";
import AdvantageList from "@/components/AdvantageList";
import OrderList from "@/components/OrderList";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen md:h-[140vh] relative">
        <HomeCarousel />
        <div className="text-white z-10 absolute left-1/2 top-1/2 md:top-1/4 -translate-x-1/2 -translate-y-1/2 md:-translate-y-0 text-center w-full md:w-[80%] px-4">
          <p className="my-4 text-xl md:text-3xl font-medium italic">
            Dyestuff & Chemical
          </p>
          <h1 className="text-4xl md:text-8xl font-bold tracking-widest my-6 leading-tight">
            Warna Jaya Surabaya
          </h1>
          <Link href={`/contact`}>
            <a className="inline-block w-full md:w-auto my-2 md:my-6 md:mx-3 px-6 py-3 bg-primary hover:bg-slate-100 hover:text-primary font-medium tracking-wider uppercase rounded transition-all duration-500">
              Contact Us
            </a>
          </Link>
          <Link href={`/product`}>
            <a className="inline-block w-full md:w-auto my-2 md:my-6 md:mx-3 px-6 py-3 bg-transparent hover:bg-slate-100 hover:text-primary font-medium tracking-wider uppercase rounded transition-all duration-500 border border-slate-100">
              Discover Product
            </a>
          </Link>
        </div>
        <svg
          className="hidden md:block absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f1f5f9"
            fillOpacity="1"
            d="M0,96L120,133.3C240,171,480,245,720,240C960,235,1200,149,1320,106.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative container mx-auto pb-14 md:-mt-64">
        <ServiceList />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-[45%] h-52 md:h-auto">
          <Image
            src={Bg}
            alt=""
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-[55%] h-full bg-slate-700 px-4 md:px-14 py-16 text-white">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide leading-tight">
            Our Advantages
          </h2>
          <p className="font-light my-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            voluptas numquam pariatur vitae iste iusto
          </p>
          <AdvantageList />
        </div>
      </div>

      <div className="container mx-auto pt-20 pb-24 relative">
        <p className="text-2xl md:text-3xl font-medium uppercase text-center mb-10 tracking-wider px-4">
          Trusted by various companies
        </p>
        <ClientList />
      </div>

      <Parallax bgImage={"/images/bg-3.jpg"} strength={600}>
        <div className="text-white py-20 md:py-28 bg-black/60 text-center px-4">
          <h3 className="text-3xl md:text-5xl font-bold tracking-wide my-6 leading-tight mx-auto md:w-1/2">
            Get the best quality products
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            voluptas numquam pariatur vitae iste iusto
          </p>
          <Link href={`/product`}>
            <a className="inline-block w-full md:w-auto my-2 md:my-6 md:mx-3 px-8 py-4 bg-primary hover:bg-slate-100 hover:text-primary font-medium tracking-wider uppercase rounded transition-all duration-500">
              Discover Product
            </a>
          </Link>
        </div>
      </Parallax>

      <div className="container mx-auto py-20 relative px-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide leading-tight mb-10 text-center">
          Order System
        </h2>
        <OrderList />
      </div>
    </>
  );
}
