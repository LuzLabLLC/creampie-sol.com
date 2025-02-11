import React from "react";
import "../../styles/Roadmap.css";
import Girl11 from "../../assets/girl11.png";
import Girl from "../../assets/girl8.png";
import Strawberry from "../../assets/strawberry.webp";


function CA() {
  return (
    <div className="roadmap_section" style={{ marginBottom: "150px" }}>
      <h1 className=" goldman_regular">$CREAMPIE</h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            margin: "20px 0",
          }}
        >
          <img
            src={Girl11}
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
            src={Strawberry}
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

        </div>
      </div>  <h3 style={{ marginTop: "4rem", marginBottom: "20px" }}>
        Contract Address
      </h3>

      <div
        style={{
          padding: "20px 15px",
          background: "white",
          width: "min-content",
          margin: "0 auto",
          color: "black",
          borderRadius: "10px",
          maxWidth: "100%",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        <p>28BxCgNT6L1zfdqYmsiSQGFUHrzLzGmNbNzji3yxpump</p>
      </div>
    </div>
  );
}

export default CA;
