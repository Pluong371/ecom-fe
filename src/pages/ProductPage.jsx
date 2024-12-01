import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import ProductReview from "../components/ProductId/ProductReview";
import Join from "../components/Home/Join";
import NewArrivals from "../components/Home/New_Arrivals";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  // addQuantity,
  decreaseQuantity,
  increaseQuantity,
  setProductId,
} from "../store/productSlice";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import { addQuantity } from "../store/cartSlice";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedProductId = useSelector(
    (state) => state.product.selectedProductId
  ); // Lấy ID sản phẩm đã chọn
  console.log("id", selectedProductId);

  const product = useSelector((state) =>
    state.product.items.find((item) => item.id === selectedProductId)
  ); // Tìm sản phẩm trong danh sách dựa trên selectedProductId
  console.log("sản phẩm", product);

  const [selectedColor, setSelectedColor] = useState(
    product.variants[0].colors[0].color
  ); // Màu mặc định là đen
  const [isClick, setIsClick] = useState(false);
  const [quantity, setQuantity] = useState(1); // Trạng thái số lượng
  const [selectedImage, setSelectedImage] = useState(
    product.variants[0].colors[0].images[0]
  ); // Ảnh mặc định tương ứng với màu đen
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosClient.get(
          `NEW_ARRIVALS/${selectedProductId}`
        );
        const data = response.data;
        dispatch(setProductId(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  // Hàm để thay đổi màu và ảnh tương ứng
  const handleColorChange = (color) => {
    setSelectedColor(color); // Thay đổi màu được chọn
    const selectedVariant = product.variants[0].colors.find(
      (c) => c.color === color
    );
    setSelectedImage(selectedVariant.images[0]); // Cập nhật ảnh theo màu
  };

  // Hàm để thay đổi ảnh chi tiết dựa trên ảnh người dùng chọn
  const handleImageClick = (img) => {
    setSelectedImage(img); // Cập nhật ảnh hiển thị khi người dùng nhấp vào ảnh nhỏ
  };
  const handleFavor = () => {
    setIsClick(!isClick);
  };

  // Tìm màu sắc đã chọn để lấy thông tin hình ảnh
  const selectedVariant = product.variants[0].colors.find(
    (c) => c.color === selectedColor
  );

  // Hàm tăng số lượng
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Hàm giảm số lượng
  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };
  const handleCard = () => {
    // Hiển thị thông tin sản phẩm đã chọn trước khi thêm vào giỏ hàng
    console.log({
      id: selectedProductId,
      name: product.name,
      price: product.price,
      color: selectedColor,
      image: selectedImage,
      quantity: quantity,
    });

    // Thêm sản phẩm vào giỏ hàng
    dispatch(
      addQuantity({
        id: selectedProductId,
        name: product.name,
        price: product.price,
        color: selectedColor,
        image: selectedImage,
        quantity: quantity,
      })
    );
    navigate("/cart");
  };

  return (
    <div className=" w-full text-gray-600 body-font overflow-hidden">
      <div className=" mx-auto px-5 py-24 ">
        <div className=" tablet:grid grid-cols-2 h-auto tablet:mx-28 gap-10 ">
          <div className="tablet:relative">
            {" "}
            {/* Ảnh chính của sản phẩm */}
            <div>
              <img
                src={selectedImage}
                alt={product.name}
                className=" w-full  mb-5 h-auto object-cover object-center border-2 rounded"
              />
              <div className="absolute px-4 py-0.5 text-black desktop:top-3 top-[185px]  grid gap-2  rounded-sm  font-bold">
                <h2 className=" bg-blue-500 text-white py-2 px-5 rounded">
                  New
                </h2>
                <h2 className=" bg-green-500 text-white py-2 px-5 rounded">
                  -50%
                </h2>
              </div>
            </div>
            {/* Thay đổi ảnh nhỏ tương ứng với màu đã chọn */}
            <div className="flex gap-4 space-x-2">
              {selectedVariant.images.map((img, index) => (
                <div
                  key={index}
                  className={`relative w-20 h-20 cursor-pointer rounded ${
                    selectedImage === img ? "border-2 border-indigo-500" : ""
                  }`}
                  onClick={() => handleImageClick(img)} // Thay đổi ảnh chính khi nhấp vào ảnh nhỏ
                >
                  <img
                    src={img}
                    alt={`image-${index}`}
                    className="object-cover rounded"
                  />
                  {selectedImage === img && (
                    <div className="absolute inset-0 border-2 border-indigo-500 rounded pointer-events-none" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className=" flex  justify-center min-h-screen">
            <div className="product-card bg-white rounded-lg ">
              <div className="flex items-center mb-2">
                <Rate value={product.rating} />

                <span className="text-gray-500 text-sm ml-2">
                  {product.reviews} Reviews
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex items-baseline mb-4 border-b-2 pb-4">
                <span className="text-2xl font-bold text-gray-800">
                  ${product.price}
                </span>
                <span className=" text-xl text-gray-500 line-through ml-2">
                  ${product.originalPrice}
                </span>
              </div>
              <div className="mb-4 border-b-2 pb-4">
                <span className="font-semibold">Offer expires in:</span>
                <div className="flex space-x-2 ">
                  <div className="text-center ">
                    <div className="text-2xl font-bold con content-center  w-[60px] h-[60px] bg-gray-200">
                      {product.offerExpires.days}
                    </div>
                    <div className="text-sm">Days</div>
                  </div>
                  <div className="text-center ">
                    <div className="text-2xl font-bold content-center w-[60px] h-[60px] bg-gray-200">
                      {product.offerExpires.hours}
                    </div>
                    <div className="text-sm">Hours</div>
                  </div>
                  <div className="text-center ">
                    <div className="text-2xl font-bold content-center w-[60px] h-[60px] bg-gray-200">
                      {product.offerExpires.minutes}
                    </div>
                    <div className="text-sm">Minutes</div>
                  </div>
                  <div className="text-center ">
                    <div className="text-2xl font-bold content-center w-[60px] h-[60px] bg-gray-200">
                      {product.offerExpires.seconds}
                    </div>
                    <div className="text-sm">Seconds</div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Measurements:</p>
                <p className="text-gray-700">{product.measurements} "</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Choose Color:</p>
                {product.variants[0].colors.map((variant) => (
                  <button
                    key={variant.color}
                    className={`border-2 mr-4 border-gray-300 rounded-full w-6 h-6 focus:outline-none ${
                      selectedColor === variant.color
                        ? "ring-2 ring-indigo-500"
                        : ""
                    }`}
                    onClick={() => handleColorChange(variant.color)}
                    style={{ backgroundColor: variant.color }}
                  ></button>
                ))}
              </div>
              <div className="flex items-center mb-4 gap-4">
                <div className="flex rounded-lg bg-gray-200 gap-5">
                  {" "}
                  <button
                    className="p-2 mx-2"
                    onClick={() => {
                      handleDecrease();
                    }} // Giảm số lượng
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>{" "}
                  {/* Hiển thị số lượng */}
                  <button
                    className="p-2 mx-2"
                    onClick={() => {
                      handleIncrease();
                    }} // Tăng số lượng
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleFavor}
                  className="w-full bg-white border-2 text-gray-700 rounded-lg py-2"
                >
                  Wishlist
                  {isClick ? (
                    <HeartFilled style={{ color: "red", fill: "red" }} />
                  ) : (
                    <HeartOutlined />
                  )}
                </button>
              </div>
              <button
                onClick={handleCard}
                className="w-full bg-blue-500 text-white rounded-lg py-2 mb-2"
              >
                Add to Cart
              </button>
              <div>
                <div className=" grid grid-cols-2 ">
                  <span className="">SKU</span>
                  <span className="font-bold">{product.sku}</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="">CATEGORY</span>
                  <span className=" font-bold">{product.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProductReview
          name={product.name}
          review={product.reviews}
          rating={product.rating}
        />
        <NewArrivals />
      </div>
      <Join />
    </div>
  );
};

export default ProductPage;
