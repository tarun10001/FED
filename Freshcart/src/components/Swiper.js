import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { FaAngleRight } from "react-icons/fa";

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ width: "90%", margin: "auto" }}
      >
        <SwiperSlide>
          <Overlay>
            <div className="swiperslide-overlay">
              <div
                className="swiperslide-overlay__left"
              >
                <p className="swiperslide-overlay__left__discount">
                  Opening Sale Discount 50%
                </p>
                <span className="swiperslide-overlay__left__orders">
                  Free Shipping on orders over <span>$100</span>
                </span>
                <p className="swiperslide-overlay__left__shipping">
                  Free Shipping to first time consumers only, After Promotions
                  and discounts are applied
                </p>
                <button className="swiperslide-overlay__left__btn">
                  Shop Now
                  <FaAngleRight />
                </button>
              </div>
              <div className="swiperslide-overlay__right">
                <img src="https://freshcart.codescandy.com/assets/images/slider/slider-2.jpg" />
              </div>
            </div>
          </Overlay>
        </SwiperSlide>
        <SwiperSlide>
          <Overlay>
            <div className="swiperslide-overlay">
              <div
                className="swiperslide-overlay__left"
              >
                <p className="swiperslide-overlay__left__discount">
                  Opening Sale Discount 50%
                </p>
                <span className="swiperslide-overlay__left__orders">
                  Free Shipping on orders over <span>$100</span>
                </span>
                <p className="swiperslide-overlay__left__shipping">
                  Free Shipping to first time consumers only, After Promotions
                  and discounts are applied
                </p>
                <button className="swiperslide-overlay__left__btn">
                  Shop Now
                  <FaAngleRight />
                </button>
              </div>
              <div className="swiperslide-overlay__right">
                <img src="https://freshcart.codescandy.com/assets/images/slider/slide-1.jpg" />
              </div>
            </div>
          </Overlay>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const Overlay = styled.section`
margin-top:16px;
  .swiperslide-overlay {
    &__left {
      position: absolute;
      padding: 9%;
      width: 30%;
      &__discount {
        background-color: rgb(255, 193, 7);
        width: 50%;
        text-align: center;
        border-radius: 9px;
      }
      &__orders {
        font-size: 45px;
        font-weight: bolder;
        span {
          color: #0aad0a;
        }
      }
      &__shipping {
        font-size: 20px;
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
`;
