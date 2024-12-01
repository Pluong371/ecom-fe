import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const Search = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleToggleSearch = () => {
    setIsInputVisible(!isInputVisible); // Đảo ngược trạng thái để hiện/ẩn input
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(searchTerm);

  return (
    <div className="relative flex items-center">
      <CiSearch className="cursor-pointer" onClick={handleToggleSearch} />
      {isInputVisible && (
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md p-1 ml-2"
          value={searchTerm}
          onChange={handleChange}
        />
      )}
    </div>
  );
};
