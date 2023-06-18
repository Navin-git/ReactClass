import React from "react";

const Navbar = () => {
  const NavList = [
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
      title: "Login",
      link: "/login",
    },
  ];
  return (
    <nav className="py-2 z-[999] sticky top-0 px-4 bg-slate-200 flex justify-between items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUsQiplH_OWtHnMb1Nrk31z58OJN009JG-w&usqp=CAU"
        alt=""
        className="w-10"
      />
      <ul className="flex gap-4">
        {NavList.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-blue-600 duration-300 text-lg "
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
