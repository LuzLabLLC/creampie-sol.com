import React from "react";
import "../../styles/Roadmap.css";
import Girl from "../../assets/girl1.png";
import CreampieFruit from "../../assets/creampie-fruit.png";
import CreampieStrawberry from "../../assets/cream_pie_strawberry.png";
import Strawberry from "../../assets/strawberry.webp";

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
      gap: "20px",         // Расстояние между изображениями
      flexWrap: "wrap",    // Перенос изображений на новую строку при нехватке места
      margin: "20px 0",
    }}
  >
    <img
      src={CreampieFruit}
      loading="lazy"
      className="memecoin"
      alt="CreampieFruit"
      style={{
        margin: "10px",
        width: "200px",
        height: "auto",
      }}
    />

    <img
      src={Girl}
      loading="lazy"
      className="memecoin"
      alt="CreampieFruit"
      style={{
        margin: "10px",
        width: "200px",
        height: "auto",
      }}
    />

    <img
      src={CreampieFruit}
      loading="lazy"
      className="memecoin"
      alt="CreampieFruit"
      style={{
        margin: "10px",
        width: "200px",
        height: "auto",
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
