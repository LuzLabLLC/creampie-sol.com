import React, { useState } from "react"
import "../../styles/Home.css";
import CreampieText from "../../assets/creampie-text-pink.png";
import { useGlitch } from "react-powerglitch";
import Typewriter from "typewriter-effect";
import Girl from "../../assets/girl8.png";
import Strawberry from "../../assets/cream_pie_strawberry.png";


function Home() {
  const glitch = useGlitch({
    playMode: "always",
    hideOverflow: false,
    timing: {
      duration: 5000,
      iterations: 250,
    },
  });

  const [showImage, setShowImage] = useState(false);
  return (
    <section className="hero_section" id="home">
      <div className="heading">
        <div style={{ opacity: "100%" }}>

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
                  '<div>Atlas, Creampie Coin. (a)rtificial (i)nsemination. <span style="background:rgb(51, 2, 50); color: white;">After all, there is no fart or butthole without a creampie.</span></div>'
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
        <div
        
        className="logo_box"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "10px",
          width: "100%",              
          boxSizing: "border-box"      
        }}
      >

<img
          loading="lazy"
          src={Strawberry}
          alt="Logo 2"
          width="100"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <img
          loading="lazy"
          src={Girl}
          alt="Logo 2"
          width="200"
          style={{ maxWidth: "100%", height: "auto" }}
        />
 <img
          loading="lazy"
          src={Strawberry}
          alt="Logo 2"
          width="100"
          style={{ maxWidth: "100%", height: "auto" }}
        />


      </div>
              </div>


   </section>
  );
}

export default Home;
