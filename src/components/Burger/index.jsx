import React from "react";

import styles from "./Burger.module.scss";

import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/">
              <li className={styles.burgerItem}>Главная</li>
            </NavLink>
            <NavLink to="/About">
              <li className={styles.burgerItem}>О компании</li>
            </NavLink>
            <NavLink to="/Contacts">
              <li className={styles.burgerItem}>Контакты</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Burger;
