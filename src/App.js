import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Deliveries from "./pages/Deliveries";
import Cart from "./pages/Cart";
import {ShopContextProvider} from "./context/shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/menu" Component={Menu} />
            <Route path="/deliveries" Component={Deliveries} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/cart" Component={Cart} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
