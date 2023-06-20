import React from "react";
import Home from "./pages/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/static/Layout";
import Title from "./components/common/Title";

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
          </Route>
          <Route path="blog" element={<Title title={"Blog"} />} />
          <Route path="*" element={<>Not found</>} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
