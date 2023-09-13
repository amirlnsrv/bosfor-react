import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import Contacts from "../../ui/Contacts";

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
            <Contacts />
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
