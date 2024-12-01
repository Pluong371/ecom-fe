import React from "react";

const Image = ({ src, content, className }) => {
  return <img src={src} alt={content} className={className} />;
};

export default Image;
