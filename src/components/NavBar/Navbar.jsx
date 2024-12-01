import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";

export const Navbar = () => {
  return (
    <>
      <ul className=" hidden tablet:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="tqd-top-menu-item ">
          Home
        </NavLink>

        <NavLink to="/shop" className="tqd-top-menu-item flex gap-2.5 ">
          <h2>Shop </h2> <SlArrowDown className="w-2.5 mt-1.5" />
        </NavLink>

        <NavLink to="/product" className="tqd-top-menu-item flex gap-2.5">
          <h2>Product</h2> <SlArrowDown className="w-2.5 mt-1.5" />
        </NavLink>

        <NavLink className="tqd-top-menu-item" to="/contact-us">
          Contact Us
        </NavLink>

        {/* <li>
                <Link to="/change-language">Change language</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li> */}
      </ul>

      {/* <ResponsiveMenu open={open} /> */}
    </>
  );
};
