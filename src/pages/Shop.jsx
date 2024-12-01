import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import { NEW_ARRIVALS } from "../api/end-points";
import Category from "../components/Category/Category";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Image from "../components/UI/Image";
import backGround_home_moblie from "../assets/Background_Home.png";
// import { useState } from "react";
import dropdown from "../assets/dropdown.png";
import { Select } from "antd";
import SortFilter from "../components/ProductId/SortFilter";
import { useDispatch, useSelector } from "react-redux";
import { setProductId, setProducts } from "../store/productSlice";
import { useNavigate } from "react-router-dom";
// import { FaTh, FaThLarge, FaListUl } from "react-icons/fa";
const Shop = () => {
  const [show, setShow] = useState(false);
  // const [products, setBestSeller] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12); // Số lượng sản phẩm hiển thị ban đầu
  const [selectedCategory, setSelectedCategory] = useState("all"); // Mặc định là "all"
  const [selectedPrice, setSelectedPrice] = useState("All Price"); // State cho giá đã chọn
  const [sortOrder, setSortOrder] = useState("sort-by"); // State cho sắp xếp

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  console.log("sản phẩm", products);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosClient.get(NEW_ARRIVALS);
        const data = response.data;
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);
  const navigate = useNavigate();

  const handleFavor = () => {
    setIsClick(!isClick);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Tăng số lượng sản phẩm hiển thị thêm 5
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const inCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const inPriceRange =
      selectedPrice === "All Price" || // Nếu giá là "all", không lọc theo giá
      (selectedPrice === "0-99.99" && product.price <= 99.99) ||
      (selectedPrice === "100-199.99" &&
        product.price >= 100 &&
        product.price <= 199.99) ||
      (selectedPrice === "200-299.99" &&
        product.price >= 200 &&
        product.price <= 299.99) ||
      (selectedPrice === "300-399.99" &&
        product.price >= 300 &&
        product.price <= 399.99) ||
      (selectedPrice === "400+" && product.price >= 400);

    return inCategory && inPriceRange;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-high") {
      return a.price - b.price; // Sắp xếp tăng dần
    } else if (sortOrder === "high-to-low") {
      return b.price - a.price; // Sắp xếp giảm dần
    }
    return 0; // Nếu không có sắp xếp, giữ nguyên thứ tự
  });
  const handleViewDetails = (id) => {
    dispatch(setProductId(id)); // Gán ID sản phẩm đã chọn vào Redux store
    navigate(`/product/${id}`); // Điều hướng đến trang chi tiết sản phẩm
  };

  return (
    <div className="w-full">
      <div className="mx-auto px-5">
        <div className="tablet:mx-28">
          <div className="tablet:flex gap-10">
            <Category
              products={products}
              show={show}
              setShow={setShow}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />
            <div>
              <div className="flex tablet:gap-10 pt-10 my-2 pl-5 py-3 items-center justify-between">
                <h2 className="text-2xl font-bold">Living Room</h2>
                <SortFilter
                  sortOrder={sortOrder}
                  handleSortChange={handleSortChange}
                />
              </div>
              <div>
                <div className="grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-8 justify-between">
                  {sortedProducts.slice(0, visibleCount).map((item) => (
                    <div key={item.id} className="relative group">
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="w-full"
                        />
                        <h2 className="absolute top-4 left-3 px-4 py-2 text-white bg-black rounded-lg text-xs font-bold shadow-md">
                          HOT
                        </h2>
                        <div className="absolute left-0 w-full opacity-0 px-5 bottom-8 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => handleViewDetails(item.id)}
                            className="bg-black justify-center items-center text-white w-full py-2 rounded-lg"
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={handleFavor}
                            className="absolute px-1.5 py-0.5 rounded-full bg-white top-4 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            {isClick ? (
                              <HeartFilled
                                style={{ color: "red", fill: "red" }}
                              />
                            ) : (
                              <HeartOutlined />
                            )}
                          </button>
                        </div>
                      </div>
                      <p className="text-black mt-1">
                        {"★".repeat(item.rating)}
                      </p>
                      <h2 className="font-semibold mt-1">{item.name}</h2>
                      <p className="font-semibold mt-1 mb-5">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {visibleCount < sortedProducts.length && (
                  <div className="text-center mt-5 mb-8">
                    <button
                      onClick={handleLoadMore}
                      className="bg-black text-white py-2 px-4 rounded"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
