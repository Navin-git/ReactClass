import React from "react";
import Title from "../../common/Title";

const NewsLetter = ({ name, login }) => {
  return (
    <>
      <Title title={"News Letter"} className="!text-green-500" />
      <p
        style={{
          textAlign: "center",
        }}
      >
        Hello {login ? name : "User"}
      </p>
    </>
  );
};

export default NewsLetter;
