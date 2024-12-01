import React, { useState } from "react";
import { Logo } from "../Logo/Logo";

import { NavLink } from "react-router-dom";

// import shape_icon from "../assets/Shape.png";
import shape_icon from "../../assets/shape_icon.png";
import { SlArrowDown } from "react-icons/sl";
import cart_icon from "../../assets/cart_icon.png";
import heart_icon from "../../assets/heart_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";
import instagram_icon from "../../assets/youtube_icon.png";

export const ResponsiveMenu = ({ visible, setVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 ease-in-out ${
        visible ? "translate-x-0" : "-translate-x-full"
      } z-30`}
      style={{ overflowY: "auto" }} // Kích hoạt cuộn nếu nội dung vượt quá chiều cao của viewport
    >
      <div className="flex flex-col text-gray-600 p-4 h-full">
        <div className="flex justify-between items-center gap-4 p-4 cursor-pointer">
          <Logo />
          <img
            onClick={() => setVisible(false)}
            src={shape_icon}
            className="h-4 rotate-180"
            alt="Đóng menu"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="">
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-4 border-b-2 flex"
            to="/"
          >
            Trang Chủ
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/shop"
            className="flex py-2 px-4 border-b-2 justify-between"
          >
            Cửa Hàng
            <SlArrowDown className="w-2.5 mt-1.5 justify-end" />
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/product"
            className="py-2 px-4 border-b-2 flex justify-between"
          >
            Sản Phẩm <SlArrowDown className="w-2.5 mt-1.5" />
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 px-4 border-b-2 flex"
            to="/contact-us"
          >
            Liên Hệ
          </NavLink>
        </div>

        <div className="mt-20">
          <NavLink
            onClick={() => setVisible(false)}
            to="/cart"
            className="py-2 px-4 border-b-2 flex justify-between"
          >
            Giỏ Hàng
            <div className="flex gap-1.5">
              <img
                src={cart_icon}
                alt=""
                className="w-[20px] h-[20px] min-w-3"
              />
              <span className="h-5 ml-2 bg-black text-white text-xs rounded-full px-2 py-1">
                2
              </span>
            </div>
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to="/wishlist"
            className="py-2 px-4 border-b-2 flex justify-between"
          >
            Danh Sách Yêu Thích
            <div className="flex gap-1.5">
              <img
                src={heart_icon}
                alt=""
                className="w-[20px] h-[20px] min-w-3"
              />
              <span className="h-5 ml-2 bg-black text-white text-xs rounded-full px-2 py-1">
                2
              </span>
            </div>
          </NavLink>
        </div>

        <button className="border text-white text-lg bg-black rounded-lg py-3 my-[20px]">
          Đăng Nhập
        </button>

        <div className="flex h-5 gap-7">
          <img src={instagram_icon} alt="Instagram" />
          <img src={facebook_icon} alt="Facebook" />
          <img src={youtube_icon} alt="YouTube" />
        </div>
      </div>
    </div>
  );
};
