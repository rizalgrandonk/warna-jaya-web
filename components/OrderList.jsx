import { FaWhatsapp } from "react-icons/fa";
import { GiCardboardBox } from "react-icons/gi";
import { BsCardChecklist, BsPercent } from "react-icons/bs";
import OrderItem from "./OrderItem";

const OrderList = () => {
  const orders = [
    {
      nomor: 1,
      icon: FaWhatsapp,
      text: "Contact melalui whatsapp atau email",
    },
    {
      nomor: 2,
      icon: BsPercent,
      text: "Berikan penawaran harga dan barang",
    },
    {
      nomor: 3,
      icon: GiCardboardBox,
      text: "Jika kami setujui masuk ke proses pengiriman",
    },
    {
      nomor: 4,
      icon: BsCardChecklist,
      text: "3x check konfirmasi sebelum melakukan pengiriman melalui faktur,surat jalan,surat pre order",
    },
  ];

  return (
    <ol className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
      {orders.map((order) => (
        <OrderItem key={order.nomor} order={order} />
      ))}
    </ol>
  );
};

export default OrderList;
