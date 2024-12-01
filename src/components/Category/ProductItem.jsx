import React from "react";
import { Link } from "react-router-dom";

export const ProductItem = ({ id, image, name, price }) => {
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className=" overflow-hidden">
        <img
          src={image[0]}
          alt=""
          className=" hover:scale-100 transition ease-in-out"
        />
      </div>
      <p className=" pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{price}</p>
    </Link>
  );
};
