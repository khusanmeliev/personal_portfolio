import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <div className="about_page" id="about">
        <div className="box">
          <div className="row">
            <div className="left">
              <div className="greeting">
                <div className="img">
                  <img src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonial-2.jpg" />
                </div>
                <div className="lists">
                  <ul>
                    <li>
                      <span>Name:</span>
                      Khusan Meliev
                    </li>
                    <li>
                      <span>Profile:</span>
                      Full stack developer
                    </li>
                    <li>
                      <span>Email:</span>
                      khusanmeliev@gmail.com
                    </li>
                    <li>
                      <span>Phone:</span>
                      +998 xx xxx xx xx
                    </li>
                  </ul>
                </div>
              </div>

              <div class="skill-bars">
                <div class="bar">
                  <div class="info">
                    <span>HTML</span>
                  </div>
                  <div class="progress-line html">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>CSS</span>
                  </div>
                  <div class="progress-line css">
                    <span></span>
                  </div>
                </div>

                <div class="bar">
                  <div class="info">
                    <span>Javascript</span>
                  </div>
                  <div class="progress-line javascript">
                    <span></span>
                  </div>
                </div>
                <div class="bar">
                  <div class="info">
                    <span>React</span>
                  </div>
                  <div class="progress-line react">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="about_me">
                <div className="title">
                  <h1>
                    {" "}
                    <span
                      style={{
                        borderBottom: "2px solid #0078ff",
                      }}
                    >
                      About
                    </span>{" "}
                    me
                  </h1>
                </div>
                <div className="text">
                  <div className="texts">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, explicabo magni eligendi, delectus fugit odio sed
                    perspiciatis mollitia error adipisci ad qui ipsa, magnam
                    corporis necessitatibus dignissimos aliquid rem sit. lorem
                  </div>
                  <div className="texts">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, explicabo magni eligendi, delectus fugit odio sed
                    perspiciatis mollitia error adipisci ad qui ipsa, magnam
                    corporis necessitatibus dignissimos aliquid rem sit. lorem
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
