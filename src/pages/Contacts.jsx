import React from "react";
import Burger from "../components/Burger";
import Header from "../components/Header";

function Contacts() {
  const [visibleMenu, setVisibleMenu] = React.useState(false);

  return (
    <>
      <Burger
        setVisibleMenu={setVisibleMenu}
        visibleMenu={visibleMenu}
        onClose={() => setVisibleMenu(false)}
      />
      <Header onClickMenu={() => setVisibleMenu(true)} />
    </>
  );
}

export default Contacts;
