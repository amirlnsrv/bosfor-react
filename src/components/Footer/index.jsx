import React from "react";

import styles from "./Footer.module.scss";
import Contacts from "../../ui/Contacts";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerContacts}>
            <Contacts />
          </div>
          Copyright &copy; 2009 - 2023 ОСОО «БОСФОР ПЛЮС»
        </div>
      </div>
    </footer>
  );
}

export default Footer;
