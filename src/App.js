import "./App.css";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
import Counter from "./pages/Counter";
// import Home from "./pages/Home";

const App = () => {
  // const login = true;
  return (
    <div>
      <Navbar />
      {/* <Home login={login} /> */}
      <Counter />
      <Footer />
    </div>
  );
};

export default App;
