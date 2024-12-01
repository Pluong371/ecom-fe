import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import { ALLPRODUCT } from "../api/end-points";

import Image from "../components/UI/Image";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCol4 from "../components/ProductId/ProductCol4";
import ProductCol2 from "../components/ProductId/ProductCol2";
// import ProductCol4 from "../components/ProductId/ProductCol4";

import CategoryFilter from "../components/ProductId/CategoryFilter";
import PriceFilter from "../components/ProductId/PriceFilter";
import SortFilter from "../components/ProductId/SortFilter";
import ViewModeToggle from "../components/ProductId/ViewModeToggle";
import { setProducts } from "../store/productSlice";
function NewProduct() {
  const [isClick, setIsClick] = useState(false);
  // const [products, setBestSeller] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12); // Số lượng sản phẩm hiển thị ban đầu
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); // State cho danh mục đã chọn
  const [selectedPrice, setSelectedPrice] = useState("all"); // State cho giá đã chọn
  const [sortOrder, setSortOrder] = useState("sort-by"); // State cho sắp xếp
  const [viewMode, setViewMode] = useState("grid"); // State để quản lý chế độ xem (mặc định là "grid")
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  console.log("sản phẩm", products);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchProducts =  () => {
  //   const response = axiosClient.get(ALLPRODUCT);
  //   const data = response.data.map((item) => {
  //     const imageProduct = item.product.image.split(",");
  //     return {
  //       id: item.product.id,
  //       name: item.translation.name,
  //       image: imageProduct[0],
  //       price: item.skus[0].productSKU.price,
  //       description: item.translation.description,
        
  //     };
  //   });
  //   };

  //   fetchProducts();
  // },[]);
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axiosClient.get(ALLPRODUCT);
          const data = response.data;
          dispatch(setProducts(data));
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchProducts();
    }, [dispatch]);

  useEffect(() => {
    // Lấy ra danh sách category duy nhất từ dữ liệu sản phẩm
    const uniqueCategories = [
      "All", // Thêm tùy chọn "All" vào đầu danh sách
      ...new Set(products.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  }, [products]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Lọc sản phẩm theo danh mục và giá
  const filteredProducts = products.filter((product) => {
    const inCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const inPriceRange =
      selectedPrice === "all" ||
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

  // Sắp xếp sản phẩm theo giá
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-high") {
      return a.price - b.price; // Sắp xếp tăng dần
    } else if (sortOrder === "high-to-low") {
      return b.price - a.price; // Sắp xếp giảm dần
    }
    return 0; // Không sắp xếp
  });

  return (
    <div className="w-full text-gray-600 body-font overflow-hidden">
      <div className="mx-auto px-5 py-24">
        <div className="tablet:mx-28">
          <div className="tablet:flex py-7 justify-between">
            <div className="tablet:flex gap-8">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
              />

              <PriceFilter
                selectedPrice={selectedPrice}
                handlePriceChange={handlePriceChange}
              />
            </div>
            <div className="flex items-start mt-10 tablet:mt-10 tablet:justify-between">
              {/* <h1 className="text-xl font-bold mt-10 mb-5">PRICE</h1> */}
              <SortFilter
                sortOrder={sortOrder}
                handleSortChange={handleSortChange}
              />
              <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
            </div>
          </div>
          {/* Hiển thị ProductCol4 hoặc ProductCol2 dựa trên giá trị viewMode */}
          {viewMode === "grid" ? (
            <ProductCol4
              visibleCount={visibleCount}
              setVisibleCount={setVisibleCount}
              products={sortedProducts}
              isClick={isClick}
              setIsClick={setIsClick}
            />
          ) : (
            <ProductCol2
              visibleCount={visibleCount}
              setVisibleCount={setVisibleCount}
              products={sortedProducts}
              isClick={isClick}
              setIsClick={setIsClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
