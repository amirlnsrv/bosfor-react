import React from "react";

import styles from "./Promo.module.scss";

import promo from "../../assets/img/promo.webp";

function Promo({ setVisibleForm }) {
  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  return (
    <section className={styles.promo}>
      <div className="container">
        <div className={styles.promoInner}>
          <div className={styles.promoLeft}>
            <img src={promo} alt="Акция" />
          </div>
          <div className={styles.promoRight}>
            <h2 className={styles.promoTitle}>Акция</h2>
            <p className={styles.promoSubtitle}>
              Каждая <span>3-я</span> бутылка в подарок
            </p>
            <button onClick={handlerOpenForm} className="btn btn-products">
              Заказать по акции
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
