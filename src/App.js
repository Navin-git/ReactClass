import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/static/Layout";
import Title from "./components/common/Title";
import ProductList from "./pages/product-list/ProductList";
import ProductDetails from "./pages/product-list/ProductDetails";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Timeline from "./components/common/Timeline";

const App = () => {
  const [dark, setDark] = useState(true);

  return (
    <main className={dark && "dark"}>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Layout dark={dark} setDark={setDark} />}>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <div>
                <Outlet />
                <Timeline />
              </div>
            }
          >
            <Route path="details" element={<>details</>} />
            <Route path="detail" element={<>detail</>} />
            <Route path=":id" element={<>me</>} />
          </Route>

          <Route path="product" element={<ProductList />} />
          <Route path="product/:name/:slug" element={<ProductDetails />} />
          <Route path="blog" element={<Title title={"Blog"} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="hire-me" element={<Title title={"Hire me"} />} />
          <Route path="*" element={<>Not found</>} />
        </Route>
        <Route path="login" element={<SignUp />} />
      </Routes>
    </main>
  );
};

export default App;
