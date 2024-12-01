import React, { useEffect, useState } from "react";
import profile_icon from "../../assets/profile_icon.png";
import cart_icon from "../../assets/cart_icon.png";
import { useSelector, useDispatch } from "react-redux";

import { FiShoppingBag } from "react-icons/fi";
// import { Search } from "../UserSideProfile-Huynh";
import { useTranslation } from "react-i18next";
import { Search } from "../UI/Search";
import { Link, useNavigate } from "react-router-dom";
import { toggleStatusTab } from "../../store/cartSlice";
import ChangeLanguage from "../../pages/ChangeLanguage";
import { use } from "i18next";
import { logout } from "../../store/authSlice";
// import ChangeLanguage from "../../pages/ChangeLanguage";

export const UserSideProfile = () => {
  const dispatch = useDispatch();

  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  localStorage.getItem("token");
  const islogins = useSelector((state) => state.auth.isLogin);
  console.log(islogins);

  

  const navigate = useNavigate();
  const [totalQuantity, setTotalQuantity] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State quản lý trạng thái đăng nhập

  const handleMyProductClick = () => {
    navigate("/my-product"); // Điều hướng tới trang My Product
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Khi người dùng đăng nhập thành công
    // Ở đây, bạn có thể thêm logic gọi API login để xác thực người dùng
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Khi người dùng đăng xuất
    // Xóa tokenx hoặc session ở đây nếu cần thiết
    navigate("/login"); // Điều hướng về trang đăng nhập sau khi logout
  };

  // const { t, i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <div className=" flex justify-end  items-center gap-5 text-sm">
      <div className="hidden tablet:flex gap-5">
        <Search />
        <div className=" group relative">
          <img src={profile_icon} alt="" className="w-5 cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className=" flex  flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-full">
              <p
                onClick={handleMyProductClick}
                className=" cursor-pointer hover:text-black"
              >
                {" "}
                My Product
              </p>{" "}
              <ChangeLanguage />
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-lg">
                {/* Nếu đã đăng nhập, hiện nút Logout */}
                {islogins ? (
                  <p
                    className="cursor-pointer hover:text-black"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                ) : (
                  // Nếu chưa đăng nhập, hiện nút Login
                  <p
                    className="cursor-pointer hover:text-black"
                    onClick={handleLogin}
                  >
                    Login
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex gap-1" onClick={handleOpenTabCart}>
        <img src={cart_icon} alt="" className="w-5 h-5" />
        <span className="absolute top-[-10px] right-[-5px] bg-black text-white text-xs rounded-full px-1.5 py-0.5">
          {totalQuantity}
        </span>
      </div>
    </div>
  );
};
