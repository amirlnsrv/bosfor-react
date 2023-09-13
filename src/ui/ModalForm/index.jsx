import React from "react";
import { useForm } from "react-hook-form";
import { GrClose } from "react-icons/gr";

import styles from "./ModalForm.module.scss";

function ModalForm({ visibleForm, setVisibleForm, title }) {
  const { register, handleSubmit, reset } = useForm();

  function sendToWhatsapp(text) {
    let url = `https://web.whatsapp.com/send?phone=996701053601&&text=${text}&source=&data=`;
    window.open(url);
  }

  const handlerCloseForm = () => {
    setVisibleForm(false);
  };

  const onSubmit = (data) => {
    const clientData = `Меня зовут - ${data.name}, номер телефона - ${data.phone}`;
    // sendToWhatsapp(JSON.stringify(data));
    sendToWhatsapp(
      "Здравствуйте хочу заказать воду! Перезвоните мне! " + clientData
    );
    reset({
      phone: null,
      name: "",
    });
  };

  return (
    <div
      onClick={handlerCloseForm}
      className={`${styles.overlay} ${
        visibleForm ? styles.overlayVisible : ""
      }`}
    >
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <div onClick={handlerCloseForm} className={styles.closeIco}>
          <GrClose />
        </div>
        <div className={styles.modal}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <p className={styles.modalSubtext}>
            Оставьте заявку на сайте и мы перезвоним Вам в ближайшее время
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.modalForm}>
            <input
              type="text"
              placeholder="Ваше имя"
              {...register("name")}
              required
              className={styles.modalFormInput}
            />
            <input
              type="tel"
              placeholder="Телефон *"
              {...register("phone")}
              className={styles.modalFormInput}
            />
            <button className="btn btn-modal">Отправить заявку</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
