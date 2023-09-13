import React from "react";

import styles from "./Products.module.scss";
import Product from "../Product";

const products = [
  {
    name: "Вода малых объемов",
    text: "Вода в бутылке, идеально подходит для утоления жажды и увлажнения организма. Удобный размер бутылки 0,5 литра позволяет взять ее с собой в поездку, на тренировку или на рабочее место.",
    size: "0,5 — 1,5 л.",
    img: "https://mos-892740.oml.ru/thumb/2/WfxkUwUtj_0nJSqppnJfKQ/20000r20000/d/e6r.png",
  },
  {
    name: "Вода большего объема",
    size: "5 л.",
    text: "Вода в бутылке 5 литров обычно упаковывается в пластиковую бутылку с удобной ручкой для переноски. Ее удобный размер делает ее идеальным выбором для использования в разных местах.",
    img: "https://mos-892740.oml.ru/thumb/2/8V9ZVar9kbI-LKN9kfIo6g/20000r20000/d/e36r.png",
  },
  {
    name: "Бутыль для кулеров",
    size: "19 л.",
    text: "Вода в бутылке объемом 19 л, предназначена для удобного хранения и распределения питьевой воды. Она обладает большим объемом, что делает ее идеальным выбором для офисов, спортивных клубов, мероприятий или домашнего использования.",
    img: "https://mos-892740.oml.ru/thumb/2/9zlK_SSvLpTQs-_b9cp4sg/20000r20000/d/er.png",
  },
  {
    name: "Кулеры",
    size: "для дома и офиса",
    text: "Кулер для воды представляет собой устройство, специально разработанное для охлаждения и предоставления прохладной питьевой воды. Обычно он состоит из двух основных компонентов: внешнего корпуса и системы охлаждения.",
    img: "https://mos-892740.oml.ru/thumb/2/X3P_SFc-LG1_mcuTfa6Spg/20000r20000/d/e346r.png",
  },
];

function Products({ setVisibleForm }) {
  const handlerOpenForm = () => {
    setVisibleForm(true);
  };

  return (
    <section className={styles.products}>
      <div className="container">
        <h2 className={styles.productsTitle}>МЫ ПРЕДЛАГАЕМ</h2>
        <div className={styles.productsItems}>
          {products.map((item) => (
            <Product
              handlerOpenForm={handlerOpenForm}
              name={item.name}
              size={item.size}
              img={item.img}
              text={item.text}
              key={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
