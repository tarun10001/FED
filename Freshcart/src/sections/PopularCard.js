import React from "react";
import styled from "styled-components";
import Rating from "./Rating";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PopularCard = ({ item, setCartProducts, cartProducts }) => {
  const navigate = useNavigate();

  const clickedProduct = (e) => {
    navigate(`/products/${item.id}`);
  };

  const handleClick = () => {
    // let presentItem = cartProducts.find(item => item.id === id);
// console.log(presentItem)
    if (presentItem) {
    setCartProducts([...cartProducts, { ...item, qty: 1 }]);
    } else {
      setCartProducts([...cartProducts]);
    }
  };

  return (
    <Card>
      <img src={item.image} alt="" onClick={clickedProduct} />
      <span className="category">{item.category}</span>
      <p>{item.title}</p>
      <div className="rating">
        <span>
          <Rating rating={item.rating} />
        </span>
        <span className="reviews">{"(" + item.reviews + ")"}</span>
      </div>
      <div className="price-btn">
        <span>₹{item.price}</span>
        <span className="cutoffPrice">{item.cutoffPrice}</span>

        {/* <button onClick={() => setCartProducts([...cartProducts, {...item, qty:1}])}> */}
        <button onClick={handleClick}>
          <span>
            <FaPlus />
          </span>
          <span>Add</span>
        </button>
      </div>
    </Card>
  );
};

const Card = styled.section`
  border: 1px solid rgb(219, 217, 217);
  /* width: 208px; */
  margin: 5px;
  padding: 0 20px;
  border-radius: 12px;

  &:hover {
    border: 1px solid #0aad0a;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .category {
    color: gray;
  }

  .rating {
    display: flex;
    gap: 20px;
    .reviews {
      color: gray;
    }
  }
  .price-btn {
    padding: 7px;
    display: flex;
    justify-content: space-between;
    .cutoffPrice {
      text-decoration: line-through;
      color: gray;
    }
    button {
      background-color: rgb(8, 173, 10);
      color: #fff;
      border-radius: 6px;
      border: none;
      height: 31px;
      width: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      gap: 6px;
    }
  }
`;

export default PopularCard;
