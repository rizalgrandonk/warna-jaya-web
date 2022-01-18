import AdvantageItem from "./AdvantageItem";

import { advantages } from "data/advantages";

const AdvantageList = () => {
  return (
    <div className="w-full flex justify-between gap-8 flex-wrap">
      {advantages.map((advantage, index) => (
        <AdvantageItem key={index} advantage={advantage} />
      ))}
    </div>
  );
};

export default AdvantageList;
