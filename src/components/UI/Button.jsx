import React from "react";

const Button = ({ type, isValid, classNames, content }) => {
  return (
    <div className="relative">
      <button
        type={type}
        disabled={!isValid}
        className={`${classNames} ${
          !isValid
            ? "bg-gray-400 text-gray-700"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
