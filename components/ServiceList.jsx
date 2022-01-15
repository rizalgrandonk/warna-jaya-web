import Hero1 from "../public/images/bg-1.jpg"
import Hero2 from "../public/images/bg-2.jpg"
import Hero3 from "../public/images/bg-3.jpg"
import ServiceItem from "./ServiceItem"

const ServiceList = () => {
  const services = [
    {
      title: "About",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas numquam pariatur vitae iste iusto",
      image: Hero1,
      url: '/about'
    },
    {
      title: "Dyestuffs & Chemicals",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas numquam pariatur vitae iste iusto",
      image: Hero2,
      url: '/product'
    },
    {
      title: "Contact",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas numquam pariatur vitae iste iusto",
      image: Hero3,
      url: '/contact'
    },
  ]

  return (
    <div className=" w-full flex justify-center items-stretch flex-wrap gap-6 py-6 px-4">
      {services.map((service, index) => (
        <ServiceItem key={index} service={service} />
      ))}
    </div>
  )
}

export default ServiceList
