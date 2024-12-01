import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../store/cartSlice";
import Image from "../components/UI/Image";
import { RemoveItemIcon } from "../assets/icon";
import { InputNumber,Tabs } from "antd";
import Cart_SHopping from "../components/Cart/Cart_SHopping";
import Checkout from "../components/Cart/Checkout";
import Order_complete from "../components/Cart/Order_complete";
export const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const [total, setTotal] = useState(0);
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  }, [cart]);

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
    else{
      dispatch(removeItem({ id }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="flex flex-col mx-24 items-center p-8">
      {step === 1 && <Cart_SHopping onCheckout={() => setStep(2)} />}
      {step === 2 && <Checkout setStep={setStep} />}
      {step === 3 && <Order_complete setStep={setStep} />}
    </div>
  );
};
export default Cart;
