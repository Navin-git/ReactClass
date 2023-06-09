import React from "react";

const Title = ({ title }) => {
  return (
    <div
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        margin: "2rem 0",
        color: "#333",
      }}
    >
      {title}
    </div>
  );
};

export default Title;
