import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import Logo from "../../public/logo_text_2.svg";
import { products } from "data/products";

const Navbar = () => {
  const [activeNav, setAvtiveNav] = useState(false);
  const [togleMenu, setTogleMenu] = useState(false);
  const [togleDropDown, setTogleDropDown] = useState(false);

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
            <div className="flex items-center px-4 gap-8 h-12">
              <ul className="h-full flex items-stretch gap-8 uppercase text-sm font-medium px-4">
                <li className="flex justify-center items-center">
                  <Link href={"/"}>
                    <a className="hover:text-primary transition-all">Home</a>
                  </Link>
                </li>

                <li className="flex justify-center items-center">
                  <Link href={"/about"}>
                    <a className="hover:text-primary transition-all">About</a>
                  </Link>
                </li>

                <li className="relative group flex justify-center items-center gap-1 cursor-pointer">
                  <p className="hover:text-primary transition-all">Product</p>
                  <span>
                    <FaAngleDown />
                  </span>

                  <ul className="absolute top-12 left-0 bg-white py-3 text-black drop-shadow-2xl w-48 transition-all opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                    {products.map((product) => (
                      <li key={product.id} className="py-3 flex items-center">
                        <Link href={`/product/${product.slug}`}>
                          <a className="hover:text-primary transition-all px-3">
                            {product.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="flex justify-center items-center">
                  <Link href={"/contact"}>
                    <a className="hover:text-primary transition-all">Contact</a>
                  </Link>
                </li>
              </ul>
              <div className="flex items-center gap-2 group">
                <div className="h-10 w-10 grid place-items-center rounded-full bg-slate-300 group-hover:bg-primary text-primary group-hover:text-white text-2xl transition-all duration-500">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="uppercase text-sm">Contact Us</p>
                  <p className="uppercase text-primary font-bold text-sm">
                    +62 821 3125 6256
                  </p>
                </div>
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
            className={`absolute transition-all bg-white w-full z-0 ${
              togleMenu
                ? "left-0 opacity-100 pointer-events-auto"
                : "left-[30rem] opacity-0 pointer-events-none"
            }`}
          >
            <ul className="uppercase text-sm font-medium p-4">
              <li className="py-3">
                <Link href={"/"}>
                  <a className="hover:text-primary transition-all">Home</a>
                </Link>
              </li>

              <li className="py-3">
                <Link href={"/about"}>
                  <a className="hover:text-primary transition-all">About</a>
                </Link>
              </li>

              <li className="py-3">
                <p
                  onClick={() => setTogleDropDown(!togleDropDown)}
                  className="hover:text-primary transition-all cursor-pointer flex items-center gap-1"
                >
                  Product{" "}
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
                        <a className="hover:text-primary transition-all">
                          {product.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="py-3">
                <Link href={"/contact"}>
                  <a className="hover:text-primary transition-all">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
