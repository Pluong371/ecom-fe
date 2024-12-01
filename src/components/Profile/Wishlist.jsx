import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../../store/cartSlice";
import Image from "../UI/Image";
import { RemoveItemIcon } from "../../assets/icon";
import { InputNumber, Radio, Space } from "antd";
import { updateQuantity, removeItem } from "../../store/wishlistSlice";
export const Wishlist = () => {
  const wishList = useSelector((state) => state.wishList);
  // const cart = useSelector((state) => state.cart.items);

  // useEffect(() => {
  //   console.log(wishList);
  //   dispatch(
  //     updateCart({
  //       items: cart,
  //     })
  //   );
  // }, [wishList]);
  const dispatch = useDispatch();
  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    } else {
      dispatch(removeItem({ id }));
    }
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };
  return (
    <div>
      <h1>Wishlist</h1>
      <table className=" bg-white">
        <thead className="text-left text-xl border-b-2 border-[#6C7275]">
          <tr>
            <th className="py-2 px-3 w-3/4">Product</th>
            <th className="py-2 px-3 w-1/12 ">Quantity</th>
            <th className="py-2 px-3 w-1/12">Price</th>
            <th className="py-2 px-3 w-1/12">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {wishList.map((product) => {
            const totalForItem = product.price * product.quantity;
            return (
              <tr
                key={product.id}
                className="text-center border-b border-gray-200 "
              >
                <td className="py-2 px-3 w-3/4">
                  <div className="flex my-4 ">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-28"
                    />
                    <div className="flex flex-col ml-3 items-start justify-between my-2">
                      <p className="font-bold text-left ">{product.name}</p>
                      <p className="text-gray-500 flex">color: Red</p>
                      <button
                        className="flex items-center"
                        onClick={() => handleRemoveItem(product.id)}
                      >
                        <RemoveItemIcon /> <span className="ml-2">Remove</span>
                      </button>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-3 w-1/12">
                  <InputNumber
                    value={product.quantity}
                    onChange={(value) =>
                      handleQuantityChange(product.id, value)
                    }
                  />
                </td>
                <td className="py-2 px-3 w-1/12">{product.price}</td>
                <td className="py-2 px-3 w-1/12">{totalForItem.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
