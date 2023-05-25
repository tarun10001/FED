import React from "react";
import { Link } from "react-router-dom";
import {HeaderStyle} from '../Styled-Components/HeaderStyle';
import Nav from "./Nav";

const Header = ({cartProducts}) => {
  return (
    <HeaderStyle>
      <Link to="/">
        <img
          src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg"
          alt="my-logo"
        />
      </Link>
      <Nav cartProducts={cartProducts} />
    </HeaderStyle>
  );
};


export default Header;