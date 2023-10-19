import styles from "./BtnUp.module.scss";

import btnUp from "../../assets/img/btnUp.svg";

function BtnUp() {
  const handlerGoUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button onClick={handlerGoUp} className={styles.btnUp}>
        <img src={btnUp} alt="" />
      </button>
    </>
  );
}

export default BtnUp;
