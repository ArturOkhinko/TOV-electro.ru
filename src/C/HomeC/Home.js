import React from "react";
import "./HomeCStyle/Home.css";
import HelloContent from "./HelloContent";
import Slider from "./Slider";
import ModalImg from "../ModalImgC/ModalImg";
export default function Home() {
  const [img, setImg] = React.useState();
  const removeImg = () => {
    setImg("");
  };
  const changeImg = React.useCallback((img) => {
    setImg(img);
  }, []);

  return (
    <div className="main-home">
      {img ? (
        <div className="modalImg">
          <ModalImg img={img} removeImg={removeImg} />
        </div>
      ) : null}
      <div className="hello-content">
        <HelloContent />
      </div>
      <div className="sale-content">
        <div className="slider">
          <Slider changeImg={changeImg} />
        </div>
        <div className="main-text-sale">
          <div className="text-sale">
            Магазин: «ЭЛЕКТРОТОВАРЫ⚡️». ✔️Всегда в наличии материал для
            электромонтажных работ: -кабельно-проводниковая продукция;
            -модульное оборудование; -изделия для прокладки и монтажа кабеля;
            -щитовое оборудование; -электроустановочные изделия; -камеры wi-fi;
            -элементы питания; -крепёж; -монтажный инструмент,
            электроинструмент; -источники света и многое другое.{" "}
          </div>
          <div className="text-sale">
            Г. Чапаевск, ул. Гражданская, 7 (территория центрального рынка).
            ⌚️График работы: ПН-ПТ: 9:00-17:00. СБ-ВС: 9:00-14:00. 💵Наличный и
            💳безналичный расчёт.{" "}
          </div>
          <div className="text-sale">
            А так же: ✅Подбор и монтаж оборудования. ✅Выездное обслуживание.
            ✅Сборка электрощитового оборудования (ГРЩ, ВРУ, АВР, ЩР, щитов
            управления).
          </div>
        </div>
      </div>
    </div>
  );
}
