import React from "react";
import Title from "../../common/Title";

const GetStarted = ({ login, name }) => {
  return (
    <div className="py-20 px-4 flex flex-col space-y-5 bg-slate-100 items-center justify-center">
      <Title title={"Get Started"} className={"text-black text-start"} />
      <p className="max-w-[500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quos voluptates voluptate quod voluptatibus
        quas doloribus quidem fugit. Quisquam voluptatum,
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600 duration-300">
        {login ? `Welcome ${name}` : "Get Started"}
      </button>
    </div>
  );
};

export default GetStarted;
