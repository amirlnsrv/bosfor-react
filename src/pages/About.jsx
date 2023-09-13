import React from "react";
import Header from "../components/Header";
import Burger from "../components/Burger";

function About() {
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

export default About;
