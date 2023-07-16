import React from "react";
import "./ModalWindow.Style/ModalWindow.css";
import GoogleMaps from "./images/GoogleMaps.png";
import YandexMaps from "./images/YandexMaps.png";
export default function ModalWindow() {
  return (
    <div className="main-modal-window">
      <div className="modal-window">
        <ul>
          <li>
            <a href="https://www.google.com/maps/place/%D0%93%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+7,+%D0%A7%D0%B0%D0%BF%D0%B0%D0%B5%D0%B2%D1%81%D0%BA,+%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB.,+446100/@52.9806397,49.6998419,3a,75y,77.49h,80.28t/data=!3m6!1e1!3m4!1sH6E9h_gh9vHn0SxSeHDAIg!2e0!7i13312!8i6656!4m7!3m6!1s0x4168b8ddfc5da341:0x394af7b290ec5ae7!8m2!3d52.9803615!4d49.7000175!10e5!16s%2Fg%2F11sv8858_h?entry=ttu">
              <img src={GoogleMaps} />
              <p>Google maps</p>
            </a>
          </li>
          <li className="hr-modal-window">
            <hr />
          </li>
          <li>
            <a>
              <img src={YandexMaps} />
              <p>Яндекс Карты</p>
            </a>
          </li>
        </ul>
      </div>
      <p>
        Выберите на каких картах вам удобней посмотреть расположение нашего
        магазина
      </p>
    </div>
  );
}
