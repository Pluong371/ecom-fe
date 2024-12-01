import React, { useEffect, useState } from "react";
import {
  BannerIcon1,
  BannerIcon2,
  BannerIcon3,
  BannerIcon4,
  BannerIcon5,
} from "../../assets/icon";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import CSS cho autoplay
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay

import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="my-8 mx-4 laptop:mx-28">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>{BannerIcon1}</SwiperSlide>
        <SwiperSlide>{BannerIcon2}</SwiperSlide>
        <SwiperSlide>{BannerIcon3}</SwiperSlide>
        <SwiperSlide>{BannerIcon4}</SwiperSlide>
        <SwiperSlide>{BannerIcon5}</SwiperSlide>
        <SwiperSlide>{BannerIcon1}</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
