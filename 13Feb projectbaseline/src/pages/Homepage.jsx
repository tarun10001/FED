import React from 'react';
import { Header } from '../components/header/header';
import { HeroBanner } from '../components/hero-banner/hero-banner';
import { Swipers } from '../components/swiper/swiper';
import {PartnerSection} from "../components/partner-section/partner-section";
import { StudyTile } from '../components/study-tile/study-tile';
import { Footer } from '../components/footer/footer';
import { HeroBannerSmall } from '../components/hero-banner-small/hero-banner-small';

function Homepage() {
  return (
    <div>
       <Header /> 
       <HeroBanner /> 
       <PartnerSection />
       <Swipers />
       <StudyTile />
       <HeroBannerSmall />
       <Footer />
    </div>
  )
}

export default Homepage;