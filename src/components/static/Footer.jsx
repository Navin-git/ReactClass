import React from "react";
import { Link } from "react-router-dom";
import { Bar3 } from "../assets/icons";

const Footer = () => {
  const footerList = {
    SERVICES: [
      {
        name: "Artificial Intelligence",
        link: "/ai",
      },
      {
        name: "Artificial Intelligence",
        link: "/ai",
      },
      {
        name: "Artificial Intelligence",
        link: "/ai",
      },
      {
        name: "Artificial Intelligence",
        link: "/ai",
      },
    ],
    COMPANY: [
      {
        name: "Artificial Intelligence",
        link: "/ai",
      },
      {
        name: "Artificial Intelligence",
        link: "/ai",
      },
      {
        name: "Artificial Intelligence",
        link: "/ai",
      },
      {
        name: "Artificial Intelligence",
        link: "/ai",
      },
    ],
    CONTACT: [
      {
        name: "Artificial Intelligence",
        link: "/ai",
      },
      {
        name: "Intelligence",
        link: "/ai",
      },
    ],
  };
  return (
    <footer className="mt-10 py-20 bg-[#e0e0e0]">
      <div className="w-[70%] m-auto space-y-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUsQiplH_OWtHnMb1Nrk31z58OJN009JG-w&usqp=CAU"
          alt="logo"
          className="h-14"
        />
        <div className="flex flex-wrap gap-4 justify-between">
          <div>
            <h1 className="text-blue-500 text-lg font-medium">SERVICES</h1>
            <div className="flex flex-col gap-2 mt-4">
              {footerList.SERVICES.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="font-medium text-gray-700"
                    to={item?.link}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-blue-500 text-lg font-medium">COMPANY</h1>
            <div className="flex flex-col gap-2 mt-4">
              {footerList.COMPANY.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="font-medium text-gray-700"
                    to={item?.link}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-blue-500 text-lg font-medium">CONTACT</h1>
            <div className="flex flex-col gap-2 mt-4">
              {footerList.CONTACT.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="font-medium text-gray-700"
                    to={item?.link}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-blue-500 text-lg font-medium">CONTACT</h1>
            <div className="flex flex-col gap-2 mt-4">
              {footerList.CONTACT.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="font-medium text-gray-700"
                    to={item?.link}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-blue-500 text-lg font-medium">SOCIAL</h1>
            <div className="mt-4 flex gap-2 items-center">
              <Link
                to={"https://www.facebook.com/theengineerbroofficial"}
                target="_blank"
              >
                <Bar3 className="h-5 w-5" />
              </Link>
              <Link
                to={"https://www.facebook.com/theengineerbroofficial"}
                target="_blank"
              >
                <Bar3 className="h-5 w-5" />
              </Link>
              <Link
                to={"https://www.facebook.com/theengineerbroofficial"}
                target="_blank"
              >
                <Bar3 className="h-5 w-5" />
              </Link>
              <Link
                to={"https://www.facebook.com/theengineerbroofficial"}
                target="_blank"
              >
                <Bar3 className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <p>©2023 Intelzy . All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
