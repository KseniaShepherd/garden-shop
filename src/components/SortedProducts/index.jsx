import styles from './index.module.css';

export default function SortedProducts({ onChangeInputs }) {

  return (
    <div className={styles.sortedProductsContainer}>
      <span>Sorted</span>

      <select
        className={styles.sorted}
        data-cy='sort - type'
        name='sortType'
        onInput={onChangeInputs}
      >
        <option value='default'>By default</option>
        <option value='title'>By title A-Z</option>
        <option value='titleReverse'>By title Z-A </option>
        <option value='priceAscending'>By price ascending</option>
        <option value='priceDescending'>By price descending</option>
      </select>
    </div>
  );
}
