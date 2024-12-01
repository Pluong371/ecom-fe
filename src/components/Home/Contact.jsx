import React from "react";
import Pic1_Contact from "../../assets/Pic1_Contact.png";
import Pic2_Contact from "../../assets/Pic2_Contact.png";
import Pic3_Contact from "../../assets/Pic3_Contact.png";
import Pic4_Contact from "../../assets/Pic4_Contact.png";
import Image from "../UI/Image";
const Contact = () => {
  return (
    <div className="tablet:mx-24 px-5 my-20">
      <div className=" flex flex-col justify-center items-center  ">
        <h2 className="uppercase font-bold text-[#6C7275] ">newsfeed</h2>
        <h1 className="text-4xl font-semibold m-3">Instagram</h1>
        <h2 className="text-lg font-normal mt-2 ">
          Follow us on social media for more discount & promotions
        </h2>
        <p className="text-[#6C7275] font-bold mt-3">@3legant_official</p>
      </div>
      <div className="tablet:grid grid-cols-4 tablet:gap-4 mt-6 justify-between  ">
        <Image src={Pic1_Contact} className=" w-full h-auto hover:shadow-2xl" />
        <Image src={Pic2_Contact} className=" w-full h-auto hover:shadow-2xl" />
        <Image src={Pic3_Contact} className=" w-full h-auto hover:shadow-2xl" />
        <Image src={Pic4_Contact} className=" w-full h-auto hover:shadow-2xl" />
      </div>
    </div>
  );
};
export default Contact;
