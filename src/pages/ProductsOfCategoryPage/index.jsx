import React from 'react';
import ProductsOfCategoryContainer from '../../components/ProductsOfCategoryContainer';
import FooterContainer from '../../components/FooterContainer';

export default function ProductsOfCategoryPage() {
  window.scrollTo(0, 0);
  return (
    <div>
      <ProductsOfCategoryContainer />
      <FooterContainer />
    </div>
  );
}
