const ClientItem = ({ client }) => {
  return (
    <div className="w-full px-4 py-6">
      <div className="py-4 px-2 bg-primary text-center rounded-lg relative">
        <p className="text-lg font-medium text-white">{client}</p>
        <div className="absolute h-0 w-0 border-[0_1rem_1rem_1rem] border-transparent border-b-primary left-1/2 -top-4 -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default ClientItem;
