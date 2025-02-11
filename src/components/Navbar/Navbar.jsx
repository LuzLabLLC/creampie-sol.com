import { useRef } from "react";
import Logo from "../../assets/logo_pink.png";
import "../../styles/Navbar.css";
import Girl from "../../assets/girl7.png";


function Navbar() {

  return (
    <header>
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
          src={Logo}
          alt="Logo 1"
          
          style={{
            height: "auto",
            flexShrink: 1,
            minWidth: "80px",
            objectFit: "contain",
            maxHeight: "60px" }}
        />

        <img
          loading="lazy"
          src={Girl}
          alt="Logo 2"
        
          style={{ 
            height: "auto",
            flexShrink: 1,
            minWidth: "80px",
            objectFit: "contain",
            maxHeight: "200px" }}
        />


      </div>
    </header>


  );
}

export default Navbar;
