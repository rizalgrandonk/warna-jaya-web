import ClientList from "@/components/ClientList";
import HeroSection from "@/components/HeroSection";
import { localize } from "lib/formater";
import Image from "next/image";
import { useRouter } from "next/router";

import { GiTiredEye, GiBullseye } from "react-icons/gi";

import Hero from "../public/images/bg-1.jpg";
import Bg2 from "../public/images/bg-2.jpg";
import Bg4 from "../public/images/bg-4.jpg";

const About = () => {
  const { locale } = useRouter();

  const navList = [
    {
      text: "beranda",
      url: "/",
    },
    {
      text: "tentang",
      url: "/about",
    },
  ];
  return (
    <>
      <HeroSection image={Hero} title="tentangKami" navList={navList} />

      <div className="container mx-auto py-20 relative px-6">
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="w-full md:w-1/2">
            <p className="text-slate-700 text-lg mb-4 font font-medium">
              {localize(locale, "tentangKami")}
            </p>
            <h3 className="text-3xl md:text-5xl md:pr-20 font-semibold text-primary leading-normal">
              {localize(locale, "aboutSub")}
            </h3>
          </div>
          <div className="w-full md:w-1/2 text-slate-500 md:pl-20 py-8 md:border-l md:border-slate-300">
            <p className="mb-4">{localize(locale, "aboutText1")}</p>
            <p className="mb-4">{localize(locale, "aboutText2")}</p>
            <p className="mb-4">{localize(locale, "aboutText3")}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-2/5 h-52 md:h-auto">
            <Image
              src={Bg2}
              alt=""
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-3/5 h-full bg-slate-700 px-4 md:px-12 pb-16 pt-12 text-slate-200">
            <p className="w-min mx-auto mb-8">
              <span className="text-white text-8xl">
                <GiTiredEye />
              </span>
            </p>
            <h2 className="text-center text-2xl md:text-3xl mb-3 font-bold tracking-wide leading-tight">
              {localize(locale, "visi")}
            </h2>
            <span className="block h-0.5 w-12 mx-auto mb-8 bg-white" />
            <p className="text-lg font-light leading-normal">
              {localize(locale, "visiText")}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-2/5 h-52 md:h-auto">
            <Image
              src={Bg4}
              alt=""
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-3/5 h-full bg-slate-700 px-4 md:px-12 pb-16 pt-12 text-slate-200">
            <p className="w-min mx-auto mb-8">
              <span className="text-white text-8xl">
                <GiBullseye />
              </span>
            </p>
            <h2 className="text-center text-2xl md:text-3xl mb-3 font-bold tracking-wide leading-tight">
              {localize(locale, "misi")}
            </h2>
            <span className="block h-0.5 w-12 mx-auto mb-8 bg-white" />
            <p className="text-lg font-light leading-normal">
              {localize(locale, "misiText")}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-20 pb-24 relative">
        <p className="text-2xl md:text-3xl font-medium uppercase text-center mb-10 tracking-wider px-4">
          {localize(locale, "dipercayaPerusahaan")}
        </p>
        <ClientList />
      </div>
    </>
  );
};

export default About;
