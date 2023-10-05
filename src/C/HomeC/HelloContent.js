import React from "react";
import "./HelloContentC/HelloContent.css";
import lightLogo from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/LightLogo.jpeg";
import lightLogoMin from "/Users/admin/Desktop/pet-progects/electro-tovary/src/image/LightLogoMin.jpeg";
import SaleTovar from "./SaleTovar";
import ModalImg from "../ModalImgC/ModalImg";
export default React.memo(function HelloContent() {
  const [img, setImg] = React.useState();
  const [imgModal, setImgModal] = React.useState();
  let seeWindow;
  const changeSeeWindow = () => {
    seeWindow = window.innerWidth;
    if (seeWindow <= 900) {
      setImg(lightLogoMin);
    }
    if (seeWindow > 900) {
      setImg(lightLogo);
    }
  };
  React.useEffect(() => {
    changeSeeWindow();
  }, []);
  window.addEventListener("resize", changeSeeWindow);
  const changeImgModal = React.useCallback((img) => {
    console.log("ЧЕНДЖ ИМЕДЖ");
    setImgModal(img);
  }, []);
  const removeImgModal = () => {
    setImgModal("");
  };
  return (
    <div className="main-hello-content">
      <div className="madal-img-hello-content">
        {imgModal ? (
          <ModalImg
            img={imgModal}
            removeImg={removeImgModal}
            contentOption=""
          />
        ) : null}
      </div>
      <div className="main-line-logo">
        <img src={img} />
      </div>
      <div className="sale-tovar-hello-content">
        <SaleTovar changeImgModal={changeImgModal} />
      </div>
    </div>
  );
});
