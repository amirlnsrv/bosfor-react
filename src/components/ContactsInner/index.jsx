import Map from "../../ui/Map";
import Title from "../Title";
import styles from "./ContactsInner.module.scss";

function ContactsInner() {
  return (
    <div className={styles.ContactsInner}>
      <div className="container">
        <Title title="Контакты" />
        <div className={styles.inner}>
          <div className={styles.text}>
            <div className={styles.subtext}>
              <p className={styles.par}>Бесплатно по Бишкеку</p>
              <a href="tel:+996709437350">+996 (552) 33-43-43</a>
            </div>
            <div className={styles.subtext}>
              <p className={styles.par}>Отдел продаж</p>
              <a href="tel:+996709437350">+996 (504) 33-43-43</a>
            </div>
            <div className={styles.subtext}>
              <p className={styles.par}>Режим работы:</p>
              <p className={styles.subsubtext}>С 8:30 до 17 (кроме воскресенья)</p>
            </div>
            <div className={styles.subtext}>
              <p className={styles.par}>Адрес:</p>
              <p className={styles.subsubtext}>г. Бишкек, ул. Кольбаева 30, Кыргызстан</p>
            </div>
            <div className={styles.subtext}>
              <p className={styles.par}>Для писем:</p>
              <a href="mailto:mail@example.com">info@bosfor.kg</a>
            </div>
          </div>
          <div className={styles.map}>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsInner;
