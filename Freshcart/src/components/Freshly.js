import React from "react";
import styled from "styled-components";

const Freshly = () => {
  return (
    <Fresh>
      <div className="freshly-overlay">
        <div className="freshly-overlay__left">
          <p className="freshly-overlay__left__baked">Fruits & Vegetables</p>
          <p className="freshly-overlay__left__shipping">Get Upto 25% Off</p>
          <button className="freshly-overlay__left__btn">Shop Now</button>
        </div>
        <div className="freshly-overlay__image">
          <img
            src="https://freshcart.codescandy.com/assets/images/banner/grocery-banner.png"
            alt=""
          />
        </div>
      </div>

      <div className="freshly-overlay">
        <div className="freshly-overlay__left">
          <p className="freshly-overlay__left__baked">Freshly Baked Buns</p>
          <p className="freshly-overlay__left__shipping">Get Upto 25% Off</p>
          <button className="freshly-overlay__left__btn">Shop Now</button>
        </div>

        <div className="freshly-overlay__image">
          <img
            src="https://freshcart.codescandy.com/assets/images/banner/grocery-banner-2.jpg"
            alt=""
          />
        </div>
      </div>
    </Fresh>
  );
};

export default Freshly;

const Fresh = styled.section`
  display: flex;
  padding: 30px 0;
  gap: 20px;
  width: 90%;
  margin: auto;

  .freshly-overlay {
    width: 90%;
    &__left {
      position: absolute;
      padding: 1%;
      &__baked {
        font-size: 32px;
      }
      &__shipping {
        color: gray;
      }
      &__btn {
        height: 50px;
        width: 120px;
        border-radius: 9px;
        background-color: rgb(0, 30, 43);
        color: #fff;
        font-size: 15px;
        font-weight: bold;
      }
    }
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;
