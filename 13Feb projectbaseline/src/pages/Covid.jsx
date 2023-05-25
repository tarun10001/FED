import React from 'react';
import { Footer } from '../components/footer/footer';
import { Header } from '../components/header/header';
import { HeroBanner } from '../components/hero-banner/hero-banner';
import { Studies } from '../components/studies/studies';

const Covid = () => {
  return (
    <div>
      <Header alert="This study is now closed. For current opportunities, browse our studies page." />
      <HeroBanner />
      <Studies />
      <Footer />
    </div>
  )
}

export default Covid
