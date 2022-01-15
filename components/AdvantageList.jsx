import { RiUserFollowLine } from "react-icons/ri";
import { AiOutlineFileProtect } from "react-icons/ai";
import { ImStack } from "react-icons/im";
import { GoThumbsup } from "react-icons/go";
import AdvantageItem from "./AdvantageItem";

const AdvantageList = () => {
  const advantages = [
    {
      icon: RiUserFollowLine,
      text: "Staff yang sangat support dalam segala permasalahan terkait yang dimiliki customer",
    },
    {
      icon: AiOutlineFileProtect,
      text: "Pengalaman yang cukup lama dibidang chemical industries dan dyestuff",
    },
    {
      icon: ImStack,
      text: "Product yang kami tawarkan lengkap untuk segala kebutuhan produksi tekstil dan lain lain",
    },
    {
      icon: GoThumbsup,
      text: "Kualitas barang yang kami tawarkan lengkap mulai dari product dengan kualitas terbaik hingga kualitas terendah menyesuaikan dengan permintaan customer",
    },
  ];

  return (
    <div className="w-full flex justify-between gap-8 flex-wrap">
      {advantages.map((advantage, index) => (
        <AdvantageItem key={index} advantage={advantage} />
      ))}
    </div>
  );
};

export default AdvantageList;
