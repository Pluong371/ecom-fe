import React from "react";
import Image from "../UI/Image";
import HeadbandCateBack from "../../assets/HeadbandCateBack.png";
import EarbudsCateBack from "../../assets/EarbudsCateBack.png";
import AccessoriesCateBack from "../../assets/AccessoriesCateBack.png";
import { IconNarrow } from "../../assets/icon";
import { Link } from "react-router-dom";

const Shop_Collection = () => {
  return (
    <div className="tablet:mx-28 px-5 my-20">
      <h1 className="font-bold text-4xl mb-12">Shop Collection</h1>
      <div className=" tablet:grid grid-cols-2 gap-8">
        {/* Shop Collection large image */}
        <div className="relative group">
          <Link to="/login" className="block shadow-xl hover:shadow-2xl">
            <Image src={HeadbandCateBack} alt="pic1" className="w-full " />
            <div className="absolute bottom-12 left-10 p-4">
              <h1 className="text-4xl font-semibold mb-5">Headband</h1>
              <button className="font-normal text-xl gap-1 flex items-center relative">
                Collection
                <IconNarrow />
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </Link>
        </div>

        {/* Small Photo Collection Shop */}
        <div className="grid grid-rows-2 gap-8">
          <div className="relative group ">
            <Link to="/login" className="block shadow-xl hover:shadow-2xl">
              <Image src={EarbudsCateBack} alt="pic2" className="w-full " />
              <div className="absolute bottom-12 left-10 p-4">
                <h1 className="text-4xl font-semibold mb-4">Earbuds</h1>
                <button className="font-normal text-xl gap-1 flex items-center relative">
                  Collection
                  <IconNarrow />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </Link>
          </div>
          <div className="relative group">
            <Link to="/login" className="block shadow-xl hover:shadow-2xl">
              <Image src={AccessoriesCateBack} alt="pic2" className="w-full " />
              <div className="absolute bottom-12 left-10 p-4">
                <h1 className="text-4xl font-semibold mb-4">Accessories</h1>
                <button className="font-normal text-xl gap-1 flex items-center relative">
                  Collection
                  <IconNarrow />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop_Collection;
