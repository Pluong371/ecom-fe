import React, { useState, useEffect } from "react";
// import { SlArrowDown } from "react-icons/sl";
import axios from "axios";

import dropdown from "../../assets/dropdown.png";
import { ProductItem } from "./ProductItem";
const Category = ({
  show,
  setShow,
  products,
  selectedCategory,
  setSelectedCategory,
  setSelectedPrice,
  selectedPrice,
}) => {
  // const [subCategory, setSubCategory] = useState([]);

  // Lấy ra các danh mục duy nhất từ dữ liệu sản phẩm
  const categories = [
    ...new Set(products.map((categorie) => categorie.category)),
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (value) => {
    setSelectedPrice(value); // Cập nhật giá trị đã chọn
  };

  return (
    <div className="flex   tablet:gap-10  ">
      <div className="min-w-80">
        {/* {Category Filters} */}
        <div>
          {" "}
          <p
            onClick={() => setShow(!show)}
            className=" flex  tablet:flex-row gap-1 tablet:gap-10 pt-10 my-2 pl-5 py-3 text-2xl font-bold  items-center cursor-pointer "
          >
            {" "}
            Filter
            {/* <SlArrowDown className={`h-3 tablet:hidden ${show ? 'rotate-90' :''}`} /> */}
            <img
              className={`h-3 tablet:hidden ${show ? "rotate-80" : ""}`}
              src={dropdown}
              alt=""
            />
          </p>
        </div>

        <div>
          <div
            className={`border border-gray-300 pl-5 py-3  ${
              show ? "" : "hidden"
            } tablet:block`}
          >
            <h1 className="text-xl font-bold mt-5 mb-5">CATEGORIES</h1>
            <div className="overflow-y-auto h-96">
              {/* Thêm sự kiện onClick cho "All" */}
              <p
                onClick={() => handleCategoryClick("all")} // Khi nhấn "All" sẽ hiển thị tất cả sản phẩm
                className={`p-4 cursor-pointer hover:bg-gray-100 ${
                  selectedCategory === "all"
                    ? "font-bold text-black"
                    : "text-gray-600"
                }`}
              >
                All
              </p>
              {/* Hiển thị các danh mục khác */}
              {categories.map((category, index) => (
                <p
                  key={index}
                  onClick={() => handleCategoryClick(category)} // Lọc sản phẩm theo danh mục khi nhấn vào từng mục
                  className={`p-4 cursor-pointer hover:bg-gray-100 ${
                    category === selectedCategory
                      ? "font-bold text-black"
                      : "text-gray-600"
                  }`}
                >
                  {category}
                </p>
              ))}
            </div>
          </div>

          {/* price */}

          <div
            className={`border border-gray-300 pl-5 py-3 my-5 mt-6 ${
              show ? "" : "hidden"
            } tablet:block`}
          >
            <h1 className="text-xl font-bold mt-5 mb-5">PRICE</h1>
            <div className="flex flex-col gap-2 text-xl font-medium text-gray-700">
              {[
                "All Price",
                "0-99.99",
                "100-199.99",
                "200-299.99",
                "300-399.99",
                "400+",
              ].map((priceRange) => (
                <p className="flex gap-2" key={priceRange}>
                  <input
                    type="radio" // Thay đổi thành radio để chỉ chọn một
                    name="price"
                    value={priceRange}
                    checked={selectedPrice === priceRange} // Kiểm tra nếu là giá đã chọn
                    onChange={() => handlePriceChange(priceRange)} // Chọn mức giá
                  />
                  {priceRange === "400+" ? "$400.00+" : `${priceRange}`}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
    </div>
  );
};

export default Category;
