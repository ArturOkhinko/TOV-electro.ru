import React from "react";
import "./SliderC/Slider.css";
import Spin from "../Spin/Spin";

export default function Slider() {
  const [arrayImg, setArrayImg] = React.useState([]);
  const [positionImg, setPositionImg] = React.useState(0);
  const [data, setData] = React.useState();
  const changeGoogleSheetsUrl = (url) => {
    const arrayUrl = [...url];
    arrayUrl.splice(-10);
    const changeUrl = arrayUrl.join("") + "gviz/tq?";
    return changeUrl;
  };
  const urlSheets =
    "https://docs.google.com/spreadsheets/d/1qUbUFA1v4UYMTVL1SFwCH-xaTy4FlhlEkmgpGeUxgvc/edit#gid=0";
  const changedUrlGoogleSheets = changeGoogleSheetsUrl(urlSheets);

  const fetchGoogleDisc = function (url) {
    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        setData(JSON.parse(rep.substring(47).slice(0, -2)));
      });
  };

  function queryArrayColumnsValue(JSON, row) {
    const arrayRows = JSON.table.rows;
    const arrayColumnsWidthObj = arrayRows[row - 1].c;
    const arrayColumnsValue = [];
    arrayColumnsWidthObj.forEach((element) => {
      arrayColumnsValue.push(element.v);
    });
    return arrayColumnsValue;
  }

  function changeGoogleDiscUrl(url) {
    const urlPhoto = url;
    const sliceUrl = urlPhoto.slice(32, -20);
    const googleDriveLink =
      "https://drive.google.com/uc?export=view&id=" + sliceUrl;
    return googleDriveLink;
  }
  React.useEffect(() => {
    fetchGoogleDisc(changedUrlGoogleSheets);
  }, []);

  React.useEffect(() => {
    if (typeof data === "object") {
      const arrayValue = queryArrayColumnsValue(data, 1);
      const changeArrayValue = arrayValue.map((element) => {
        return changeGoogleDiscUrl(element);
      });
      setArrayImg(changeArrayValue);
    }
  }, [data]);

  window.addEventListener("resize", () => {
    setPositionImg(0);
  });
  function hendleNext() {
    const widthWindow = window.innerWidth;
    console.log(widthWindow);
    let posImg = -700;
    if (widthWindow < 1000) {
      posImg = -500;
    }

    if (widthWindow < 770) {
      posImg = -450;
    }
    if (widthWindow < 550) {
      posImg = -280;
    }
    if (widthWindow < 400) {
      posImg = -250;
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
    if (widthWindow < 1000) {
      posImg = 500;
    }

    if (widthWindow < 770) {
      posImg = 450;
    }
    if (widthWindow < 550) {
      posImg = 280;
    }
    if (widthWindow < 400) {
      posImg = 250;
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
            arrayImg.map((element) => <img src={element} />)
          ) : (
            <div className="slider-spin-home">
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
