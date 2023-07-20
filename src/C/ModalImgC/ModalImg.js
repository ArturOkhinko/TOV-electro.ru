import React from "react";
import "./ModalImg.Style/ModalImg.css";
export default function ModalImg({ img, removeImg }) {
  return (
    <div className="main-modal-img" onClick={removeImg}>
      <img src={img} />
    </div>
  );
}
