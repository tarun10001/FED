import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import "../App.css";
import Footer from "./Footer";
import Rating from "../sections/Rating";
import Zoom from "react-img-zoom";

import { FaShoppingBag } from "react-icons/fa";

const Product = () => {
  const { id } = useParams();
  // console.log(id);
  const currentProduct = data?.popularCategories.find(
    (product) => product.id == id
  );

  const [currentImg, setCurrentImg] = useState(0);
  const handleClick = (index) => {
    setCurrentImg(index);
    console.log(index);
  };

  return (
    <>
      <div className="product-details">
        <div className="left-product-details">
          <img
            src={currentProduct.images[currentImg].imageURL}
            height="300"
            width="320"
            className="original_image"
          />
          {/* <Zoom img={currentProduct.images[currentImg].imageURL} width={700}
            height={350} zoomScale={2} />  */}

          <div className="flex_row">
            {currentProduct.images.map((data, index) => {
              return (
                <div className="thumbnail" key={index}>
                  <img
                    className={currentImg === index ? "clicked" : ""}
                    src={data.imageURL}
                    onClick={() => handleClick(index)}
                    height="70"
                    width="100"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="right-product-details">
          <p className="product-details__category">{currentProduct.category}</p>
          <p className="product-details__title">{currentProduct.title}</p>
          <p className="product-details__rating">
            <Rating rating={currentProduct.rating} />
          </p>
          <p className="product-details__price">₹{currentProduct.price}</p>
          <button
            className="product-details__cart-btn"
            
          >
            <span>
              <FaShoppingBag />
            </span>
            <span> Add to cart</span>
          </button>
          <hr />
          <table className="table">
            <tbody>
              <tr>
                <td>Product Code:</td>
                <td>FBB00255</td>
              </tr>
              <tr>
                <td>Availability:</td>
                <td>In Stock</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Fruits</td>
              </tr>
              <tr>
                <td>Shipping:</td>
                <td>
                  <small>
                    01 day shipping.
                    <span>( Free pickup today)</span>
                  </small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
