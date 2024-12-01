import React from "react";

import { Shipping, CardIcon, SecureIcon, PhoneIcon } from "../../assets/icon";
const SupportServices = () => {
  return (
    <div className=" grid grid-cols-2 tablet:grid-cols-2 desktop:grid-cols-4 justify-between gap-8 my-5 tablet:mx-24 px-5 ">
      <div className=" bg-gray-200  min-h-[200px] max-h-[280px] hover:shadow-lg ">
        <div className="ml-10 mt-12 ">
          <Shipping />
          <h1 className="mt-5 mb-2 font-semibold text-xl">Free Shipping</h1>
          <p className="font-thin text-sm">Order above $200</p>
        </div>
      </div>
      <div className=" bg-gray-200  min-h-[200px] max-h-[280px] hover:shadow-lg ">
        <div className="ml-10 mt-12 ">
          <CardIcon />
          <h1 className="mt-5 mb-2 font-semibold text-xl">Money-back</h1>
          <p className="font-thin text-sm">30 days guarantee</p>
        </div>
      </div>
      <div className=" bg-gray-200   min-h-[200px] max-h-[280px] hover:shadow-lg ">
        <div className="ml-10 mt-12 ">
          <SecureIcon />
          <h1 className="mt-5 mb-2 font-semibold text-xl">Secure Payments</h1>
          <p className="font-thin text-sm">Secured by Stripe</p>
        </div>
      </div>
      <div className=" bg-gray-200  min-h-[200px] max-h-[280px] hover:shadow-lg ">
        <div className="ml-10 mt-12 ">
          <PhoneIcon />
          <h1 className="mt-5 mb-2 font-semibold text-xl">24/7 Support</h1>
          <p className="font-thin text-sm">Phone and Email support</p>
        </div>
      </div>
    </div>
  );
};
export default SupportServices;
