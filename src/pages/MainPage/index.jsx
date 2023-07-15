import React, { useState, useEffect } from 'react';
import FooterContainer from '../../components/FooterContainer';
import BannerSale from '../../components/BannerSale';
import Catalog from '../../components/Catalog';
import BannerGetDiscount from '../../components/BannerGetDiscount';
import SaleSlider from '../../components/SaleSlider';

export default function MainPage() {
  return (
    <div>
      <BannerSale />
      <Catalog />
      <BannerGetDiscount />
      <SaleSlider />
      <FooterContainer />
    </div>
  );
}
