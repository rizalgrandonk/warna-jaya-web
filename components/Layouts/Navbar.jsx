import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { FaAngleDown } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import Logo from "../../public/logo_text_2.svg";
import { products } from "data/products";
import { localize } from "lib/formater";

const Navbar = () => {
  const [activeNav, setAvtiveNav] = useState(false);
  const [togleMenu, setTogleMenu] = useState(false);
  const [togleDropDown, setTogleDropDown] = useState(false);

  const { locale } = useRouter();

  const inActiveClass =
    "absolute z-20 w-[80vw] top-14 left-1/2 -translate-x-1/2  shadow-[-10px_10px_0_0_grey]";
  const activeClass = "w-full fixed z-20 shadow-md";

  const changeNav = () => {
    if (window.scrollY >= 200) {
      setAvtiveNav(true);
    } else {
      setAvtiveNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <header
        className={`hidden md:block bg-white transition-all ${
          activeNav ? activeClass : inActiveClass
        }`}
      >
        <div className="container mx-auto">
          <nav className="w-full flex justify-between items-center py-4 px-2">
            <Link href={"/"}>
              <a className="block relative h-12 w-60">
                <Image
                  src={Logo}
                  alt="Warna Jaya Logo"
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </a>
            </Link>
            <div className="flex items-center px-4 gap-10 h-12">
              <ul className="h-full flex items-stretch gap-8 uppercase text-sm font-medium px-4">
                <li className="flex justify-center items-center">
                  <Link href={"/"}>
                    <a className="hover:text-primary transition-all">
                      {localize(locale, "beranda")}
                    </a>
                  </Link>
                </li>

                <li className="flex justify-center items-center">
                  <Link href={"/about"}>
                    <a className="hover:text-primary transition-all">
                      {localize(locale, "tentang")}
                    </a>
                  </Link>
                </li>

                <li className="relative group flex justify-center items-center gap-1 cursor-pointer">
                  <Link href={"/product"}>
                    <a className="hover:text-primary transition-all">
                      {localize(locale, "produk")}
                    </a>
                  </Link>
                  <span>
                    <FaAngleDown />
                  </span>

                  <ul className="absolute top-12 left-0 bg-white py-3 text-black drop-shadow-2xl w-48 transition-all opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                    {products.map((product) => (
                      <li key={product.id} className="py-3 flex items-center">
                        <Link href={`/product/${product.slug}`}>
                          <a className="hover:text-primary transition-all px-3">
                            {localize(locale, product.name)}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="flex justify-center items-center">
                  <Link href={"/contact"}>
                    <a className="hover:text-primary transition-all">
                      {localize(locale, "kontak")}
                    </a>
                  </Link>
                </li>
              </ul>

              <div className="flex justify-between items-center">
                <Link href="/" locale="en">
                  <a
                    className={`px-3 py-1 uppercase border border-primary md:text-xl font-medium ${
                      locale == "en" ? "text-white bg-primary" : ""
                    }`}
                  >
                    en
                  </a>
                </Link>
                <Link href="/" locale="id">
                  <a
                    className={`px-3 py-1 uppercase border border-primary md:text-xl font-medium ${
                      locale == "id" ? "text-white bg-primary" : ""
                    }`}
                  >
                    id
                  </a>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <header className="block md:hidden bg-white w-full fixed z-20">
        <div className="container mx-auto">
          <div className="w-full flex justify-between items-center p-2">
            <Link href={"/"}>
              <a className="block relative h-12 w-44">
                <Image
                  src={Logo}
                  alt="Warna Jaya Logo"
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </a>
            </Link>
            <button
              onClick={() => setTogleMenu(!togleMenu)}
              className="text-center text-4xl border px-2 py-1 rounded-sm"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
          <nav
            className={`absolute transition-all bg-white w-full z-0 py-3 ${
              togleMenu
                ? "left-0 opacity-100 pointer-events-auto"
                : "left-[30rem] opacity-0 pointer-events-none"
            }`}
          >
            <ul className="uppercase text-sm font-medium p-4">
              <li className="py-3">
                <Link href={"/"}>
                  <a
                    onClick={() => setTogleMenu(false)}
                    className="hover:text-primary transition-all"
                  >
                    {localize(locale, "beranda")}
                  </a>
                </Link>
              </li>

              <li className="py-3">
                <Link href={"/about"}>
                  <a
                    onClick={() => setTogleMenu(false)}
                    className="hover:text-primary transition-all"
                  >
                    {localize(locale, "tentang")}
                  </a>
                </Link>
              </li>

              <li className="py-3">
                <p
                  onClick={() => setTogleDropDown(!togleDropDown)}
                  className="hover:text-primary transition-all cursor-pointer flex items-center gap-1"
                >
                  {localize(locale, "produk")}
                  <span>
                    <FaAngleDown />
                  </span>
                </p>

                <ul
                  className={`uppercase text-sm font-medium p-2 pb-0 ${
                    togleDropDown ? "block" : "hidden"
                  }`}
                >
                  {products.map((product) => (
                    <li key={product.id} className="py-3">
                      <Link href={`/product/${product.slug}`}>
                        <a
                          onClick={() => setTogleMenu(false)}
                          className="hover:text-primary transition-all"
                        >
                          {localize(locale, product.name)}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="py-3">
                <Link href={"/contact"}>
                  <a
                    onClick={() => setTogleMenu(false)}
                    className="hover:text-primary transition-all"
                  >
                    {localize(locale, "kontak")}
                  </a>
                </Link>
              </li>
            </ul>

            <div className="grid grid-cols-2 px-4">
              <Link href="/" locale="en">
                <a
                  onClick={() => setTogleMenu(false)}
                  className={`px-3 py-2 uppercase border border-primary md:text-xl font-medium text-center ${
                    locale == "en" ? "text-white bg-primary" : ""
                  }`}
                >
                  en
                </a>
              </Link>
              <Link href="/" locale="id">
                <a
                  onClick={() => setTogleMenu(false)}
                  className={`px-3 py-2 uppercase border border-primary md:text-xl font-medium text-center ${
                    locale == "id" ? "text-white bg-primary" : ""
                  }`}
                >
                  id
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
