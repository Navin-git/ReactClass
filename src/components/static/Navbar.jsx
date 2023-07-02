import React, { useState } from "react";
import { Bar3 } from "../assets/icons";
import { Link } from "react-router-dom";
export const NavList = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Hire me",
    link: "/hire-me",
  },
  {
    title: "Login",
    link: "/login",
  },
];
const Navbar = ({ open, setOpen }) => {
  const [drop, setDrop] = useState(false);
  return (
    <nav className="py-2 z-[999] sticky top-0 px-4 bg-slate-200 flex justify-between items-center">
      {/* <DevicePhoneMobile className="h-5 w-5" /> */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUsQiplH_OWtHnMb1Nrk31z58OJN009JG-w&usqp=CAU"
        alt=""
        className="w-10"
      />
      <ul className="hidden sm:flex gap-4">
        {NavList.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.link}
                className="hover:text-blue-600 duration-300 text-lg "
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        <div className="relative ">
          <button
            onClick={() => {
              setDrop(!drop);
            }}
          >
            menu
          </button>
          {drop && (
            <div className="absolute w-28 overflow-visible right-0 top-[calc(100%+10px)] rounded flex flex-col gap-1 bg-white p-2">
              <button
                onClick={() => {
                  setDrop(false);
                }}
              >
                profile
              </button>
              <button
                onClick={() => {
                  setDrop(false);
                }}
              >
                log out
              </button>
            </div>
          )}
        </div>
      </ul>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="block sm:hidden"
      >
        <Bar3 className="h-4 w-4 text-red-500" />
      </button>
    </nav>
  );
};

export default Navbar;
