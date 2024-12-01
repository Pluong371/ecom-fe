import React, { useEffect, useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Image from "../UI/Image";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation"; // Import CSS cho Navigation
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";
import { addQuantity } from "../../store/cartSlice";
import { addItem, removeItem } from "../../store/wishlistSlice";
import { fetchNewArrivals, fetchAddToCart } from "../../api/homeAPI";
import { use } from "i18next";
import { set } from "react-hook-form";
const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const loadNewArrivals = async () => {
      try {
        const data = await fetchNewArrivals();
        setNewArrivals(data);
      } catch (error) {
        throw error;
      }
    };
    loadNewArrivals();
  }, []);

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
  const [data, setData] = useState([]);
  useEffect(() => {
    const addToCart = async () => {
     
        const response = await fetchAddToCart(data);
        console.log(response);
     
    };
    addToCart();
  }, [data]);

  const handleAddToCart = (item) => {
    setData({
      productId: item.id,
      quantity: 1,
    });
    
  
    dispatch(
      addQuantity({
        id: item.id,
        price: item.price,
        name: item.name,
        image: item.image,
      })
    );
  };

  return (
    <div className=" tablet:mx-28 px-5 relative">
      <h1 className="text-4xl font-bold mt-10 mb-5">New Arrivals</h1>

      <Swiper
        slidesPerView={2.5}
        slidesPerGroup={3}
        spaceBetween={30}
        navigation
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 3,
          },
        }}
      >
        {newArrivals.map((item) => (
          <SwiperSlide key={item.id} className="relative group">
            <div className="relative">
              <Image src={item.image} alt={item.name} className="w-auto h-52" />
              <h2 className="absolute top-4 left-3 px-3 py-1 text-white bg-black rounded-lg text-xs font-bold shadow-md">
                NEW
              </h2>

              {/* Hiển thị nút Add to Cart khi hover và nằm trong ảnh */}
              <div className="absolute left-0 w-full opacity-0 px-7 bottom-2  group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-black justify-center items-center text-white w-full py-1 rounded-lg"
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
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`

          .swiper-button-next,
          .swiper-button-prev {
            color: #000; /* Màu cho nút điều hướng */
            width: 20px;
            height: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default NewArrivals;
