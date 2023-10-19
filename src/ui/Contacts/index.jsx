import React from "react";

import location from "../../assets/img/location.svg";
import phone from "../../assets/img/phone.svg";

import styles from "./Contacts.module.scss";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.headerLocation}>
        <div className={styles.headerLocationIco}>
          <img src={location} alt="location" />
        </div>
        <p className={styles.headerLocationTitle}>
          <a href="https://go.2gis.com/w9jax6" target="_blank">
            г. Бишкек, Кольбаева 30
          </a>
        </p>
      </div>
      <div className={styles.headerContacts}>
        <div className={styles.headerContactsIco}>
          <img src={phone} alt="phone" />
        </div>
        <div className={styles.headerContactsItems}>
          <p className={styles.headerContactsItem}>
            <a href="tel:+996709437350">+996 (552) 33-43-43</a>
          </p>
          <p className={styles.headerContactsItem}>
            <a href="tel:+996701053601">+996 (504) 33-43-43</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
