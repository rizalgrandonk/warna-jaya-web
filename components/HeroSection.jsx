import { localize } from "lib/formater";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const HeroSection = ({ image, title, navList }) => {
  const { locale } = useRouter();

  return (
    <div className="w-full h-[70vh] relative">
      <Image
        src={image}
        alt=""
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        loading="lazy"
      />
      <div className="relative w-full h-full bg-black/60 flex justify-center items-center text-white">
        <div className="text-center">
          <h1 className="text-3xl md:text-6xl font-semibold my-8">
            {localize(locale, title)}
          </h1>
          <p className="text-center text-lg">
            {navList.map((nav, index) => (
              <React.Fragment key={index}>
                <Link href={nav.url}>
                  <a>{localize(locale, nav.text)}</a>
                </Link>
                {index !== navList.length - 1 && (
                  <span
                    key={index + 10}
                    className="inline-block w-2 h-2 bg-primary mx-4 rounded-full"
                  />
                )}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
