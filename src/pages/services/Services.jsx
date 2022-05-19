import React from "react";
import { items } from "../../mock/services";
import "./services.css";

function Services() {
  return (
    <>
      <div className="service_page" id="services">
        <div className="box">
          <div className="title">
            <h1 style={{ fontSize: "40px" }}>SERVICES</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="boxes">
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <div className="box">
                    <div className="icon">
                      <div className="border_icon">{item.icon}</div>
                    </div>
                    <div className="text">
                      <div className="title">
                        <h1>{item.title}</h1>
                      </div>
                      <div className="lorem">
                        <p>{item.text}</p>
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
