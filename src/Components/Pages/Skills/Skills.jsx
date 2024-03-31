import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="container">
      <div className="small_box_content">
        {" "}
        <div className="small_box">
          <i className="fa-solid fa-user"></i> Skills{" "}
        </div>{" "}
      </div>
      <div className="skills_container" id="skills">
        <div className="skills_container_inner">
          <div className="skills">
            <div className="frontend">
              <div className="frontend_title">Frontend</div>
              <div className="frontend_tech">
                <p>- HTML</p>
                <p>- CSS</p>
                <p>- JAVASCRIPT</p>
                <p>- REACT JS</p>
                <p>- ANGULAR JS</p>
                <p>- BOOTSTRAP</p>
                <p>- TAILWIND CSS</p>
                <p>- STYLED COMPONENTS</p>
              </div>
            </div>
            <div className="backend">
              {" "}
              <div className="backend_title">Backend</div>
              <div className="backend_tech">
                <p>- EXPRESS JS</p>
                <p>- NODE JS</p>
                <p>- MYSQL</p>
                <p>- MONGO DB</p>
              </div>
            </div>
            <div className="tools last_box">
              {" "}
              <div className="tools_title">Tools</div>
              <div className="tools_tech">
                <p>- VS CODE</p>
                <p>- GIT</p>
                <p>- GITHUB</p>
                <p>- POSTMAN </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
