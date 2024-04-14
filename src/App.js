import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSign";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop />}></Route>

          <Route path="/mens" element={<ShopCategory category="men" />}></Route>
          <Route
            path="/womens"
            element={<ShopCategory category="women" />}
          ></Route>
          <Route path="/kids" element={<ShopCategory category="kid" />}></Route>

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>

          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
