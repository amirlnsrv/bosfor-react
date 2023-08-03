import React from "react";

import { BiPhone } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

function Header({ onClickMenu }) {
  return (
    <header className="header">
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.headerLogo}>
            <img src="./bosforLogo.png" alt="Logo" />
            <Link to="/">
              <div className={styles.headerLogoText}>
                <p className={styles.headerLogoTitle}>осфор плюс</p>
                <p className={styles.headerLogoSubtitle}>
                  продажа питьевой воды
                </p>
              </div>
            </Link>
          </div>
          <nav className={styles.headerNav}>
            <div className={styles.headerLocation}>
              <div className={styles.headerLocationIco}>
                <CiLocationArrow1 />
              </div>
              <p className={styles.headerLocationTitle}>
                <a href="https://go.2gis.com/w9jax6" target="_blank">
                  г. Бишкек, Кольбаева 30
                </a>
              </p>
            </div>
            <div className={styles.headerContacts}>
              <div className={styles.headerContactsIco}>
                <BiPhone />
              </div>
              <div className={styles.headerContactsItems}>
                <p className={styles.headerContactsItem}>
                  <a href="tel:+996709437350">+996(709)-43-73-50</a>
                </p>
                <p className={styles.headerContactsItem}>
                  <a href="tel:+996701053601">+996(701)-05-36-01</a>
                </p>
              </div>
            </div>
            <div className={styles.headerBurger} onClick={onClickMenu}>
              <span>
                <GiHamburgerMenu />
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
