import React from "react";
import Spin from "../Spin/Spin";
import "./SliderInfo.Style/SliderInfo.css";
import { urlToInfoSlider } from "../../urlToGoogleDisc";
export default function SliderInfo({ changeImg }) {
  const [arrayImg, setArrayImg] = React.useState([]);
  const [positionImg, setPositionImg] = React.useState(0);
  const [data, setData] = React.useState();

  const changeGoogleSheetsUrl = (url) => {
    const arrayUrl = [...url];
    arrayUrl.splice(-10);
    const changeUrl = arrayUrl.join("") + "gviz/tq?";
    return changeUrl;
  };

  const changedUrlGoogleSheets = changeGoogleSheetsUrl(urlToInfoSlider);

  const fetchGoogleDisc = function (url) {
    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        setData(JSON.parse(rep.substring(47).slice(0, -2)));
      });
  };

  function queryArrayColumn(JSON, col) {
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
      const arrayValue = queryArrayColumn(data, 1);
      setArrayImg(arrayValue);
    }
  }, [data]);

  window.addEventListener("resize", () => {
    setPositionImg(0);
  });

  function hendleNext() {
    const widthWindow = window.innerWidth;
    console.log("НЕКСТ");
    let posImg = -500;
    if (widthWindow <= 1300) {
      posImg = -500;
    }
    if (widthWindow <= 1050) {
      posImg = -500;
    }
    if (widthWindow <= 900) {
      posImg = -400;
    }
    if (widthWindow <= 500) {
      posImg = -360;
    }
    if (widthWindow <= 400) {
      posImg = -340;
    }
    if (widthWindow <= 340) {
      posImg = -280;
    }
    console.log(posImg);
    let stop = posImg * 2;
    setPositionImg((position) => {
      return Math.max(position + posImg, stop);
    });
    const position = React.memo(SliderInfo, positionImg);
    console.log(position);
    if (position.compare === stop) {
      setPositionImg(0);
    }
  }

  function hendlePrev() {
    const widthWindow = window.innerWidth;
    console.log("ПРЕВ");
    let posImg = 500;
    if (widthWindow <= 1300) {
      posImg = 500;
    }
    if (widthWindow <= 1050) {
      posImg = 500;
    }
    if (widthWindow <= 900) {
      posImg = 400;
    }
    if (widthWindow <= 500) {
      posImg = 360;
    }
    if (widthWindow <= 400) {
      posImg = 340;
    }
    if (widthWindow <= 340) {
      posImg = 280;
    }
    console.log(posImg);
    setPositionImg((position) => {
      return Math.min(position + posImg, 0);
    });
  }

  return (
    <div className="info-slider-main">
      <button className="prev" onClick={hendlePrev}>
        ⇦
      </button>
      <div className="info-slider-window">
        <div
          className="info-allImg"
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
            <div className="spin-slider-info">
              <Spin />
            </div>
          )}
        </div>
      </div>
      <button className="next" onClick={hendleNext}>
        ⇨
      </button>
    </div>
  );
}
