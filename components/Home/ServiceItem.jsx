import { localize } from "lib/formater";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ServiceItem = ({ service }) => {
  const { locale } = useRouter();

  return (
    <div className="relative w-96 h-[70vh] shadow-lg overflow-hidden group rounded">
      <div className="w-full h-full transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 bg-cover bg-center relative">
        <Image
          src={service.image}
          alt={localize(locale, service.title)}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="text-white text-center w-full px-6 pb-6 pt-12 bg-primary transition-all duration-500 rounded-t-[100%] md:-mb-40 md:group-hover:mb-0">
          <h3 className="text-xl font-medium leading-none my-2">
            {localize(locale, service.title)}
          </h3>
          <span className="h-0.5 w-12 bg-slate-100 block mx-auto my-2" />
          <p className="text-sm font-light mb-4 pt-10">
            {localize(locale, service.message)}
          </p>
          <Link href={service.url}>
            <a className="inline-block my-2 px-4 py-2 bg-transparent hover:bg-slate-100 hover:text-primary font-medium tracking-wider uppercase rounded transition-all duration-500 border border-slate-100">
              {localize(locale, "detail")}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
