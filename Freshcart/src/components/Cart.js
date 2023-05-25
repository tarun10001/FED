import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import styled from "styled-components";
import { BiShoppingBag } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Header from "./Header";

const Cart = ({}) => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("cartProducts")) || []
  );
  // const [quantity, setQuantity] = useState(1);
const [disabled, setDisabled] = useState(false);
  const deleteHandler = (id) => {
    console.log(id);
    const newList = list.filter((item) => item.id !== id);
    localStorage.setItem("cartProducts", JSON.stringify(newList));
    setList(newList);
  };

  const priceQuantity = (id, value) => {
    const currentProduct = list.map(item => {
      if (item.id === id && item.qty>=1 || item.id === id && item.qty==0) {
        item.qty += value;
        return item;
      }
      else {
        return item;
      }
    })
    setList(currentProduct);
    localStorage.setItem("cartProducts", JSON.stringify(currentProduct));
  }

  return (
    <>
      <CartTitle>
        <div className="title">
          <span>
            <BiShoppingBag />
          </span>
          <span>My Cart</span>
        </div>
      </CartTitle>

      <CartMain>

        
        <CartCardLeft>
          {list.map((item) => {
            return (
              <>
                <CartCardLeft key={item.id}>
                  <div className="cart">
                  <div>
                      <img src={item.image} alt="" />
                      </div>
                    <div className="cart__cart-left">
                     
                      <div>
                        <p className="title">{item.title}</p>
                        <span>{item.category}
                        </span>
                      </div>
                 
                      <div className="qty">
                        <p>Quantity</p>
                        <span className="qty-buttons">
                          <button onClick={() => priceQuantity(item.id, -1)}>-</button>
                          {item.qty >= 1 ?  <span>{+item.qty}</span> : <span>1</span>}
                         

                          <button onClick={() => priceQuantity(item.id, 1)}>+</button>
                        </span>
                      </div>
                   

                      <div className="delete-container">
                      <button
                        onClick={() => deleteHandler(item.id)
                        }
                        className="cart__cart-left__del-btn"
                      >
                        <span>
                          <MdDeleteOutline />
                        </span>
                        <span>Remove</span>
                      </button>
                    </div>

                    </div>
                    <div className="total">
                        <p className="total__price">Price</p>

                        {/* {item.qty >= 0 ? <p>₹{Math.abs(item.price)}</p> : <p>₹{Math.abs(item.price * item.qty)}</p>} */}
                        {item.qty <= 0 ? <p>₹{Math.abs(item.price)}</p> : <p>₹{Math.abs(item.price * item.qty)}</p>}
                    </div>
                    
                  </div>
                </CartCardLeft>
              </>
            );
          })}
        </CartCardLeft>

        <CartCardRight>
          <div className="cart__cart-right">
            <table>
              <tbody>
                <tr>
                  <td>Shipping Cost : </td>
                  <td>TBD</td>
                </tr>
                <tr>
                  <td>Availability:</td>
                  <td>In Stock</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Estimated Total
                  </td>
                  {/* <td>₹{item.price}</td> */}
                </tr>
              </tbody>
            </table>
          </div>
          <button className="cart__cart-right__checkout-button">
            <span>
              <FaShoppingBag />
            </span>
            <span>Checkout</span>
          </button>
        </CartCardRight>
      </CartMain>
      {/* 
<div className="items">
              <span>1 Items</span>
              <span>₹{item.price}</span>
            </div> */}
            
    </>
  );
};

const CartMain = styled.section`
  display: flex;
`;

const CartTitle = styled.section`
  .title {
    text-align: center;
    font-size: 40px;
    margin: 10px;
    font-weight: bold;
  }
`;

const CartCardRight = styled.section`
  width: 40%;

  .cart__cart-right {
    table {
      width: 100%;
    }
    &__checkout-button {
      width: 80%;
      background-color: rgb(8, 173, 10);
      border: none;
      color: #fff;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
`;

const CartCardLeft = styled.section`
  width: 85%;
  margin: auto;
  gap: 20px;
  .title {
    font-weight: bold;
  }
  .qty {
    span{ 
    color: gray;
    }
    .qty-buttons {
      display: flex;
      gap: 10px;
      button {
        border: none;
        width: 40px;
        border-radius: 50%;
        height: 30px;
        font-size: 20px;
        &:hover {
          background-color: steelblue;
          cursor: pointer;
          color: #fff;
          transition: 0.4s;
        }
      }
   }
  }
   
.total {
  margin-top: 12px;
  &__price {
    font-weight: bold;
  }
}
  .items {
    display: flex;
    justify-content: space-between;
    width: 60%;
  }
  .cart {
    display: flex;
    border-top: 1px solid rgb(219, 217, 217);

    border-bottom: 1px solid rgb(219, 217, 217);

    &__cart-left {

      gap: 0 70px;
      width: 95%;

      &__del-btn {
        height: 40px;
        margin: 30px 0 ;
        border-radius: 9px;
        width: 90px;
        background-color: steelblue;
        cursor: pointer;
        border: none;
        color: #fff;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      p {
        margin-top: 30px;
      }
    }
  }
`;

export default Cart;