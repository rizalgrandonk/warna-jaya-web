import ClientList from "@/components/ClientList";
import Image from "next/image";
import Link from "next/link";

import { GiTiredEye, GiBullseye } from "react-icons/gi";

import Bg1 from "../public/images/bg-1.jpg";
import Bg2 from "../public/images/bg-2.jpg";
import Bg4 from "../public/images/bg-4.jpg";

const About = () => {
  return (
    <>
      <div className="w-full h-[70vh] relative">
        <Image
          src={Bg1}
          alt=""
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
        />
        <div className="relative w-full h-full bg-black/60 flex justify-center items-center text-white">
          <div className="text-center">
            <h1 className="text-3xl md:text-6xl font-bold my-8">About Us</h1>
            <p className="text-center text-lg">
              <Link href={"/"}>
                <a>Home</a>
              </Link>
              <span className="inline-block w-2 h-2 bg-primary mx-4 rounded-full" />
              About
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-20 relative px-6">
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="w-full md:w-1/2">
            <p className="text-primary text-lg mb-4 font font-medium">
              About Us
            </p>
            <h3 className="text-3xl md:text-5xl md:pr-20 font-semibold text-slate-700 leading-snug">
              Warna Jaya surabaya sudah memiliki customer yang tersebar luas
            </h3>
          </div>
          <div className="w-full md:w-1/2 text-slate-500 md:pl-20 py-8 md:border-l md:border-slate-300">
            <p className="mb-4">
              Warna Jaya surabaya telah berdiri sejak 1989 dan memiliki
              produk-produk untuk pewarnaan, hingga pencucian bahan tekstil
              serta pewarna untuk pupuk , plywood, dupa , kertas , batik , tinta
              serta penyamakan kulit.
            </p>
            <p className="mb-4">
              Dengan pengalamannya selama kurang lebih 30 tahun di dunia
              chemical industry, pastinya Warna Jaya juga menjadi tempat bagi
              para industri terkait yang baru berdiri untuk melakukan konsultasi
              agar ke depannya produk dari industri tersebut juga berjalan
              dengan baik di pasaran.
            </p>
            <p className="mb-4">
              Hingga 2021, Warna Jaya surabaya sudah memiliki customer yang
              tersebar luas di seluruh indonesia mulai dari Sumatera Utara, Jawa
              Tengah, Jawa Timur, Bali, Nusa Tenggara Timur, Kalimantan Selatan,
              Kalimantan Timur, Sulawesi Selatan, Sulawesi Tenggara, hingga
              Papua. Lebih dari 100 industry terkait.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-52 md:h-auto">
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
          <div className="w-full md:w-1/2 h-full bg-slate-700 px-4 md:px-12 pb-16 pt-12 text-slate-200">
            <p className="w-min mx-auto mb-8">
              <span className="text-white text-8xl">
                <GiTiredEye />
              </span>
            </p>
            <h2 className="text-center text-2xl md:text-3xl mb-3 font-bold tracking-wide leading-tight">
              Visi
            </h2>
            <span className="block h-0.5 w-12 mx-auto mb-8 bg-white" />
            <p className="text-lg font-light leading-normal">
              Untuk menjadi produsen dan pemasok terkemuka Bahan-Bahan Warna &
              Kimia Berkualitas Tinggi di Indonesia dan sekitarnya
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-52 md:h-auto">
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

          <div className="w-full md:w-1/2 h-full bg-slate-700 px-4 md:px-12 pb-16 pt-12 text-slate-200">
            <p className="w-min mx-auto mb-8">
              <span className="text-white text-8xl">
                <GiBullseye />
              </span>
            </p>
            <h2 className="text-center text-2xl md:text-3xl mb-3 font-bold tracking-wide leading-tight">
              Misi
            </h2>
            <span className="block h-0.5 w-12 mx-auto mb-8 bg-white" />
            <p className="text-lg font-light leading-normal">
              Mengolah dan memasok Zat Warna & Bahan Kimia Berkualitas Tinggi
              untuk memenuhi meningkatnya permintaan industri tekstil di
              Indonesia
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-20 pb-24 relative">
        <p className="text-2xl md:text-3xl font-medium uppercase text-center mb-10 tracking-wider px-4">
          Trusted by various companies
        </p>
        <ClientList />
      </div>
    </>
  );
};

export default About;
