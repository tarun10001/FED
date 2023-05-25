import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__footer-container">
        <div className="footer__footer-container__top-row">
          <ul className="social-links">
            <a href="">
              <img
                src="https://kstatic.googleusercontent.com/files/880e174fd784c91fecc2ee2d6d7da7b92992e586811f27cda0ce3b59d82da18cba512c4181587fe24da31bcf93aa6c005104a298e9adfff53d746939e193a513"
                alt=""
              />
            </a>
            <a href="">
              <img
                src="https://kstatic.googleusercontent.com/files/0539a37355551e6c9684481c212cfd3e8ff9236df45271c9696cb080542f04b0ce17cdc6854b27c49071718e2bcfbb0f292710113b5c40b8ce35dba603f2f844"
                alt=""
              />
            </a>
          </ul>

          <ul>
            <li>Participant support</li>
            <li>Baseline FAQs</li>
            <li>Baseline Privacy Policy</li>
            <li>Baseline Terms of Service</li>
            <li>Contact us</li>
          </ul>

          <ul>
            <li>Careers</li>
            <li>Open roles</li>
          </ul>

         <ul>
            <div className="enterprise">
              <li>Enterprise Platform</li>
              <li>Study sponsor</li>
              <li>Advocacy groups</li>
              <li>COVID-19 partners</li>
            </div>
            <div className="newsroom">
              <li>Newsroom</li>
              <li>Blog</li>
              <li>Press kit</li>
            </div>
          </ul> 
        </div>

        <div className="footer__footer-container__bottom-row">
          <div className="footer__footer-container__bottom-row__logo-container">
         
            <img src="https://img.icons8.com/fluency/256/old-vmware-logo.png"  alt="" />
          </div>
          <div className="footer__footer-container__bottom-row__links-wrapper">
            <span>© 2023 VeriT Life Sciences LLC. | </span>
            <span>AlphaT, Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
