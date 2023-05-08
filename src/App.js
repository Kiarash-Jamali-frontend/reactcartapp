import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;