import React from "react";

import Burger from "../components/Burger";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Products from "../components/Products";
import Promo from "../components/Promo";
import ModalForm from "../ui/ModalForm";
import Footer from "../components/Footer";

function Main() {
  const [visibleMenu, setVisibleMenu] = React.useState(false);
  const [visibleForm, setVisibleForm] = React.useState(false);

  return (
    <div className="wrapper">
      <Burger
        setVisibleMenu={setVisibleMenu}
        visibleMenu={visibleMenu}
        onClose={() => setVisibleMenu(false)}
      />
      <Header onClickMenu={() => setVisibleMenu(true)} />
      <ModalForm
        setVisibleForm={setVisibleForm}
        visibleForm={visibleForm}
        title="Оставить заявку"
      />
      <main className="main">
        <Intro setVisibleForm={setVisibleForm} />
        <Products setVisibleForm={setVisibleForm} />
        <Promo setVisibleForm={setVisibleForm} />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
