import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/static/Layout";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<></>} />
          <Route path="contact" element={<></>} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
