import React from "react";
import "../../styles/Roadmap.css";
import Girl1 from "../../assets/girl1.png";

function Tokenomics() {
  return (
    <div className="roadmap_section" style={{ marginBottom: "150px" }}>
      <h1 className=" goldman_regular">Tokenomics</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={Girl1}
      loading="lazy"
      className="memecoin"
      alt="CreampieFruit"
      style={{
        margin: "15px",
        width: "200px",       // Adjust image size as needed
        height: "auto",
        alignSelf: "center",  // This works if Flexbox is used
      }}
    />
  </div>
      <h2>Supply: 1B</h2>
      <h2>Mintable: No</h2>
      <h2>Taxes: 0% sell 0% buy 0% transfer</h2>
      <h2>Freezable: NO</h2>
    </div>
  );
}

export default Tokenomics;
