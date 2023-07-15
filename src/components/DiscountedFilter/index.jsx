import styles from './index.module.css';


export default function DiscountedFilter({onChangeInputs}) {

 
  return (
    <div>
      <label className={styles.discountedFilter}>
        <span>Discounted items</span>
        <input
          type='checkbox'
          data-cy='discountFilter'
          name='hasDiscount'
          onChange={onChangeInputs}
        />
      </label>
    </div>
  );
}
