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
          width="400"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <img
          loading="lazy"
          src={Girl}
          alt="Logo 2"
          width="200"
          style={{ maxWidth: "100%", height: "auto" }}
        />


      </div>
    </header>


  );
}

export default Navbar;
