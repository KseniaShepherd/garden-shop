import styles from './index.module.css';

export default function PriceFilter({ onChangeInputs }) {

  return (
    <div>
      <form className={styles.formPriceFilter}>
        <p>Price</p>
        <input
          type='text'
          data-cy='from'
          name='fromPrice'
          placeholder='from'
          onInput={onChangeInputs}
        />
        <input
          type='text'
          data-cy='to'
          name='toPrice'
          placeholder='to'
          onInput={onChangeInputs}
        />
      </form>
    </div>
  );
}
