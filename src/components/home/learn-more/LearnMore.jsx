import React from "react";
import Title from "../../common/Title";

const LearnMore = () => {
  return (
    <div className="flex items-center p-10 ">
      <div className="w-[50%] flex-shrink-0 space-y-5">
        <Title title={"Learn More"} className={"text-black text-start"} />
        <p className="max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quos voluptates voluptate quod
          voluptatibus quas doloribus quidem fugit. Quisquam voluptatum,
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600 duration-300">
          Read More
        </button>
      </div>
      <div>
        <img
          src="https://images.prismic.io/mystique/983eac5a-23be-4b1f-af1c-791d6931f760_IMG_1.jpg?auto=compress,format&rect=0,0,1600,999&w=1600&h=999"
          alt=""
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default LearnMore;
