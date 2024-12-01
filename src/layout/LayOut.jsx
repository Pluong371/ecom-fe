// React Component (Sử dụng React Router DOM)
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Logo } from "../components/Logo/Logo";
import { Navbar } from "../components/NavBar/Navbar";
import { UserSideProfile } from "../components/UserSideProfile/UserSideProfile";
import { Footer } from "../components/Footer";
import { ResponsiveMenu } from "../components/ResponsiveMenu/ResponsiveMenu";
import Header from "../pages/Header";
import homepageImage from "../assets/Background_Home.png"; // Replace with your actual image path
import homepageImageTablet from "../assets/backGround_home_moblie.png";
const LayOut = () => {
  const location = useLocation();
  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    setIsTablet(window.innerWidth <= 640); // Kiểm tra nếu màn hình nhỏ hơn hoặc bằng 768px
  };

  useEffect(() => {
    handleResize(); // Gọi hàm khi component được mount
    window.addEventListener("resize", handleResize); // Lắng nghe sự kiện thay đổi kích thước

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup khi component unmount
    };
  }, []);
  // Kiểm tra nếu đường dẫn hiện tại là trang Home hoặc Shop
  const isHomeOrShop =
    location.pathname === "/" ||
    location.pathname === "/shop" ||
    location.pathname === "/product";

  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/register";

  // Kiểm tra nếu đường dẫn hiện tại là login hoặc register
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="relative">
      {/* Nếu không phải trang login hoặc register thì hiển thị header */}
      {!isAuthPage && (
        <div
          className={`${
            isHomeOrShop ? "absolute top-0 left-0 w-full z-10" : ""
          }`}
        >
          <Header />
        </div>
      )}

      {/* Conditional Image Display on Home and Shop */}
      {isHomeOrShop && (
        <div className="relative w-full ">
          <div className="absolute tablet:flex  tablet:flex-col mt-20 text-white mobile:w-full mobile:items-center  mobile:text-center mobile:top-10 laptop:justify-center laptop:w-2/5 laptop:inset-y-0 laptop:right-14 laptop:items-start laptop:text-start ">
            <h1 className=" font-medium text-black mb-2 mobile:text-5xl laptop:text-7xl">
              Listen to the <span className="text-blue-500">amazing</span> music
              sound.
            </h1>
            <p className="text-2xl text-black mb-10 mobile:text-lg mobile:mb-5">
              Experience music like never before
            </p>
            <button className=" bg-black p-3 rounded-lg mobile:w-2/3 laptop:w-2/5 ">
              Shopping Now
            </button>
          </div>
          <img
            src={isTablet ? homepageImageTablet : homepageImage}
            alt="Background"
            className={`w-full ${
              isTablet ? "h-[800px]" : "h-full"
            } object-cover`} // Hình ảnh chiều cao là 800px trên thiết bị nhỏ, h-full trên máy tính
          />
        </div>
      )}

      <div className="w-full m-auto">
        <Outlet />
      </div>

      <div className="bg-black">
        <div className=" mx-auto px-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LayOut;
