import React from "react";
import "./Footer.Style/Footer.css";
import VK from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/VK.png";
import Viber from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/Viber.png";
import WhatsApp from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/WhatsApp.png";
import LightMail from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/LightMail.png";
export default function Footer() {
  return (
    <div className="main-footer">
      <div className="telephone">
        <p>8(987)911-33-03</p>
      </div>
      <div className="social-footer">
        <a href="https://vk.com/va_electro">
          <img src={VK} />
        </a>
        <a href="viber://chat?number=%2B79879113303">
          <img src={Viber} />
        </a>
        <a href="https://wa.me/79879113303?text=Здравствуйте.%20Вопрос%20по%20поводу%20">
          <img src={WhatsApp} />
        </a>
        <a href="mailto:va_electro@bk.ru">
          <img src={LightMail} />
        </a>
      </div>
    </div>
  );
}
