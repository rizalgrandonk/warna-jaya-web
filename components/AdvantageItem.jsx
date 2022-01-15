const AdvantageItem = ({ advantage }) => {
  return (
    <div className="md:w-[45%] flex items-start gap-4">
      <span className="p-3 bg-slate-800 rounded-full text-white text-2xl">
        <advantage.icon />
      </span>
      <p className="text-sm font-light">{advantage.text}</p>
    </div>
  );
};

export default AdvantageItem;
