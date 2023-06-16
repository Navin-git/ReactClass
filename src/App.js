import "./App.css";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
import Sidebar from "./components/static/Sidebar";
import About from "./pages/About";
// import Counter from "./pages/Counter";
// import SignUp from "./pages/SignUp";
// import Home from "./pages/Home";

const App = () => {
  // const login = true;
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {/* <Home login={login} /> */}
        {/* <Counter /> */}
        {/* <SignUp /> */}
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default App;
