import styled from "styled-components";
import React from "react";

const FeaturedCard = ({ title, image }) => {
  return (
    <FeatureCard>
      <img src={image} />
      <div>{title}</div>
    </FeatureCard>
  );
};

const FeatureCard = styled.section`
  border: 1px solid rgb(219, 217, 217);
  width: 150px;
  padding: 2%;
  border-radius: 12px;
  text-align: center;
  width: 90%;
  margin: auto;
  &:hover {
    border: 1px solid #0aad0a;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export default FeaturedCard;