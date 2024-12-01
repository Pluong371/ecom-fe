import React, { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Image from "../UI/Image";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addQuantity, setProductId } from "../../store/productSlice";
function ProductCol4({
  visibleCount,
  setVisibleCount,
  products,
  setIsClick,
  isClick,
}) {
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Tăng số lượng sản phẩm hiển thị thêm 5
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      <div className="grid mobile:grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-4 gap-8 justify-between">
        {products.slice(0, visibleCount).map(
          (
            item // Sử dụng slice để chỉ hiển thị số lượng sản phẩm cần thiết
          ) => (
            <div
              key={item.id}
              className="relative group hover:shadow-xl rounded-xl"
            >
              <div className="relative ">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full rounded-xl"
                />
                <h2 className="absolute top-4 left-3 px-4 py-2 text-white bg-black rounded-lg text-xs font-bold shadow-md">
                  HOT
                </h2>

                {/* Hiển thị nút Add to Cart khi hover và nằm trong ảnh */}
                <div className="absolute  left-0 w-full opacity-0 px-5 bottom-8 group-hover:opacity-100 transition-opacity duration-300">
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
                      <HeartFilled style={{ color: "red", fill: "red" }} />
                    ) : (
                      <HeartOutlined />
                    )}
                  </button>
                </div>
              </div>
              <p className="text-black mt-1">{"★".repeat(item.rating)}</p>
              <h2 className="font-semibold mt-1">{item.name}</h2>
              <p className="font-semibold mt-1 mb-5">
                ${item.price.toFixed(2)}
              </p>
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
export default ProductCol4;
