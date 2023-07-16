import React from "react";
import "./Burger.Style/Burger.css";
export default function Burger({ isNavBar }) {
  const [navBar, setNavBar] = React.useState(true);
  function hendleIsNavBar() {
    navBar ? setNavBar(false) : setNavBar(true);
    isNavBar(navBar);
  }

  return (
    <button className="main-burger" onClick={hendleIsNavBar}>
      <hr />
      <hr />
      <hr />
    </button>
  );
}
