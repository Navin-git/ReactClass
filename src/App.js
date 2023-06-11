import "./App.css";
import Footer from "./components/static/Footer";
import Navbar from "./components/static/Navbar";
import Home from "./pages/Home";

const App = () => {
  const login = true;
  return (
    <div>
      <Navbar />
      <Home login={login} />
      <Footer />
    </div>
  );
};

export default App;
