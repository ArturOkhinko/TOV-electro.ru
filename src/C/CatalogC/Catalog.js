import React from "react";
import "./Catalog.Style/Catalog.css";
import ElectroTovary from "./ElectroTovary";
import Select from "../SelectC/Select";
import Spin from "../Spin/Spin";
export default function Catalog() {
  const [data, setData] = React.useState();
  const [propsArray, setPropsArray] = React.useState([]);
  const [selectedSort, setSelectedSort] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  let arrayValue = [];
  const changeGoogleSheetsUrl = (url) => {
    const arrayUrl = [...url];
    arrayUrl.splice(-10);
    const changeUrl = arrayUrl.join("") + "gviz/tq?";
    return changeUrl;
  };
  const urlSheets =
    "https://docs.google.com/spreadsheets/d/1qpYiqNALij6MVcUWUmdQnIGBWDXbZkMZKphnHE7lvfg/edit#gid=0";
  const changedUrlSheets = changeGoogleSheetsUrl(urlSheets);
  const fetchGoogleSheets = function (url) {
    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        setData(JSON.parse(rep.substring(47).slice(0, -2)));
      });
  };
  React.useEffect(() => {
    fetchGoogleSheets(changedUrlSheets);
  }, []);

  function changeGoogleDiscUrl(url) {
    const urlPhoto = url;
    const sliceUrl = urlPhoto.slice(32, 65);
    const googleDriveLink =
      "https://drive.google.com/uc?export=view&id=" + sliceUrl;
    return googleDriveLink;
  }

  function queryArrayColumnsValue(JSON, row) {
    const arrayRows = JSON.table.rows;
    const arrayColumnsWidthObj = arrayRows[row - 1].c;
    const arrayColumnsValue = [];
    arrayColumnsWidthObj.forEach((element) => {
      if (element === null || element.v === 0) {
        arrayColumnsValue.push(null);
        return;
      }
      arrayColumnsValue.push(element.v);
    });
    return arrayColumnsValue;
  }

  const sortedProjects = React.useMemo(() => {
    console.log("ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПРОДЖЕКТС");
    if (selectedSort === "down") {
      return [...propsArray].sort((a, b) => {
        if (a.sale && b.sale === null) {
          return b.prise - a.sale;
        }
        if (b.sale && a.sale === null) {
          return b.sale - a.prise;
        }
        if (b.sale && a.sale) {
          return b.sale - a.sale;
        }
        return b.prise - a.prise;
      });
    }
    if (selectedSort === "up") {
      return [...propsArray].sort((a, b) => {
        if (a.sale && b.sale === null) {
          return a.prise - b.sale;
        }
        if (b.sale && a.sale === null) {
          return a.sale - b.prise;
        }
        if (b.sale && a.sale) {
          return a.sale - b.sale;
        }
        return a.prise - b.prise;
      });
    }
    return propsArray;
  }, [selectedSort, data, propsArray]);

  function sortPropsArray(sort) {
    setSelectedSort(sort);
  }
  const searchAndSortedProjects = React.useMemo(() => {
    if (sortedProjects[0]) {
      return sortedProjects.filter((element) =>
        element.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (typeof data === "object") {
      console.log(data);
      const dataRowsArray = data.table.rows;
      let index = 1;
      while (index <= dataRowsArray.length) {
        arrayValue.push(queryArrayColumnsValue(data, index));
        console.log(arrayValue);
        index++;
      }

      arrayValue = arrayValue.map((element) => {
        let [, ...array] = [...element, changeGoogleDiscUrl(element[0])];
        console.log(array);
        return array;
      });
      arrayValue.forEach((element, index) => {
        const propsObj = {};
        propsObj.id = index;
        propsObj.name = element[0];
        propsObj.text = element[1];
        propsObj.prise = element[2];
        propsObj.img = element[5];
        if (element[3]) {
          propsObj.sale = element[3];
        }
        if (element[4]) {
          const sale = element[2] - (element[2] / 100) * element[4];
          propsObj.sale = sale;
        }
        if (element[3] === false || element[4] === false) {
          propsObj.sale = null;
        }
        if (propsArray.length < arrayValue.length) {
          propsArray.push(propsObj);
        }
        setPropsArray(propsArray);
      });
    }

    return propsArray;
  }, [searchQuery, sortedProjects, data]);

  return (
    <div className="main-catalog">
      <div className="line-catalog">
        <div className="search">
          <div className="select-catalog">
            <Select
              defaultValue="Сортировка по цене"
              value={selectedSort}
              sort={sortPropsArray}
              options={[
                { value: "up", sort: "сначала самые дешевые" },
                { value: "down", sort: "сначала самые дорогие" },
              ]}
            />
          </div>
          <div className="input">
            <input
              placeholder="🔎  Какой товар вы хотите найти?"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="text-catalog">
          Добро пожаловать в каталог. Для вас здесь предусмотрены такие
          возможности как сортировка по цене и поиск товаров по названию. Здесь
          скоро появятся все товары, которые есть у нас в продаже. Пока что
          ознакомьтесь с ассортиментом представленном на сайте.
        </div>
      </div>
      <div className="electro-tovary">
        {searchAndSortedProjects.length ? (
          <ElectroTovary projects={searchAndSortedProjects} />
        ) : (
          <div className="spin">
            <Spin time="10000" message="Таких товаров не найдено" />
          </div>
        )}
      </div>
    </div>
  );
}
