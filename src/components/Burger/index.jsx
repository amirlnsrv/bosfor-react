import React from "react";

import styles from "./Burger.module.scss";

import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

function Burger({ onClose, visibleMenu, setVisibleMenu }) {
  const handlerCloseMenu = () => {
    setVisibleMenu(false);
  };

  return (
    <div
      onClick={handlerCloseMenu}
      className={`${styles.overlay} ${
        visibleMenu ? styles.overlayVisible : ""
      }`}
    >
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.burger}>
          <div className={styles.burgerClose} onClick={onClose}>
            <GrClose />
          </div>
          <ul className={styles.burgerList}>
            <li className={styles.burgerItem}>
              <Link to="/">
                <p className={styles.burgerItemLi}>Главная</p>
              </Link>
            </li>
            <li className={styles.burgerItem}>
              <Link to="/About">
                <p className={styles.burgerItemLi}>О компании</p>
              </Link>
            </li>
            <li className={styles.burgerItem}>
              <Link to="/Contacts">
                <p className={styles.burgerItemLi}>Контакты</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Burger;
