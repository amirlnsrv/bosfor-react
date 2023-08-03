import React from "react";

import Burger from "./components/Burger";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  const [visibleMenu, setVisibleMenu] = React.useState(false);

  return (
    <>
      <Burger
        setVisibleMenu={setVisibleMenu}
        visibleMenu={visibleMenu}
        onClose={() => setVisibleMenu(false)}
      />
      <Header onClickMenu={() => setVisibleMenu(true)} />
      <Intro />
    </>
  );
}

export default App;
