import { useState, useEffect } from "react";
import { FaAngleDown, FaRegUserCircle, FaAngleUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Blogpage from "../../pages/Blogpage";
import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import Covid from "../../pages/Covid";
import { MdSearch, MdExpandMore, MdExpandLess,  } from "react-icons/md";


export const Header = ({alert}) => {
  const [navbarOpen, setNavbarOpen] = useState("");
  const [hamOpen, setHamOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(true);
  const ham = () => {
    setHamOpen(!hamOpen);
  };
  const scrollTop = () => {
    if (window.pageYOffset > 20) {
      setShowScroll(false);
    } 
    else if (showScroll && window.pageYOffset <= 20) {
    setShowScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTop);

    return () => window.removeEventListener("scroll", scrollTop);
  }, []);


  const showSecondaryNav = (nav) => {
    if (navbarOpen === "" || navbarOpen !== nav) {
      setNavbarOpen(nav);
    } else if (navbarOpen === nav) {
      setNavbarOpen("");
    }
  };


  return (
    <>
     
      <header className="main-nav">
      {alert && showScroll &&
         (
          <div className="main-nav__notify">
            <span>
              {alert}
            </span>
          </div>
        )}
        <div className="main-nav__wrapper">
          <div className="main-nav__wrapper__dektop">
            <div className="main-nav__wrapper__dektop__brand">

            <Link to="/" element={<Homepage />}>
            <img src="https://img.icons8.com/fluency/256/old-vmware-logo.png" />
            </Link>
              
            </div>

            <div className="main-nav__wrapper__dektop__signin">
              <span className="main-nav__wrapper__dektop__signin__signInIcon">
                <FaRegUserCircle />
              </span>

              <span
                className="main-nav__wrapper__dektop__signin__signIn"
                onClick={ham}
              >
                Sign in
              </span>

              <span
                onClick={ham}
                className="main-nav__wrapper__dektop__signin__hamBurger"
              >
                {hamOpen ? <GrClose /> : <GiHamburgerMenu />}
              </span>
            </div>
          </div>

          <div className="main-nav__wrapper__nav-items">
            <ul
              className={`main-nav__wrapper__nav-items__group ${
                hamOpen ? "" : "show"
              } `}
            >
              <li onClick={() => showSecondaryNav("search-opportunities")}>
                Search opportunities 
                <span>{navbarOpen ? <FaAngleDown /> : <FaAngleUp />}</span>
               
              </li>
              <li>Help humanity</li>
              <li>Shape healthtech</li>
              <li>About us</li>
              <li onClick={() => showSecondaryNav("FAQs")}>
                FAQs <span>{navbarOpen ? <FaAngleDown /> : <FaAngleUp />}</span>
              </li>


          <li>
            <Link to="/blog" element={<Blogpage />} style={{ textDecoration: 'inherit' }}>
            Blog
            </Link>
          </li>
            </ul>
          </div>

          <div className="main-nav__wrapper__secondary-nav">
          {navbarOpen === "search-opportunities" && (
              <ul
                id="hidden-nav"
                className="main-nav__wrapper__secondary-nav__group"
              >

                <li>
                <Link to="/covid" element={<Covid />} style={{ textDecoration: 'none' }}>
                <span>COVID-19</span>
            </Link>
                </li>                

                <li>Depression</li>
                <li>General health</li>
                <li>Gut health</li>
                <li>Heart health</li>
                <li>Sleep health</li>
                <li>Skin health</li>
                <li>Technology testers</li>
              </ul>
            )}
            {navbarOpen === "FAQs" && (
              <ul
                id="hidden-nav"
                className="main-nav__wrapper__secondary-nav__group"
              >
                <li>General FAQs</li>
                <li>Study FAQs</li>
                <li>COVID-19 FAQs</li>
              </ul>
            )}
          </div>
          
        </div>
      </header>
    </>
  );
};
