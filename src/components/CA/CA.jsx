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
            width: "100%",
            boxSizing: "border-box",
            flexWrap: "nowrap"
          }}
        >
          <img
            src={Girl11}
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
