import React from "react";
import "./HomeCStyle/Home.css";
import HelloContent from "./HelloContent";
import Slider from "./Slider";
export default function Home() {
  return (
    <div className="main-home">
      <div className="hello-content">
        <HelloContent />
      </div>
      <div className="sale-content">
        <div className="slider">
          <Slider />
        </div>
        <div className="text-sale">Описание распродаж</div>
      </div>
    </div>
  );
}
