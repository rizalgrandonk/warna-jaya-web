import OrderItem from "./OrderItem";

import { orders } from "data/orderSystems";

const OrderList = () => {
  return (
    <ol className="flex flex-col md:flex-row justify-center gap-6 flex-wrap">
      {orders.map((order) => (
        <OrderItem key={order.nomor} order={order} />
      ))}
    </ol>
  );
};

export default OrderList;
