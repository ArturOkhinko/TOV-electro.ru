import React from "react";
import "./NavBarSASS/NavBar.css";
import VK from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/VK.png";
import Telegram from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/Telegrm.png";
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
          ГЛАВНАЯ
        </Link>
        <Link className="link" to="/info">
          О НАС
        </Link>
        <Link className="link" to="/catolog">
          КАТАЛОГ
        </Link>
      </div>
      {widthWindow < 800 ? (
        <div className="social-navBar">
          <a href="https://vk.com/va_electro">
            <img src={VK} />
          </a>
          <a href="https://t.me/+79879113303">
            <img src={Telegram} />
          </a>
          <a href="https://wa.me/79879113303?text=Здравствуйте.%20Вопрос%20по%20поводу%20">
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
