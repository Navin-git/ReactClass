import React from "react";
import "../../assets/style/hero.css";
import Title from "../../common/Title";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute left-[10%] top-[30%]">
          <Title title={"Its Nabin"} className={"text-white text-start"} />
          <p className="text-white max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptate quod
            voluptatibus quas doloribus quidem fugit. Quisquam voluptatum,
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600 duration-300">
            Get Started
          </button>
        </div>
        <img
          className="hero-img"
          src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x800.jpg"
          alt="hero"
        />
      </div>
    </>
  );
};
const New = () => {
  return <div>new</div>;
};

export { New };
export default Hero;
