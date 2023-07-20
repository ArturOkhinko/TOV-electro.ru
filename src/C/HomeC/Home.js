import React from "react";
import "./HomeCStyle/Home.css";
import HelloContent from "./HelloContent";
import Slider from "./Slider";
import ModalImg from "../ModalImgC/ModalImg";
export default function Home() {
  const [text, setText] = React.useState([]);
  const [img, setImg] = React.useState();
  const removeImg = () => {
    setImg("");
  };
  const changeArrayText = React.useCallback((arrayText) => {
    setText(arrayText);
  }, []);
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
          <Slider changeArrayText={changeArrayText} changeImg={changeImg} />
        </div>
        <div className="main-text-sale">
          {text.length
            ? text.map((element, index) => (
                <div key={index} className="text-sale">
                  {element}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
