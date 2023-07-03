import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = ({ setDark, dark }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
      <Navbar dark={dark} open={open} setDark={setDark} setOpen={setOpen} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
