import React from 'react';
import PriceFilter from '../PriceFilter';
import SortedProducts from '../SortedProducts';
import styles from './index.module.css';

export default function FiltersSaleContainer({onFiltersChange, filters }){
  const onChangeInputs = (event) => {
    let newState = {};
    if (event.target.name === 'checked') {
      newState = { ...filters, [event.target.name]: event.target.checked };
    } else {
      newState = { ...filters, [event.target.name]: event.target.value };
    }
    onFiltersChange(newState);
  }
  return (
    <div className={styles.filtersSaleContainer}>
      <PriceFilter onChangeInputs={onChangeInputs}/>
      <SortedProducts onChangeInputs={onChangeInputs} />
    </div>
  );

}
