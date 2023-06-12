import React from "react";

const Title = ({ title, className }) => {
  return (
    <h1 className={`text-2xl font-bold text-center text-blue-500 ${className}`}>
      {title}
    </h1>
  );
};

export default Title;
