import React from "react";
import Title from "../components/common/Title";
import { Bar3, DevicePhoneMobile } from "../components/assets/icons";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Title title={"Get In Touch"} className={"mt-10"} />
      <div className="flex mt-10 gap-20">
        <form className="w-[50%] grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              className=" border border-gray-300 py-2 px-4 rounded-lg outline-blue-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Contact</label>
            <input
              type="text"
              placeholder="Enter your Contact..."
              className=" border border-gray-300 py-2 px-4 rounded-lg outline-blue-500"
            />
          </div>
          <div className="flex flex-col col-span-2 gap-1">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter your Email..."
              className=" border border-gray-300 py-2 px-4 rounded-lg outline-blue-500"
            />
          </div>
          <div className="flex flex-col col-span-2 gap-1">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter your Title..."
              className=" border border-gray-300 py-2 px-4 rounded-lg outline-blue-500"
            />
          </div>
          <div className="flex flex-col col-span-2 gap-1">
            <label htmlFor="">Message</label>
            <textarea
              type="text"
              placeholder="Enter your Message..."
              className=" border border-gray-300 py-2 px-4 h-28 rounded-lg outline-blue-500"
            />
          </div>
          <button className="px-4 w-fit py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600 duration-300">
            Send Message
          </button>
        </form>
        <div className="flex-1 space-y-4">
          <div className="border border-gray-300 w-fit rounded-xl py-4 px-6 flex items-center gap-4">
            <span>Follow us on</span>
            <Bar3 className="h-5 w-5" />
            <Bar3 className="h-5 w-5" />
            <Bar3 className="h-5 w-5" />
          </div>
          <div className="flex gap-4 items-center max-w-[300px]">
            <DevicePhoneMobile className="h-5 w-5 text-blue-500 flex-shrink-0" />
            <span>Saptagandaki Chowk, Bharatpur-10, Chitwan Nepal</span>
          </div>
          <div className="flex gap-4">
            <DevicePhoneMobile className="h-5 w-5" />
            <span>+977-9807123239</span>
          </div>
          <div className="flex gap-4">
            <DevicePhoneMobile className="h-5 w-5" />
            <span>Scontact@intelzy.co</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
