import React from "react";
import "./ElectroTovary.Style/ElectroTovary.css";
import Spin from "../Spin/Spin";
export default function ElectroTovary({ projects }) {
  return (
    <div className="main-tovary">
      {projects
        ? projects.map((project) => (
            <div key={project.id} className="tovar">
              <div className="img-tovar">
                <img src={project.img} />
              </div>
              <div className="info-tovar">
                <div className="header-tovar">{project.name}</div>
                <div className="text-tovar">{project.text}</div>
                <div className="prise">{project.prise}</div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
