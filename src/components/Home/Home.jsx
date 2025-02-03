import React from "react";
import "../../styles/Home.css";
import CreampieText from "../../assets/creampie-text.png";
import { useGlitch } from "react-powerglitch";
import Typewriter from "typewriter-effect";

function Home() {
  const glitch = useGlitch({
    playMode: "always",
    hideOverflow: false,
    timing: {
      duration: 5000,
      iterations: 250,
    },
  });

  return (
    <section className="hero_section" id="home">
      <div className="heading">
        <div style={{ opacity: "75%" }}>
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              cursor: "",
              delay: 20,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("<copus-tutor")
                .pauseFor(500)
                .typeString(
                  '<div>Atlas, Creampie Coin. (a)rtificial (i)nsemination. <span style="background: #95edf0; color: black;">After all, there is no fart or butthole without a creampie.</span></div>'
                )
                .pauseFor(500)
                .typeString("<div>...</div>")
                .start();
            }}
          />
        </div>
        <img
          src={CreampieText}
          alt="creampie-text"
          ref={glitch.ref}
          className="creampie-text glitch"
        />
        <div style={{ opacity: "75%" }}>
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              cursor: "",
              delay: 20,
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(5300)
                .typeString("<div>...</div>")
                .pauseFor(500)
                .typeString("<div>Initializing token (anal)lysis...</div>")
                .pauseFor(500)
                .typeString(
                  "<div>Brace yourself for a cream of the crop innovation.</div>"
                )
                .start();
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "75px",
          }}
        >
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <span className="text" style={{ marginLeft: 5 }}>
            Scroll down
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;
