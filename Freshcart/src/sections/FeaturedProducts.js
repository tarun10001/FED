import React from "react";
import { data } from "../data";
import FeaturedCard from "./FeaturedCard.js";
import styled from "styled-components";

const FeaturedProducts = () => {
  return (
    <>
      <Featured>
        <h2>Featured Categories</h2>
      </Featured>

      <FeatureProducts>
        {data?.featuredCategories.map((item, id) => (
          <FeaturedCard {...item} key={id} />
        ))}
      </FeatureProducts>
    </>
  );
};

export default FeaturedProducts;

const FeatureProducts = styled.section`
  display: flex;
  width: 90%;
  margin: auto;
  gap: 2rem;
`;

const Featured = styled.section`
  width: 90%;
  margin: auto;
`;
