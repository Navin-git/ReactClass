import React from "react";
import Navbar from "./components/static/Navbar";
import Home from "./pages/Home";
import Footer from "./components/static/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
};

export default App;
