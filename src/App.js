import "./App.css";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
import Sidebar from "./components/static/Sidebar";
import Counter from "./pages/Counter";
// import Home from "./pages/Home";

const App = () => {
  // const login = true;
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {/* <Home login={login} /> */}
        <Counter />
        <Footer />
      </div>
    </div>
  );
};

export default App;
