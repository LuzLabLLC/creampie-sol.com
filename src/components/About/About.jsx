import React from "react";
import "../../styles/About.css";
import CreampieFruit from "../../assets/creampie-fruit.png";
import CreampieStrawberry from "../../assets/cream_pie_strawberry.png";
import Strawberry from "../../assets/strawberry.webp";
import Girl from "../../assets/girl.png";
import Girls from "../../assets/girls.png";
import GirlsBand from "../../assets/girls_band.png";


function About() {
  return (
    <div
      className="aboutus_section"
      id="about"
      style={{ marginBottom: "150px" }}
    >
      <div className="gradient_red"></div>
      <div className="whatisuranus ">
        <h1 className="goldman_regular">Our Mission</h1>
        <div className="text_coin">
          <div className="text_strawberry" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box",
            flexWrap: "nowrap"
          }}>

            <img
              src={Strawberry}
              loading="lazy"
              className="memecoin"
              alt="Strawberry"
              style={{
                width: "20%",
                height: "auto",
                flexShrink: 1,
                maxHeight: "150px",
                minWidth: "80px",
                objectFit: "contain",
              }} />

            <img
              src={Girl}
              loading="lazy"
              className="memecoin"
              alt="CreampieFruit"
              style={{
                width: "40%",
                height: "auto",
                flexShrink: 1,
                minWidth: "200px",
                maxHeight: "350px",
                objectFit: "contain",
              }}
            />
            <img
              src={Strawberry}
              loading="lazy"
              className="memecoin"
              alt="Strawberry"
              style={{
                width: "20%",
                height: "auto",
                flexShrink: 1,
                maxHeight: "150px",

                minWidth: "80px",
                objectFit: "contain",
              }} />
          </div>
          <p>
            $CREAMPIE was created by <strong>Shitoshi Fartamoto</strong>, the
            legendary dev of Fartcoin! When you think about $CREAMPIE, do you
            think about that delicious cream pie we all devour or maybe
            something related to our creation and how life all begins like from
            a creampie? Either way, we are trying to revolutionize the meaning
            of creampie and have you make the decision on what it really means
            to you. Embrace the creation of life and even that sweet treat we
            all love and join the $CREAMPIE cult today!
          </p>
          <div className="girls" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            boxSizing: "border-box",
            flexWrap: "nowrap"
          }}>
            <img
              src={CreampieStrawberry}
              loading="lazy"
              className="memecoin"
              alt="CreampieStrawberry"
              style={{
                width: "20%",
                height: "auto",
                flexShrink: 1,
                minWidth: "80px",
                maxHeight: "150px",

                objectFit: "contain",
              }}
            />
            <img
              src={Girls}
              loading="lazy"
              className="memecoin"
              alt="Strawberry"
              style={{
                width: "40%",
                height: "auto",
                flexShrink: 1,
                minWidth: "200px",
                maxHeight: "350px",
                objectFit: "contain",
              }} />
            <img
              src={CreampieStrawberry}
              loading="lazy"
              className="memecoin"
              alt="CreampieStrawberry"
              style={{
                width: "20%",
                height: "auto",
                flexShrink: 1,
                maxHeight: "150px",

                minWidth: "80px",
                objectFit: "contain",
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
