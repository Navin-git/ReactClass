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
      >
        Hello {login ? name : "User"}
      </p>
    </>
  );
};

export default GetStarted;
