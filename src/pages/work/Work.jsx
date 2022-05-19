import React from "react";
import { projects } from "../../mock/portfolio";
import "./work.css";

function Services() {
  return (
    <>
      <div className="portfolio_page" id="work">
        <div className="box">
          <div className="title">
            <h1 style={{ fontSize: "40px" }}>PORTFOLIO</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="boxes">
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <div className="ditty_box">
                    <div className="img">
                      <img src={project.img} alt="" />
                    </div>
                    <div className="text">
                      <div className="left">
                        <label style={{ fontSize: "20px", fontWeight: "500" }}>
                          {project.title}
                        </label>
                        {project.text}
                      </div>
                      <div className="right">
                        <div className="icon">
                          <a href={project.link}>{project.icon}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
