import Image from "../UI/Image";
import React from "react";
import pic_seller from "../../assets/pic-home.png";
import Countdown from "../UI/countdown/Countdown ";
const Seller = () => {
  return (
    <div className=" tablet:grid grid-cols-2 my-10 ">
      <Image
        src={pic_seller} 
        content="pic_seller"
        className="w-full object-cover "
      />
      <div className="flex bg-[#FFAB0066] justify-center items-center  ">
        <Countdown />
      </div>
    </div>
  );
};
export default Seller;
