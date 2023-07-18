import React from "react";
import "./HomeCStyle/Home.css";
import HelloContent from "./HelloContent";
import Slider from "./Slider";
export default function Home() {
  const [text, setText] = React.useState([]);
  return (
    <div className="main-home">
      <div className="hello-content">
        <HelloContent />
      </div>
      <div className="sale-content">
        <div className="slider">
          <Slider changeArrayText={(arrayText) => setText(arrayText)} />
        </div>
        <div className="main-text-sale">
          {text.length
            ? text.map((element) => <div className="text-sale">{element}</div>)
            : null}
        </div>
      </div>
    </div>
  );
}
