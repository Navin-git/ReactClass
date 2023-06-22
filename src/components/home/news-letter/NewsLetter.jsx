import React from "react";
import Title from "../../common/Title";

const NewsLetter = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center gap-4  justify-between p-10 ">
      <div className=" flex-shrink-0 md:w-[50%]  space-y-5">
        <Title title={"News Letter"} className={"text-black text-start"} />
        <p className="max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quos voluptates voluptate quod
          voluptatibus quas doloribus quidem fugit. Quisquam voluptatum,
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600 duration-300">
          Read News Letter
        </button>
      </div>
      <div className="flex-1 flex-shrink-0">
        <img
          src="https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg"
          alt=""
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
