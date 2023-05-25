import React from "react";
import styled from "styled-components";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ rating }) => {
  return (
    <Ratings>
      <span>
      {rating >= 1 ? <FaStar /> : rating >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>

      <span>
      {rating >= 2 ? <FaStar /> : rating >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>

      <span>
      {rating >= 3 ? <FaStar /> : rating >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>

      <span>
      {rating >= 4 ? <FaStar /> : rating >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>

      <span>
      {rating >= 5 ? <FaStar /> : rating >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
      </span>


    </Ratings>
  );
};

export default Rating;


const Ratings = styled.section`
color: rgb(255,193,8);
`