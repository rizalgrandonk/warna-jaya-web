import HeroSection from "@/components/HeroSection";
import { FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";

import Hero from "../public/images/bg-4.jpg";

const Contact = () => {
  const navList = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Contact",
      url: "/contact",
    },
  ];
  return (
    <>
      <HeroSection image={Hero} title="Contact" navList={navList} />
      <div className="container mx-auto py-20 relative px-6">
        <div className="flex flex-col md:flex-row justify-center items-start gap-10">
          <div className="w-full md:w-1/2">
            <div className="w-full h-[70vh] rounded-md overflow-hidden shadow-md p-2 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0681823980553!2d112.738695314745!3d-7.2330638947785735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f918c1d8d075%3A0xf53f0c20c5a6a891!2sUD%20Warna%20Jaya!5e0!3m2!1sen!2sid!4v1642610226925!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 pl-10 py-4 border-l">
            <p className="text-slate-700 text-lg mb-4 font font-medium">
              Contact Us
            </p>
            <h3 className="text-3xl md:text-5xl md:pr-20 font-semibold text-primary leading-normal mb-10">
              Contact Information
            </h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full border-dotted border border-primary p-2">
                <span className="w-16 h-16 bg-primary text-white text-3xl text-center flex justify-center items-center rounded-full">
                  <FaMapMarkedAlt />
                </span>
              </div>
              <div>
                <h4 className="text-xl text-slate-700 font-semibold">
                  Address
                </h4>
                <p className="text-lg font-light">
                  Jl. Panggung No. 150, Surabaya
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full border-dotted border border-primary p-2">
                <span className="w-16 h-16 bg-primary text-white text-3xl text-center flex justify-center items-center rounded-full">
                  <MdEmail />
                </span>
              </div>
              <div>
                <h4 className="text-xl text-slate-700 font-semibold">Email</h4>
                <p className="text-lg font-light">warnajayasby150@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full border-dotted border border-primary p-2">
                <span className="w-16 h-16 bg-primary text-white text-3xl text-center flex justify-center items-center rounded-full">
                  <MdPhoneInTalk />
                </span>
              </div>
              <div>
                <h4 className="text-xl text-slate-700 font-semibold">Phone</h4>
                <p className="text-lg font-light">(031)3521675</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full border-dotted border border-primary p-2">
                <span className="w-16 h-16 bg-primary text-white text-3xl text-center flex justify-center items-center rounded-full">
                  <FaWhatsapp />
                </span>
              </div>
              <div>
                <h4 className="text-xl text-slate-700 font-semibold">
                  Whatsapp
                </h4>
                <p className="text-lg font-light">082131256256</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
