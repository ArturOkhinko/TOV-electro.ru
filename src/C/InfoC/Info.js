import React from "react";
import { Link } from "react-router-dom";
import "./Info.Style/Info.css";
import video from "/Users/admin/Desktop/pet-progects/electro-tovary/src/video/Video.mov";
import logo from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/tov.png";
import SliderInfo from "./SliderInfo";
import Time from "../TimeC/Time";
import ModalWindow from "./ModalWindow";
import ModalImg from "../ModalImgC/ModalImg";
export default function Info() {
  const [isHr, setIsHr] = React.useState(true);
  const [modalWindow, setModalWindow] = React.useState(false);
  const [img, setImg] = React.useState("");
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
  const changeImg = (img) => {
    setImg(img);
  };
  return (
    <div className="main-info">
      {img ? (
        <div className="modal-img">
          <ModalImg img={img} removeImg={() => setImg("")} />
        </div>
      ) : null}
      {modalWindow ? (
        <div className="maps-modal-window">
          <ModalWindow
            modalWindow={modalWindow}
            onClick={(isModalWindow) => setModalWindow(isModalWindow)}
          />
        </div>
      ) : null}
      <div className="line-info">
        <div className="slider-info">
          <SliderInfo changeImg={changeImg} />
        </div>
        <div className="main-text">
          <div className="name danger">Электротовары</div>
          <button onClick={() => setModalWindow(true)}>
            <div className="text-main-info">
              Мы находимся по адресу "Город: Чапаевск, ул.
              <div className="danger">
                Гражданская 7
                <br />
                (териториия центрального рынка)"
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="more-text">
        {isHr ? <hr /> : null}
        <div className="time-worke">
          <div className="text-time danger">
            Здесь представлено время в которое мы работаем.
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
                Мы ждем вас в это время. Не забывайте, что именно в это время у
                вас есть шанс купить товары по самым низким ценам.
              </div>
            ) : null}
          </div>
        </div>
        {isHr ? <hr /> : null}
        {isHr ? (
          <div className="text-welcome">
            Мы ждем вас в это время. Не забывайте, что именно в это время у вас
            есть шанс купить товары по самым низким ценам.
          </div>
        ) : null}
        <div className="video-info">
          <video poster={logo} controls loop src={video}></video>
        </div>
      </div>
    </div>
  );
}
