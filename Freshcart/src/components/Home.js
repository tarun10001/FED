import React from 'react'
import FeaturedProducts from '../sections/FeaturedProducts';
import PopularProducts from '../sections/PopularProducts';
import Footer from './Footer';
import Freshly from './Freshly';
import ScrollToTop from './ScrollToTop';
import Swiper from './Swiper';

function Home({setCartProducts, cartProducts}) {
  return (
    <div>
      {/* <ScrollToTop /> */}
      <Swiper />
      <FeaturedProducts />
      <Freshly />
      <PopularProducts setCartProducts={setCartProducts} cartProducts={cartProducts} />
   <Footer />
    </div>
  )
}

export default Home;