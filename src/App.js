import "./SASS/AppC/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./C/HomeC/Home";
import NavBar from "./C/NavBarC/NavBar";
import InfoLine from "./C/InfoLineC/InfoLine";
import Footer from "./C/FooterC/Footer";
import Info from "./C/InfoC/Info";
import Catalog from "./C/CatalogC/Catalog";

function App() {
  let widthWindow = 0;

  const [isNavBar, setIsNavBar] = React.useState(true);
  function callBackSetIsNavBar(bool) {
    setIsNavBar(bool);
  }
  React.useEffect(() => {
    widthWindow = window.innerWidth;
    widthWindow > 800 ? setIsNavBar(true) : setIsNavBar(false);
  }, []);
  window.addEventListener("resize", () => {
    widthWindow = window.innerWidth;
    widthWindow > 800 ? setIsNavBar(true) : setIsNavBar(false);
  });
  return (
    <div className="main">
      <div className="info-line">
        <InfoLine isNavBar={callBackSetIsNavBar} />
      </div>
      {isNavBar ? (
        <div className="nav-bar">
          <NavBar />
        </div>
      ) : null}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
