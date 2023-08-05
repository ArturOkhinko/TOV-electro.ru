import React from "react";
import "./NavBarSASS/NavBar.css";
import VK from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/VK.png";
import Telegram from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/Telegrm.png";
import WhatsApp from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/WhatsApp.png";
import LightMail from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/LightMail.png";
import GitHub from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/GitHub.png";
import { Link } from "react-router-dom";
import logo from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/tov.png";
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
        <Link className="link" to="/catalog">
          КАТАЛОГ
        </Link>
      </div>
      <div className="social-navBar">
        {widthWindow > 800 ? (
          <div className="git-hub-nav-bar">
            <a href="https://github.com/ArturOkhinko">
              <img src={GitHub} />
              <p>GitHub создателя сайта</p>
            </a>
            <img src={logo} className="logo-nav-bar" />
          </div>
        ) : null}
        {widthWindow <= 800 ? (
          <>
            <img src={logo} className="logo-nav-bar-social" />
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
              <img src={LightMail} />
            </a>
            <p>8(987)911-33-03</p>
          </>
        ) : null}
      </div>
    </div>
  );
}
