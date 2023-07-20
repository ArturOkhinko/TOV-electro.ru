import React from "react";
import "./ElectroTovary.Style/ElectroTovary.css";
export default React.memo(function ElectroTovary({ projects, changeImg }) {
  return (
    <div className="main-tovary">
      {projects
        ? projects.map((project) => (
            <div key={project.id} className="main-tovar">
              <div className="img-tovar">
                <img src={project.img} onClick={() => changeImg(project.img)} />
              </div>

              <div className="header-tovar">{project.name}</div>
              <div className="text-tovar">{project.text}</div>
              <div className="main-prise">
                {project.sale ? (
                  <>
                    <div className="sale-catalog">
                      ₽ {project.sale}
                      <p>✓</p>
                    </div>
                    <div className="prise">
                      <s>₽ {project.prise}</s>
                    </div>
                  </>
                ) : (
                  <div className="prise">
                    <p>₽ {project.prise}</p>
                  </div>
                )}
              </div>
            </div>
          ))
        : null}
    </div>
  );
});
