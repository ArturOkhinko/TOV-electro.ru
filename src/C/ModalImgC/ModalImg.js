import React from "react";
import "./ModalImg.Style/ModalImg.css";
import { Link } from "react-router-dom";
export default function ModalImg({ img, removeImg, contentOption }) {
  return (
    <div className="main-modal-img" onClick={removeImg}>
      <img src={img} />
      {contentOption ? (
        <Link className="link-modal-img" to="/catalog">
          Перейдите в каталог, чтобы увидеть еще больше товаров которые есть у
          нас в продаже
        </Link>
      ) : null}
    </div>
  );
}
