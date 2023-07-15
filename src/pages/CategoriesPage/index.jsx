import React from 'react';
import CategoriesContainer from '../../components/CategoriesContainer';
import FooterContainer from '../../components/FooterContainer';

export default function CategoriesPage() {
  window.scrollTo(0, 0);
  return (
    <div>
      <CategoriesContainer />
      <FooterContainer />
    </div>
  );
}
