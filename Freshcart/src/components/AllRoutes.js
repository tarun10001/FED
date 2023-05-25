import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
// import Products from "./Products";
import Signup from "./Signup";
import ProductDetails from "./ProductDetails";
export const AllRoutes = () => {
  const navigate = useNavigate();

  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cartProducts")) || []
  );
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("user"))) {
      navigate("/login");
    }
  }, []);
  const currentRoute = window.location.href.split("/")[3];
  return (
    <>
      {currentRoute !== "login" && currentRoute !== "signup" && (
        <Header cartProducts={cartProducts} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ProductDetails />} /> 
      </Routes>
    </>
  );
};
