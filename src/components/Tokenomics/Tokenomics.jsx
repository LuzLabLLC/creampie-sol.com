import React from "react";
import "../../styles/Roadmap.css";
import Girl from "../../assets/girl1.png";
import CreampieFruit from "../../assets/creampie-fruit.png";

function Tokenomics() {
  return (
    <div className="roadmap_section" style={{ marginBottom: "150px" }}>
      <div className="gradient_red"></div>

      <h1 className="goldman_regular">Tokenomics</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          boxSizing: "border-box",
          flexWrap: "nowrap"
        }}
      >
        <img
          src={CreampieFruit}
          loading="lazy"
          className="memecoin"
          alt="CreampieFruit"
          style={{
            width: "20%",
            height: "auto",
            flexShrink: 1,
            maxHeight: "150px",
            minWidth: "80px",
            objectFit: "contain",
          }}
        />

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
          src={CreampieFruit}
          loading="lazy"
          className="memecoin"
          alt="CreampieFruit"
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

      <h2>Supply: 1B</h2>
      <h2>Mintable: No</h2>
      <h2>Taxes: 0% sell, 0% buy, 0% transfer</h2>
      <h2>Freezable: NO</h2>
    </div>

  );
}

export default Tokenomics;
