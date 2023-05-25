import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaRegUserCircle } from "react-icons/fa";
import Contact from "./Contact";
import { NavStyle } from "../Styled-Components/NavStyle";
import { useEffect } from "react";
// import "../App.css";

const Nav = ({ cartProducts }) => {
  const userName = JSON.parse(localStorage.getItem("user"));

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [cartLen, setCartLen] = useState();

  // useEffect(() => {
  //   setCartLen(cartProducts.length);
  //   // alert("Hi")
  // }, [cartProducts])

  return (
    <NavStyle>
      <div className="navbar">
        <ul className="navbar-lists">
          <li className={splitLocation[1] === "" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={splitLocation[1] === "about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={splitLocation[1] === "contact" ? "active" : ""}>
            <Link to="/contact" element={<Contact />}>
              Contact
            </Link>
          </li>



          <li className={splitLocation[1] === "cart" ? "active" : ""}>
            <Link to="/cart">
              <FaShoppingCart className="cart-icon" />
              <span className="cart-total-item">{cartLen}</span>
            </Link>
          </li>




          <li className={splitLocation[1] === "login" ? "active" : ""}>
            <Link>
            <div className="dropdown">
              <span>{userName?.name}</span>
              
              <FaRegUserCircle />
            
                <div className="item">
                  <p>Logout</p>
                </div>
              </div>
              {/* <div className="login-dropdown">
              <li>Log Out</li>
              </div> */}
            </Link>
          </li>
        </ul>
      </div>
    </NavStyle>
  );
};

export default Nav;
