import React, { useEffect, useState } from "react";

import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Image from "../UI/Image";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation"; // Import CSS cho Navigation
import { fetchBestSeller } from "../../api/homeAPI";
import { useDispatch } from "react-redux";
import { addQuantity } from "../../store/cartSlice";
import { addItem, removeItem } from "../../store/wishlistSlice";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const handleFavor = (item) => {
    setIsClick(!isClick);

    if (isClick) {
      dispatch(
        addItem({
          id: item.id,
          price: item.price,
          name: item.name,
          image: item.image,
        })
      );
      console.log(item.id);
    } else {
      dispatch(removeItem({ id: item.id }));
    }
    // navigate("/wishlist");
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(
      addQuantity({
        id: item.id,
        price: item.price,
        name: item.translation.name,
        image: item.image,
      })
    );
    navigate("/cart");
  };
  useEffect(() => {
    const loadBestSeller = async () => {
      try {
        const data = await fetchBestSeller();
        setBestSeller(data);
      } catch (error) {
        throw error;
      }
    };
    loadBestSeller();
  }, []);

  return (
    <div className="tablet:mx-28 px-5 ">
      <h1 className="font-bold text-4xl mb-10">Best Seller</h1>
      <div className="grid grid-cols-2 tablet:grid-cols-2 desktop:grid-cols-4  gap-8 justify-between ">
        {bestSeller.map((item) => (
          <div key={item.id} className=" relative group">
            <div className="relative">
              <Image src={item.image} alt={item.name} className="w-full h-64" />
              <h2 className="absolute top-4 left-3 px-3 py-1 text-white bg-black rounded-lg text-xs font-bold shadow-md">
                HOT
              </h2>

              {/* Hiển thị nút Add to Cart khi hover và nằm trong ảnh */}
              <div className="absolute  left-0 w-full opacity-0 px-8 bottom-3 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-black justify-center items-center text-white w-full py-2 rounded-lg"
                >
                  Add to Cart
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleFavor(item)}
                  className="absolute px-1.5 py-0.5 rounded-full bg-white top-4 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {isClick ? (
                    <HeartFilled style={{ color: "red", fill: "red" }} />
                  ) : (
                    <HeartOutlined />
                  )}
                </button>
              </div>
            </div>
            {/* <p className="text-black mt-1">{"★".repeat(item.rating)}</p> */}
            <h2 className="font-semibold mt-2">{item.name}</h2>
            <p className="font-semibold mt-1">{item.description}</p>
            <p className="font-semibold mt-1">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
