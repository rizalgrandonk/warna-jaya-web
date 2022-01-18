import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/logo_text_2.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-200 px-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 py-10 px-2 border-b border-slate-50">
        <div className="w-full md:w-[40%]">
          <Link href={"/"}>
            <a className="block relative h-12 w-56">
              <Image
                src={Logo}
                alt="Warna Jaya Logo"
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </a>
          </Link>
          <p className="px-1 mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            quae earum similique officia inventore corrupti in ad architecto,
            neque quos veritatis, velit reprehenderit cupiditate fugit eius
            corporis iure officiis eum.
          </p>
        </div>

        <div className="w-full md:w-[30%]">
          <h3 className="text-2xl font-semibold py-1">Navigation</h3>
          <span className="block h-0.5 w-full bg-slate-50 relative mb-4">
            <span className="block h-0.5 w-14 bg-primary absolute left-0" />
          </span>

          <ul className="uppercase text-sm font-medium">
            <li className="py-2">
              <Link href={"/"}>
                <a className="hover:text-primary transition-all">Home</a>
              </Link>
            </li>

            <li className="py-2">
              <Link href={"/"}>
                <a className="hover:text-primary transition-all">About Us</a>
              </Link>
            </li>

            <li className="py-2">
              <Link href={"/"}>
                <a className="hover:text-primary transition-all">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-[30%] text-sm">
          <h3 className="text-2xl font-semibold py-1">Contact Info</h3>
          <span className="block h-0.5 w-full bg-slate-50 relative mb-4">
            <span className="block h-0.5 w-14 bg-primary absolute left-0" />
          </span>

          <p className="py-2">
            <span className="font-bold">Address : </span>Jl. Jalan
          </p>
          <p className="py-2">
            <span className="font-bold">Email : </span>warnajayasby150@gmail.com
          </p>
          <p className="py-2">
            <span className="font-bold">Phone : </span>(031)3521675
          </p>
          <p className="py-2">
            <span className="font-bold">WhatsApp : </span>082131256256
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center py-8">
        <p className="text-sm">&copy; Warna Jaya Surabaya</p>
      </div>
    </footer>
  );
};

export default Footer;
