import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "../store/favoritesSlice"; // Đường dẫn đến favoritesSlice của bạn

const FavoritesList = () => {
  const dispatch = useDispatch();

  // Lấy state từ Redux store
  const { items, loading, error } = useSelector((state) => state.favorites);

  console.log(2, items);
  
  // Gọi API khi component mount
  useEffect(() => {
    dispatch(fetchFavorites()); // Gọi API để lấy danh sách yêu thích
  }, [dispatch]);

  // Kiểm tra trạng thái tải
  if (loading === "pending") {
    return <div>Đang tải danh sách yêu thích...</div>;
  }

  if (loading === "failed") {
    return <div>Đã xảy ra lỗi: {error}</div>;
  }

  return (
    <div>
      <h1>Danh sách yêu thích</h1>
      {/* Hiển thị danh sách sản phẩm yêu thích nếu có */}
      <ul>
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Giá: {item.price}₫</p>
            </li>
          ))
        ) : (
          <p>Không có sản phẩm yêu thích nào được tìm thấy.</p>
        )}
      </ul>
    </div>
  );
};

export default FavoritesList;
