import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import ProductsPage from '../../pages/ProductsPage';
import CategoriesPage from '../../pages/CategoriesPage';
import SaleProductsPage from '../../pages/SaleProductsPage';
import ProductDescriptionPage from '../../pages/ProductDescriptionPage';
import CartPage from '../../pages/CartPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ProductsOfCategoryPage from '../../pages/ProductsOfCategoryPage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/categories' element={<CategoriesPage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/saleproducts' element={<SaleProductsPage />} />
      <Route path='/products/:productId' element={<ProductDescriptionPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/*' element={<NotFoundPage />} />
      <Route
        path='/products/category/:categoryId'
        element={<ProductsOfCategoryPage />}
      />
    </Routes>
  );
};

export default Router;
