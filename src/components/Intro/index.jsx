import React from "react";

import styles from "./Intro.module.scss";

function Intro({ setVisibleForm }) {
  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  return (
    <section className={styles.intro}>
      <div className="container">
        <div className={styles.introInner}>
          <div className={styles.introInnerLeft}>
            <h1 className={styles.introInnerLeftTitle}>
              доставка <br /> <span>воды</span>
            </h1>
            <p className={styles.introInnerLeftSubtext}>
              Питьевая вода высшего <br />
              качества,
              <br /> разливается из источника, <br />
              расположенного
              <br /> в экологически чистой зоне
            </p>
            <button onClick={handlerOpenForm} className="btn">
              Оставить заявку
            </button>
          </div>
          <div className={styles.introInnerRight}>
            <h2 className={styles.introInnerRightTitle}>по бишкеку</h2>
            <p className={styles.introInnerRightSubtitle}>Ключевая Вода</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
