import React, { useState } from "react";
import { NavList } from "./Navbar";
import { Link } from "react-router-dom";
import { DevicePhoneMobile } from "../assets/icons";

const Sidebar = ({ open, setOpen }) => {
  return (
    <div
      className={`bg-gray-100 block sm:hidden overflow-hidden absolute top-0  h-full z-[9999] duration-300 border-gray-300 ${
        open ? "w-64 border-r" : "w-0"
      }`}
    >
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <DevicePhoneMobile className="h-5 w-5" />
      </button>
      <div>
        <ul className="flex flex-col items-center justify-center h-[80vh] gap-4">
          {NavList.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  to={item.link}
                  className="hover:text-blue-600 duration-300 text-lg "
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
