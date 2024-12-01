import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem, updateCart } from "../../store/cartSlice";
import Image from "../UI/Image";
import { RemoveItemIcon } from "../../assets/icon";
import { InputNumber, Radio, Space } from "antd";
import { fetchCart } from "../../api/cartAPI";
export const Cart_SHopping = ({ onCheckout }) => {
  // const cart = useSelector((state) => state.cart.items);
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [totalShipping, setTotalShipping] = useState(0);
  const [couponCode, setCouponCode] = useState(0);
  const [couponInput, setCouponInput] = useState("");
   const [shippingSelected, setShippingSelected] = useState(false);
  const dispatch = useDispatch();
console.log(cart);
  useEffect(() => {
    // const discount =  (100 - couponCode) / 100*totalAmount;
    // const totalAmount = total;
    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const discountAmount = totalAmount * (couponCode / 100);
    setTotal(totalAmount - discountAmount);
    setTotalShipping(totalAmount - discountAmount + shippingPrice);
    dispatch(
      updateCart({
        total: totalShipping,
        shippingPrice: shippingPrice,
        items: cart,
        discount: discountAmount,
      })
    );
  }, [cart, shippingPrice]);
  useEffect(() => {
    const fetchAllCart = async () => {
      const response = await fetchCart();
      setCart(response);
      
    };
    fetchAllCart();
  }, []);

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    } else {
      
      dispatch(removeItem({ id }));
    }
  };
  const handleCouponCode = () => {
    let discount = 0;
    if (couponInput === "hel") {
      discount = 10;
    } else if (couponInput === "Cak") {
      discount = 100;
    } else {
      discount = 0;
    }
    setCouponCode(discount);
    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    // const totalAmount = total;
    const discountAmount = totalAmount * (discount / 100);
    setTotal(totalAmount - discountAmount);
    setTotalShipping(totalAmount - discountAmount + shippingPrice);
     dispatch(
       updateCart({
         total: totalAmount,
         shippingPrice: shippingPrice,
         items: cart,
         discount: discountAmount,
         couponCode: couponInput,
       })
     );
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleShippingChange = (e) => {
    const value = e.target.value;
    
    let price = 0;
    if (value === 1) price = 0;
    if (value === 2) price = 15;
    if (value === 3) price = 21;
    setShippingPrice(price);
    setShippingSelected(true);
    dispatch(updateCart({ shippingPrice: price }));
  };

  return (
    <div className="flex w-full flex-col">
      <h1 className="text-5xl font-semibold mb-6 justify-center flex">Cart</h1>

      <div className=" w-full flex justify-center mb-10">
        <div className="grid grid-cols-3 w-1/2 ">
          <div className="flex border-b-2 border-black pb-3">
            <span className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
              1
            </span>
            <span className="mx-4 my-1 text-lg">Shopping cart</span>
          </div>
          <div className="flex text-gray-600">
            <span className="rounded-full w-10 h-10 flex items-center justify-center text-lg">
              2
            </span>
            <span className=" my-1 text-lg">Checkout details</span>
          </div>
          <div className="flex text-gray-600">
            <span className="rounded-full w-10 h-10 flex items-center justify-center text-lg">
              3
            </span>
            <span className="my-1 text-lg">Order complete</span>
          </div>
        </div>
      </div>

      <div className="flex w-full ">
        <table className="w-2/3 bg-white">
          <thead className="text-left text-xl border-b-2 border-[#6C7275]">
            <tr>
              <th className="py-2 px-3 w-3/4">Product</th>
              <th className="py-2 px-3 w-1/12 ">Quantity</th>
              <th className="py-2 px-3 w-1/12">Price</th>
              <th className="py-2 px-3 w-1/12">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              const totalForItem =
                product.item.productId.price * product.item.productId.quantity;
              return (
                <tr
                  key={product.id}
                  className="text-center border-b border-gray-200 "
                >
                  <td className="py-2 px-3 w-3/4">
                    <div className="flex my-4 ">
                      <Image
                        src={product.item.productId.image}
                        alt={product.productId.name}
                        className="w-28"
                      />
                      <div className="flex flex-col ml-3 items-start justify-between my-2">
                        <p className="font-bold text-left ">{product.productId.name}</p>
                        <p className="text-gray-500 flex">color: Red</p>
                        <button
                          className="flex items-center"
                          onClick={() => handleRemoveItem(product.id)}
                        >
                          <RemoveItemIcon />{" "}
                          <span className="ml-2">Remove</span>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-3 w-1/12">
                    <InputNumber
                      value={product.productId.quantity}
                      onChange={(value) =>
                        handleQuantityChange(product.productId.id, value)
                      }
                    />
                  </td>
                  <td className="py-2 px-3 w-1/12">{product.productId.price}</td>
                  <td className="py-2 px-3 w-1/12">
                    {totalForItem.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex flex-col mx-20 text-left w-1/3 border-2 h-fit rounded border-[#6C7275]">
          <div className="my-4 mx-5">
            <h1 className="text-xl font-bold">Cart summary</h1>
            <Radio.Group
              className="flex flex-col  my-5"
              onChange={handleShippingChange}
            >
              <Space direction="vertical">
                <Radio
                  className="w-full border-2 border-gray-600 p-3 rounded-md mb-2 hover:bg-gray-200  "
                  value={1}
                >
                  Free Shipping - $0.00
                </Radio>
                <Radio
                  className="w-full border-2 border-gray-600  p-3 rounded-md mb-2 hover:bg-gray-200"
                  value={2}
                >
                  Express Shipping - $15.00
                </Radio>
                <Radio
                  className="w-full border-2 border-gray-600  p-3 rounded-md hover:bg-gray-200"
                  value={3}
                >
                  Pick Up - $21.00
                </Radio>
              </Space>
            </Radio.Group>
            <p className="text-base flex pb-3 justify-between font-normal border-b border-gray-400 ">
              Subtotal<span>${total.toFixed(2)}</span>{" "}
            </p>
            <p className="text-xl font-bold flex justify-between py-4">
              Total<span>${totalShipping.toFixed(2)}</span>{" "}
            </p>
            <button
              onClick={onCheckout}
              className={`bg-black w-full text-white p-2 mt-5 rounded-md ${
                cart.length === 0 || !shippingSelected
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={cart.length === 0 || !shippingSelected}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-left my-10 w-1/3 items-start gap-2">
        <h1 className="text-xl font-bold ">Have a coupon?</h1>
        <p className="text-base font-normal">
          Add your code for an instant cart discount
        </p>
        <input
          type="text"
          placeholder="Coupon code"
          className="w-2/3 p-2 rounded-md "
          value={couponInput}
          onChange={(e) => setCouponInput(e.target.value)}
          updateQuantity
        />
        <button
          onClick={handleCouponCode}
          className="bg-black w-1/3 p-1 text-white  rounded-md "
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Cart_SHopping;
