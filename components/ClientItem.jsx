const ClientItem = ({ client }) => {
  return (
    <div className="w-full px-4 py-6">
      <div className="p-5 bg-primary text-center rounded-lg relative">
        <p className="text-lg font-medium text-blue-200 first-letter:text-3xl first-letter:text-white first-letter:font-semibold">
          {client}
        </p>
        <div className="absolute h-0 w-0 border-[0_1.5rem_1.5rem_1.5rem] border-transparent border-b-primary left-1/2 -top-6 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default ClientItem;
