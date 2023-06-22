import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
      <Navbar open={open} setOpen={setOpen} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
