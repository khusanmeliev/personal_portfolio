import React, { useState } from "react";
import { icons } from "../../mock/icons";
import { addresses } from "../../mock/contact";
import "./contact.css";

function Contact() {
  const initialValues = { username: "", email: "", subject: "", message: "" };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="contact_page" id="contact">
        <div className="large">
          <div className="box">
            <div className="left">
              <div className="title">
                <h1>
                  <span>Send M</span>essage Us
                </h1>
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  name="username"
                  type="text"
                  placeholder="Your Name"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                  minLength={3}
                  maxLength={12}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="btn">
                  <button>Send Message</button>
                </div>
              </form>
            </div>
            <div className="right">
              <div className="row">
                <div className="title">
                  <h1>
                    <span>Get In</span> Touch
                  </h1>
                </div>
                <div className="row__box">
                  <div className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis dolorum dolorem soluta quidem expedita aperiam
                    aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse
                    laboriosam ratione nobis mollitia inventore?
                  </div>
                  <div className="address">
                    <ul>
                      {addresses.map((address) => (
                        <li key={address.id}>
                          <label style={{ color: "#007aff" }}>
                            {address.icon}
                          </label>
                          <span style={{ margin: "10px" }}>{address.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="internet">
                    <ul>
                      {icons.map((inter) => (
                        <li key={inter.id}>
                          <li>
                            <a
                              href={inter.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {inter.icon}
                            </a>
                          </li>
                        </li>
                      ))}
                    </ul>
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

export default Contact;
