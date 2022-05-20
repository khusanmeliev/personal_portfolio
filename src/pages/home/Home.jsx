import React from "react";
import "./home.css";
import ReactTypingEffect from "react-typing-effect";

function Home() {
  return (
    <div className="home_page" id="home">
      <div className="box">
        <div className="name">I am Khusan Meliev</div>

        <ReactTypingEffect
          text={["Developer.", "Freelancer"]}
          cursorRenderer={(cursor) => (
            <h1
              style={{
                color: "white",
              }}
            >
              {cursor}
            </h1>
          )}
          displayTextRenderer={(text, i) => {
            return (
              <h1>
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={
                        i % 2 === 0 ? { color: "white" } : { color: "white" }
                      }
                    >
                      {char}
                    </span>
                  );
                })}
              </h1>
            );
          }}
        />
      </div>
    </div>
  );
}

export default Home;
