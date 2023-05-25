import React from "react";
import { data } from "../data";
import PopularCard from "./PopularCard.js";
import styled from "styled-components";

const PopularProducts = ({ setCartProducts, cartProducts }) => {
  return (
    <>
      <Popular>
        <h2>Popular Categories</h2>
      </Popular>

      <PopularProduct>

      

        {data?.popularCategories.map((item, id) => (
          <PopularCard
            item={item}
            key={id}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
          />
        ))}
      </PopularProduct>
    </>
  );
};

export default PopularProducts;

const PopularProduct = styled.section`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(5, 1fr);
  width: 90%;
  margin: auto;
`;

const Popular = styled.section`
  width: 90%;
  margin: auto;

`;