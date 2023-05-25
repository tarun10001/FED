import styled from "styled-components";

export const NavStyle = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    padding: 0 20px;
    align-items: center;
    list-style-type: none;
    list-style: none;
    li a {
      text-decoration: none;
      /* background-color: #332d2d; */
      padding: 10px 23px;
      font-weight: bold;
      color: black;
      font-size: 17px;
      border-radius: 12px;

      &:hover {
        opacity: 0.9;
      }
    }
    .active {
      /* background-color: rgb(53,121,250); */
      color: #fff;
    }
    .active a {
      background-color: rgb(53,121,250);
      color: #fff;
      font-size: 17px;
    }
  }

  .dropdown {
  /* width: 100px; */
}
.dropdown .item {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 70px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown .item li:hover {
  background-color: #f1f1f1
}
.dropdown .item li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}


.dropdown:hover .item{
  display: block;
  color: #000;
  /* width: 50px; */
  /* padding: 12px; */
  background-color: #fff;
  /* height: 45px; */
  text-align: center;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
} 
  .cart-icon-link {
    position: relative;
    .cart-icon {
      position: relative;
    }
    .cart-total-item {
      width: 1.4rem;
      height: 1.5rem;
      position: absolute;
      background-color: steelblue;
      color: #fff;
      border-radius: 50%;
      text-align: center;
      top: -30%;
      /* left: 70%; */
    }
  }
`;