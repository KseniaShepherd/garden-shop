import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../requests/getProduct';
import ProductDescriptionItem from '../../components/ProductDescriptionItem';
import FooterContainer from '../../components/FooterContainer';

export default function ProductDescriptionPage() {
  window.scrollTo(0, 0);
  const { productId } = useParams();
  const product = useSelector((state) => state.productDescripton);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  const {
    id,
    title,
    price,
    discont_price,
    image,
    description,
    realPrice,
    discountPercentage,
  } = product;

  return (
    <div>
      <div>
        <ProductDescriptionItem
          id={id}
          title={title}
          price={price}
          discont_price={discont_price}
          image={image}
          description={description}
          realPrice={realPrice}
          discountPercentage={discountPercentage}
        />
      </div>
      <FooterContainer />
    </div>
  );
}
