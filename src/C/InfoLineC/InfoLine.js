import React from "react";
import "./InfoLine.Style/InfoLine.css";
import Burger from "../BurgerC/Burger";
import SocialLine from "./SocialLine";
import logo from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/Logo.jpeg";
export default function InfoLine({ isNavBar }) {
  const [positionButton, setPositionButton] = React.useState(-200);

  let widthWindow = window.innerWidth;
  React.useEffect(() => {
    widthWindow <= 800 ? setPositionButton(0) : setPositionButton(-200);
  }, []);
  window.addEventListener("resize", () => {
    widthWindow = window.innerWidth;
    widthWindow <= 800 ? setPositionButton(0) : setPositionButton(-200);
  });

  return (
    <div className="main-line">
      <div className="left">
        {widthWindow <= 800 ? (
          <div
            className="burger"
            style={{
              transform: `translateX(${positionButton}%)`,
            }}
          >
            <Burger isNavBar={isNavBar} />
          </div>
        ) : null}
        <div className="logo">
          <img src={logo} />
        </div>
      </div>
      {positionButton < 0 ? (
        <div className="social-line">
          <SocialLine />
        </div>
      ) : null}
    </div>
  );
}
