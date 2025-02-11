import React from "react";
import "../../styles/Roadmap.css";
import Girl5 from "../../assets/girl6.png";


function CA() {
  return (
    <div className="roadmap_section" style={{ marginBottom: "150px" }}>
      <h1 className=" goldman_regular">$CREAMPIE</h1>
    
      <div style={{ display: "flex", justifyContent: "center" }}>
    <img
      src={Girl5}
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
