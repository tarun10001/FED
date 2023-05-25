import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <MainFooter>
      <div className="footer_category">
        <div className="categories">
          <h4>Categories</h4>
          <li>Vegetables & Fruits</li>
          <li>Breakfast & instant food</li>
          <li>Bakery & Biscuits</li>
          <li>Atta, rice & dal</li>
          <li>Sauces & spreads</li>
          <li>Organic & gourmet</li>
          <li>Baby care</li>
          <li>Cleaning essentials</li>
          <li>Personal care</li>
        </div>

        <div className="know">
          <h4>Get to know us</h4>
          <li>Company</li>
          <li>About</li>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Our Value</li>
        </div>

        <div className="consumers">
          <h4>For Consumers</h4>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Product Returns</li>
          <li>FAQ</li>
          <li>Shop Checkout</li>
        </div>

        <div className="shopper">
          <h4>Become a Shopper</h4>
          <li>Shopper Opportunities</li>
          <li>Become a Shopper</li>
          <li>Earnings</li>
          <li>Ideas & Guides</li>
          <li>New Retailers</li>
        </div>

        <div className="freshcart">
          <h4>Freshcart Programs</h4>
          <li>Freshcart Programs</li>
          <li>Gift Cards</li>
          <li>Promos & Coupons</li>
          <li>Freshcart Ads</li>
          <li>Careers</li>
        </div>
      </div>

      <div className="appStore">
        <div className="visa">
          <span>Payment Partners</span>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/amazonpay.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/american-express.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/payment//mastercard.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/paypal.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/payment/visa.svg"
              alt=""
            />
          </span>
        </div>

        <div className="playstore">
          <span>Get deliveries with FreshCart</span>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/appbutton/appstore-btn.svg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://freshcart.codescandy.com/assets/images/appbutton/googleplay-btn.svg"
              alt=""
            />
          </span>
        </div>
      </div>

      <div className="copyright">
        <div className="copyright-rights">
        <span>
          Copyright 2022 © FreshCart eCommerce. All rights
          reserved.
        </span>
        <p>Powered by Codescandy.</p>
        </div>
        <div className="follow">
            <p>Follow us on</p>
            <span><FaFacebook /></span>
            <span><FaTwitter /></span>
            <span><FaInstagram /></span>
        </div>
      </div>
    </MainFooter>
  );
};

export default Footer;

const MainFooter = styled.section`
  background-color: rgb(240, 243, 242);
  margin-top: 2%;

  .footer_category {
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 40px;
    width: 90%;
    margin: auto;
    border-bottom: 1px solid rgb(219, 217, 217);
    li {
      list-style-type: none;
      padding: 7px 0;
      color: gray;
    }
  }
  .appStore {
    width: 90%;
    margin: auto;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(219, 217, 217);
    .visa {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }
    .playstore {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }
  }
  .copyright{    
    width: 90%;
    margin: auto;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    .follow {
        gap: 40px;
    display: flex;
    
    span:nth-child(n+2) {
        color: gray;
        border: 1px solid;
        height: 20px;
        border-radius: 10px;
        padding: 10px;
        
        &:hover {
            color: rgb(8, 173, 10);
            cursor: pointer;
        }

    }
}
  }
`;
