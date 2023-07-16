import React from "react";
import "./NavBarSASS/NavBar.css";
import VK from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/VK.png";
import Viber from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/Viber.png";
import WhatsApp from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/WhatsApp.png";
import Mail from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/Mail.png";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [widthWindow, setWidthWindow] = React.useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidthWindow(window.innerWidth);
  });
  return (
    <div className="main-nav-bar">
      <div className="navigation">
        <Link className="link" to="/home">
          HOME
        </Link>
        <Link className="link" to="/info">
          INFO
        </Link>
        <Link className="link" to="/catolog">
          CATALOG
        </Link>
      </div>
      {widthWindow < 800 ? (
        <div className="social-navBar">
          <a href="https://vk.com/va_electro">
            <img src={VK} />
          </a>
          <a href="viber://chat?number=%2B79376588717">
            <img src={Viber} />
          </a>
          <a href="https://wa.me/79376588717?text=Здравствуйте.%20Вопрос%20по%20поводу%20">
            <img src={WhatsApp} />
          </a>
          <a href="mailto:va_electro@bk.ru">
            <img src={Mail} />
          </a>
          <p>8(987)911-33-03</p>
        </div>
      ) : null}
    </div>
  );
}
