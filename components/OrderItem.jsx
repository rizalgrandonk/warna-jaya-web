const OrderItem = ({ order }) => {
  return (
    <li className="relative flex flex-col items-center md:w-[45%] p-8 border border-slate-600 hover:border-primary hover:bg-primary rounded-md group transition-all duration-500">
      <span className="flex justify-center items-center w-10 h-10 text-lg rounded-full border-2 border-slate-300 bg-slate-300 group-hover:border-white group-hover:bg-transparent group-hover:text-white absolute left-3 top-3 transition-all duration-500">
        {order.nomor}
      </span>
      <span className="text-primary group-hover:text-white text-6xl py-2 transition-all duration-500">
        <order.icon />
      </span>
      <span className="h-0.5 w-14 bg-slate-400" />
      <p className="text-center md:text-xl mt-4 font-light group-hover:text-white transition-all duration-500">
        {order.text}
      </p>
    </li>
  );
};

export default OrderItem;
