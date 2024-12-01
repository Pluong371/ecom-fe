import React, { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Image from "../UI/Image";
import { useDispatch } from "react-redux";
import { setProductId } from "../../store/productSlice";
import { useNavigate } from "react-router-dom";
function ProductCol2({
  visibleCount,
  setVisibleCount,
  products,
  setIsClick,
  isClick,
}) {
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5); // Tăng số lượng sản phẩm hiển thị thêm 5
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFavor = () => {
    setIsClick(!isClick);
    console.log(!isClick);
  };
  const handleViewDetails = (id) => {
    dispatch(setProductId(id)); // Gán ID sản phẩm đã chọn vào Redux store
    navigate(`/product/${id}`); // Điều hướng đến trang chi tiết sản phẩm
  };
  return (
    <>
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-2 gap-8 justify-between">
        {products.slice(0, visibleCount).map(
          (
            item // Sử dụng slice để chỉ hiển thị số lượng sản phẩm cần thiết
          ) => (
            <div
              key={item.id}
              className="relative tablet:grid grid-cols-2 group gap-7 hover:shadow-xl rounded-xl"
            >
              <div className=" ">
                <h2 className="absolute px-1.5 py-0.5 text-black top-3 left-3 bg-white rounded-sm text-xs font-bold">
                  HOT
                </h2>
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[416px] rounded-xl "
                />
              </div>
              <div className="px-5">
                <div className=" w-full">
                  <p className="text-black mt-1">{"★".repeat(item.rating)}</p>
                  <h2 className="font-semibold mt-1">{item.name}</h2>
                  <div className=" flex">
                    {" "}
                    <p className="font-semibold mt-1 mb-5">
                      ${item.price.toFixed(2)}
                    </p>
                    <p className="font-semibold mt-1 mb-5">
                      ${item.originalPrice.toFixed(2)}
                    </p>
                  </div>
                  <span>{item.description}</span>
                </div>
                <div className="  inset-0  justify-center h-12  mt-[80px] top-80 m-0 transition-opacity duration-300 ">
                  <button
                    onClick={() => handleViewDetails(item.id)}
                    className="w-full bg-black text-white rounded-lg py-2 mb-2"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={handleFavor}
                    className="  tablet:w-full tablet:bg-white tablet:hover:bg-gray-400 tablet:text-black tablet:hover:text-white tablet:border-2 rounded-lg tablet:py-2 desktop:mb-2"
                  >
                    {isClick ? (
                      <HeartFilled style={{ color: "red", fill: "red" }} />
                    ) : (
                      <HeartOutlined />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {visibleCount < products.length && (
        <div className="text-center mt-5">
          <button
            onClick={handleLoadMore}
            className="bg-black text-white py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
export default ProductCol2;
