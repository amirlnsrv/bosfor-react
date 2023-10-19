import styles from "./Footer.module.scss";
import Contacts from "../../ui/Contacts";

import BtnUp from "../BtnUp";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerContacts}>
            <Contacts />
          </div>
          <div className={styles.footerCopy}>
            <p>Copyright &copy; 2023 ОСОО «БОСФОР ПЛЮС»</p>
            <BtnUp />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
