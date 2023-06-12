import React from "react";
import Title from "../../common/Title";

const GetStarted = ({ login, name }) => {
  return (
    <>
      <Title title={"Get Started"} />
      <p
        style={{
          textAlign: "center",
        }}
        className="text-red-500"
      >
        Hello {login ? name : "User"}
      </p>
    </>
  );
};

export default GetStarted;
