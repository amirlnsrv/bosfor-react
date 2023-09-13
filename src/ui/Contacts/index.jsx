import React from "react";

import { BiPhone } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";

import location from "../../assets/img/location.svg";
import phone from "../../assets/img/phone.svg";

import styles from "./Contacts.module.scss";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className={styles.headerLocation}>
        <div className={styles.headerLocationIco}>
          <img src={location} alt="" />
        </div>
        <p className={styles.headerLocationTitle}>
          <a href="https://go.2gis.com/w9jax6" target="_blank">
            г. Бишкек, Кольбаева 30
          </a>
        </p>
      </div>
      <div className={styles.headerContacts}>
        <div className={styles.headerContactsIco}>
          <img src={phone} alt="" />
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
    </div>
  );
}

export default Contacts;
