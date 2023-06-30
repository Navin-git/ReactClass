import React from "react";

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
  };
  return (
    <footer className="mt-10 py-20 bg-[#e0e0e0]">
      <div className="w-[70%] m-auto space-y-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUsQiplH_OWtHnMb1Nrk31z58OJN009JG-w&usqp=CAU"
          alt="logo"
          className="h-14"
        />
        <div className="flex gap-10">
          <div></div>
        </div>
        <p>©2023 Intelzy . All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
