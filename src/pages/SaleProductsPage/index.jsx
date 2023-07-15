import React from 'react';
import SaleProductsContainer from '../../components/SaleProductsContainer';
import FooterContainer from '../../components/FooterContainer';

export default function SaleProductsPage() {
  window.scrollTo(0, 0);
  return (
    <div>
      <SaleProductsContainer />
      <FooterContainer />
    </div>
  );
}
