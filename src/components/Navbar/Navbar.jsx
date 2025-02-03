import { useRef } from "react";
import Logo from "../../assets/logo.png";
import "../../styles/Navbar.css";

function Navbar() {

  return (
    <header>
      <div className="lgog_box">
        <img
          loading="lazy"
          src={Logo}
          alt="logo"
          width="275"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </header>
  );
}

export default Navbar;
