import React from "react";
import { Logo } from "./Logo/Logo";
import { Navbar } from "./NavBar/Navbar";
import { Link, a, Outlet } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
export const Footer = () => {
  return (
    <footer className="tablet:mx-24 bg-black text-white py-10">
      <div className="">
        {/* Store Information */}
        <div className=" tablet:flex tablet:justify-between text-center tablet:text-left mb-10">
          <div className=" tablet:flex">
            <Link
              href="/"
              className="text-2xl font-semibold cursor-pointer  border-b-2 tablet:border-b-0 tablet:border-r-2 tablet:pr-7"
            >
              3legant.
            </Link>
            <p className="text-sm mt-2 tablet:pl-7">Gift & Decoration Store</p>
          </div>
          <ul className="mt-4  tablet:grid grid-cols-5 tablet:gap-10">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-gray-400">
                Shop
              </a>
            </li>
            <li>
              <a href="/product" className="hover:text-gray-400">
                Product
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media and Legal Links */}
        <div className=" tablet:flex mt-8 tablet:mt-0 tablet:text-right tablet:justify-between border-t-2 ">
          <div className=" tablet:flex mt-10 text-sm justify-center">
            <p className=" text-sm text-center">
              Copyright © 2023 HomeDecor. All rights reserved
            </p>
            <div className="flex items-center justify-center mt-2 tablet:mt-0">
              <a href="/privacy-policy" className="hover:text-gray-400">
                Privacy Policy
              </a>

              <a href="/terms-of-use" className="hover:text-gray-400">
                Terms of Use
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-10 gap-4">
            <a href="/" className="hover:text-gray-400">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                {/* Instagram Icon */}
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.522 0-10-4.478-10-10S6.478 2 12 2s10 4.478 10 10-4.478 10-10 10zm0-14c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 3c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1z" />
              </svg>
            </a>
            <a href="/" className="hover:text-gray-400">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                {/* Facebook Icon */}
                <path d="M22.675 0h-21.35C.645 0 0 .645 0 1.325v21.35C0 23.355.645 24 1.325 24h21.35c.68 0 1.325-.645 1.325-1.325V1.325C24 .645 23.355 0 22.675 0zm-3.6 12.246h-3.38v10.62h-4.162v-10.62h-2.292v-3.677h2.292v-2.56c0-3.2 1.536-5.036 4.975-5.036 1.356 0 2.81.242 2.81.242v3.054h-1.585c-1.565 0-2.057.976-2.057 1.973v2.267h3.723l-.597 3.677z" />
              </svg>
            </a>
            <a href="/" className="hover:text-gray-400">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                {/* YouTube Icon */}
                <path d="M23.498 6.186a3.004 3.004 0 00-2.107-2.107C19.5 4 12 4 12 4s-7.5 0-9.391.079A3.004 3.004 0 00.502 6.186 29.153 29.153 0 000 12a29.153 29.153 0 00.502 5.814A3.004 3.004 0 002.609 18c1.891.079 9.391.079 9.391.079s7.5 0 9.391-.079a3.004 3.004 0 002.107-2.107A29.153 29.153 0 0024 12a29.153 29.153 0 00-.502-5.814zM9.548 15.598V8.402l6.002 3.598-6.002 3.598z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
