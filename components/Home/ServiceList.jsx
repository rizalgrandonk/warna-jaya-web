import ServiceItem from "./ServiceItem";

import { services } from "data/services";

const ServiceList = () => {
  return (
    <div className=" w-full flex justify-center items-stretch flex-wrap gap-6 py-6 px-4">
      {services.map((service, index) => (
        <ServiceItem key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
