import React from "react";
import "./HelloContentC/HelloContent.css";
import video from "/Users/admin/Desktop/pet-progects/electro-tovary/src/video/Video.mov";
export default function HelloContent() {
  return (
    <div className="main-hello-content">
      <div className="hello-animation">
        <p>
          Когда-то, в далекие времена, в нас ударила молния, и мы стали
          электро-магазином
        </p>

        <div className="video-hello-content">
          <video controls loop src={video}></video>
        </div>
      </div>
      <hr className="hello-content-hr" />
    </div>
  );
}