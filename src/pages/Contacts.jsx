import React from "react";
import Burger from "../components/Burger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactsInner from "../components/ContactsInner";

function Contacts() {
  const [visibleMenu, setVisibleMenu] = React.useState(false);

  return (
    <div className="wrapper">
      <Burger
        setVisibleMenu={setVisibleMenu}
        visibleMenu={visibleMenu}
        onClose={() => setVisibleMenu(false)}
      />
      <Header onClickMenu={() => setVisibleMenu(true)} />
      <main className="main">
        <ContactsInner />
      </main>
      <Footer />
    </div>
  );
}

export default Contacts;
