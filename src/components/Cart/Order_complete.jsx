import React, { useState } from "react";
import { CheckoutIcon } from "../../assets/icon";
import { useSelector } from "react-redux";
import Image from "../UI/Image";
const Order_complete = ({ setStep }) => {
  const cart = useSelector((state) => state.cart.items);
  const date = useSelector((state) => state.cart.date);
  const total = useSelector((state) => state.cart.total);
  return (
    <div className="w-full flex  items-center flex-col">
      <div className="flex flex-col w-full items-center ">
        <h1 className="text-5xl font-semibold mb-6 justify-center flex">
          Order Complete
        </h1>
        <div className=" w-full flex justify-center mb-10">
          <div className="grid grid-cols-3 w-3/5 gap-8">
            <div
              onClick={() => setStep(1)}
              className="flex border-b-2 group border-green-400 pb-3 hover:cursor-pointer"
            >
              <span className="bg-green-400 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
                <CheckoutIcon data />
              </span>
              <span className="mx-4 my-1 text-green-400 text-lg">
                Shopping cart
              </span>
            </div>
            <div
              onClick={() => setStep(2)}
              className="flex border-b-2 group border-green-400 pb-3 hover:cursor-pointer"
            >
              <span className="bg-green-400 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
                <CheckoutIcon data />
              </span>
              <span className="mx-4 my-1 text-green-400 text-lg">
                Checkout details
              </span>
            </div>
            <div className="flex border-b-2 border-black pb-3">
              <span className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
                3
              </span>
              <span className="mx-4 my-1 text-lg">Order complete</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="  w-2/3
       border-2  border-black  my-10 "
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 28px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
      >
        <div className="flex flex-col my-14 mx-20 items-center justify-center">
          <h1 className="text-xl font-medium text-gray-400">Thank you</h1>
          <h1 className="text-4xl text-center mt-4 font-semibold text-black">
            Your order has been received
          </h1>
          <div className="grid grid-cols-3 gap-2 justify-center items-center w-2/3 mt-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex my-3 items-center relative mx-3"
              >
                <Image src={product.image} alt={product.name} />
                <span className="absolute -top-4 -right-2 bg-black text-white rounded-full px-3 py-1 text-2xl">
                  {product.quantity}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-5 w-1/2 gap-6 justify-center items-center">
            <div className="flex justify-between w-full">
              <p className="text-xl font-medium text-gray-400">Order Code</p>
              <p className="text-xl font-semibold text-black">{total}</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-xl font-medium text-gray-400">Date</p>
              <p className="text-xl font-semibold text-black">{date}</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-xl font-medium text-gray-400">Total amount</p>
              <p className="text-xl font-semibold text-black">{total}</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-xl font-medium text-gray-400">
                Payment method:{" "}
              </p>
              <p className="text-xl font-semibold text-black">Credit Card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order_complete;
