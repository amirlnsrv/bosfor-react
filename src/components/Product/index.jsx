import React from "react";

import styles from "./Product.module.scss";

function Product({ handlerOpenForm, name, size, img,text }) {
  return (
    <div className={styles.productsItemsItem}>
      <div className={styles.productsItemsItemImg}>
        <img src={img} alt="0.5-1 л." />
      </div>
      <div className={styles.productsItemsItemText}>
        <p className={styles.productsItemsItemTitle}>{name}</p>
        <p className={styles.productsItemsItemSize}>{size}</p>
        <p className={styles.productsItemsItemSubtext}>
          {text}
        </p>
        <button onClick={handlerOpenForm} className="btn btn-products">
          заказать
        </button>
      </div>
    </div>
  );
}

export default Product;
