import React from "react";
const HistoryOrder = [
  {
    id: "#3456_768",
    date: "October 17, 2023",
    status: "Delivered",
    price: "$1234.00",
  },
  {
    id: "#3456_980",
    date: "October 11, 2023",
    status: "Delivered",
    price: "$345.00",
  },
  {
    id: "#3456_120",
    date: "August 24, 2023",
    status: "Delivered",
    price: "$2345.00",
  },
  {
    id: "#3456_030",
    date: "August 12, 2023",
    status: "Delivered",
    price: "$845.00",
  },
];
export const Order = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 ">
        Order History
      </h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 p-4 text-left">Order ID</th>
            <th className="border-b-2 p-4 text-left">Date</th>
            <th className="border-b-2 p-4 text-left">Status</th>
            <th className="border-b-2 p-4 text-left">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {HistoryOrder.map((order) => (
            <tr key={order.id}>
              <td className="border-b p-4">{order.id}</td>
              <td className="border-b p-4">{order.date}</td>
              <td className="border-b p-4">{order.status}</td>
              <td className="border-b p-4">{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Order;
