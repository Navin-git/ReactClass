import React from "react";
import Home from "./pages/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/static/Layout";
import Title from "./components/common/Title";
import ProductList from "./pages/product-list/ProductList";
import ProductDetails from "./pages/product-list/ProductDetails";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <div>
                <h1>about</h1>
                <Outlet />
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
