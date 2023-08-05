import React from "react";
import "./SaleTovar.Style/SaleTovar.css";
import Spin from "../Spin/Spin";
import { urlToTopSaleLine } from "../../urlToGoogleDisc";
export default React.memo(function SaleTovar({ changeImgModal }) {
  const [data, setData] = React.useState();
  const [arrayImg, setArrayImg] = React.useState([]);
  const divRef = React.useRef();
  const changeGoogleSheetsUrl = (url) => {
    const arrayUrl = [...url];
    arrayUrl.splice(-10);
    const changeUrl = arrayUrl.join("") + "gviz/tq?";
    return changeUrl;
  };
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
  function changeGoogleDiscUrl(url) {
    const urlPhoto = url;
    const sliceUrl = urlPhoto.slice(32, 65);
    const googleDriveLink =
      "https://drive.google.com/uc?export=view&id=" + sliceUrl;
    return googleDriveLink;
  }
  React.useEffect(() => {
    const changeUrl = changeGoogleSheetsUrl(urlToTopSaleLine);
    setData(fetchGoogleDisc(changeUrl));
  }, []);

  React.useEffect(() => {
    if (typeof data === "object") {
      const arrayValue = queryArrayColumn(data, 1);
      const changeArrayValue = arrayValue.map((img) =>
        changeGoogleDiscUrl(img)
      );
      setArrayImg(changeArrayValue);
    }
  }, [data]);
  return (
    <div className="main-sale-tovar">
      {arrayImg.length > 0
        ? arrayImg.map((img, index) => (
            <div className="sale-tovar" key={index}>
              <img src={img} onClick={() => changeImgModal(img)} />
            </div>
          ))
        : null}
    </div>
  );
});
