import React from "react";
import "./SliderC/Slider.css";
import Spin from "../Spin/Spin";
import { urlToSaleSlider } from "../../urlToGoogleDisc";

export default React.memo(function Slider({ changeImg }) {
  const [arrayImg, setArrayImg] = React.useState([]);
  const [positionImg, setPositionImg] = React.useState(0);
  const [data, setData] = React.useState();
  const changeGoogleSheetsUrl = (url) => {
    const arrayUrl = [...url];
    arrayUrl.splice(-10);
    const changeUrl = arrayUrl.join("") + "gviz/tq?";
    return changeUrl;
  };
  const changedUrlGoogleSheets = changeGoogleSheetsUrl(urlToSaleSlider);
  const fetchGoogleDisc = function (url) {
    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        setData(JSON.parse(rep.substring(47).slice(0, -2)));
      });
  };

  function queryArrayColumnsValue(JSON, col) {
    const arrayRows = JSON.table.rows;
    const arrayColumns = [];
    arrayRows.forEach((element) => {
      arrayColumns.push(element.c[col - 1].v);
    });
    return arrayColumns;
  }

  React.useEffect(() => {
    fetchGoogleDisc(changedUrlGoogleSheets);
  }, []);

  React.useEffect(() => {
    if (typeof data === "object") {
      const arrayValue = queryArrayColumnsValue(data, 1);
      setArrayImg(arrayValue);
    }
  }, [data]);

  window.addEventListener("resize", () => {
    setPositionImg(0);
  });
  function hendleNext() {
    const widthWindow = window.innerWidth;
    console.log(widthWindow);
    let posImg = -700;
    if (widthWindow <= 1000) {
      posImg = -500;
    }

    if (widthWindow <= 770) {
      posImg = -450;
    }
    if (widthWindow <= 550) {
      posImg = -400;
    }
    if (widthWindow <= 410) {
      posImg = -340;
    }
    if (widthWindow <= 345) {
      posImg = -280;
    }
    let stop = posImg * 2;
    setPositionImg((position) => {
      return Math.max(position + posImg, stop);
    });
    const position = React.memo(Slider, positionImg);
    console.log(position);
    if (position.compare === stop) {
      setPositionImg(0);
    }
  }

  function hendlePrev() {
    const widthWindow = window.innerWidth;
    console.log(widthWindow);
    let posImg = 700;
    if (widthWindow <= 1000) {
      posImg = 500;
    }

    if (widthWindow <= 770) {
      posImg = 450;
    }
    if (widthWindow <= 550) {
      posImg = 400;
    }
    if (widthWindow <= 410) {
      posImg = 340;
    }
    if (widthWindow <= 345) {
      posImg = 280;
    }
    setPositionImg((position) => {
      return Math.min(position + posImg, 0);
    });
  }
  return (
    <div className="slider-main">
      <button className="prev" onClick={hendlePrev}>
        ⇦
      </button>
      <div className="slider-window">
        <div
          className="allImg"
          style={{
            transform: `translateX(${positionImg}px)`,
          }}
        >
          {arrayImg.length > 0 ? (
            arrayImg.map((element, index) => (
              <img
                key={index}
                src={element}
                onClick={() => changeImg(element)}
              />
            ))
          ) : (
            <div className="slider-spin-home">
              <Spin time="24000" message="Проблемы с интернетом" />
            </div>
          )}
        </div>
      </div>
      <button className="next" onClick={hendleNext}>
        ⇨
      </button>
    </div>
  );
});
