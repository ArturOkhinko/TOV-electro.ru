import React from "react";
import { Link } from "react-router-dom";
import "./Info.Style/Info.css";
import SliderInfo from "./SliderInfo";
import Time from "../TimeC/Time";
import ModalWindow from "./ModalWindow";
export default function Info() {
  const [isHr, setIsHr] = React.useState(true);
  const [modalWindow, setModalWindow] = React.useState(false);

  React.useEffect(() => {
    const widthWindow = window.innerWidth;
    if (widthWindow < 1300) {
      setIsHr(true);
    }
    if (widthWindow >= 1300) {
      setIsHr(false);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1300) {
      setIsHr(true);
    }
    if (window.innerWidth >= 1300) {
      setIsHr(false);
    }
  });

  return (
    <div className="main-info">
      {modalWindow ? (
        <div className="maps-modal-window">
          <ModalWindow
            modalWindow={modalWindow}
            onClick={(isModalWindow) => setModalWindow(isModalWindow)}
          />
        </div>
      ) : null}
      <div className="line-info">
        <div className="slider-info-main">
          <div className="slider-info">
            <SliderInfo />
          </div>
        </div>
        <div className="main-text">
          <div className="name danger">Электротовары</div>
          <button onClick={() => setModalWindow(true)}>
            <div className="text-main-info">
              Мы находимся по адресу "Город: Чапаевск, ул.
              <div className="danger">
                Гражданская 7
                <br />
                (териториия центральнного рынка)"
              </div>
            </div>
          </button>
          <div className="text">
            Наш магазин открылся совсем недавно и мы, как никто другой
            заинтересованы в том, чтобы держать низкие цены. И да, товары у нас
            действительно дешевле, чем в других магазинах. Убедитесь в этом
            сами,
            <Link className="link-info-catalog" to="/catolog">
              перейдите в наш каталог.
            </Link>
          </div>
        </div>
      </div>
      <div className="more-text">
        {isHr ? <hr /> : null}
        <div className="time-worke">
          <div className="text-time danger">
            Здесь представлено время в каторое мы работаем.
          </div>
          <div className="time-info">
            <ul>
              <li>Пн 9:00 - 17:00</li>
              <li>Вт 9:00 - 17:00</li>
              <li>Ср 9:00 - 17:00</li>
              <li>Чт 9:00 - 17:00</li>
              <li>Пт 9:00 - 17:00</li>
              <li>Сб 9:00 - 14:00</li>
              <li>Вс 9:00 - 14:00</li>
            </ul>
            <div className="date-time">
              <Time />
            </div>
            {!isHr ? (
              <div className="text-welcome">
                Мы ждем вас в это время. Не забывайте, что именно в это врремя у
                вас есть шанс купить товары по самым низким ценам.
              </div>
            ) : null}
          </div>
        </div>
        {isHr ? <hr /> : null}
        {isHr ? (
          <div className="text-welcome">
            Мы ждем вас в это время. Не забывайте, что именно в это врремя у вас
            есть шанс купить товары по самым низким ценам.
          </div>
        ) : null}
      </div>
    </div>
  );
}
