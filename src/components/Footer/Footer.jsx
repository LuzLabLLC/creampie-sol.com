import React from "react";
import "../../styles/Footer.css";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/logo_pink.png";
import DexScreener from "../../assets/dexscreener.png";
import DexTools from "../../assets/dextools.png";
import Raydium from "../../assets/raydium.png";

function Footer() {
  return (
    <>
      <footer className="footer_section">
        <div className="logo_socials">
          <div className="lgog_box">
            <img
              loading="lazy"
              src={Logo}
              alt="logo"
              width="275"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="social_icons">
            <li>
              <a target="_blank" href="http://t.me/creampiecto">
                <FaTelegramPlane />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://x.com/Creampiectox">
                <FaTwitter />
              </a>
            </li>
          </div>
        </div>
        <div style={{ margin: "10px 20px" }}>
          <div
            style={{
              display: "inline-flex",
              width: "100%",
              justifyContent: "space-evenly",
              marginBottom: "15px",
            }}
          >
            <a href="https://dexscreener.com/solana/ECyjuuv6mX8CsBkyG9SX24Tv7YLGq2PTgThiDXpKf4jd?__cf_chl_rt_tk=_TsR7TwXLa4Saa4LN2.8bc3iqrZk5hLdQY74hNYjJFw-1736115739-1.0.1.1-kIyteOLMVYi_tmjcY1_eYU9FZ68cb5kdVrLpqkw8DpU">
              <img
                loading="lazy"
                src={DexScreener}
                alt="dexscreener"
                width="50"
              />
            </a>
            <a href="https://www.dextools.io/app/en/solana/pair-explorer/ECyjuuv6mX8CsBkyG9SX24Tv7YLGq2PTgThiDXpKf4jd">
              <img loading="lazy" src={DexTools} alt="dextools" width="50" />
            </a>
            <a href="https://raydium.io/swap/?outputMint=28BxCgNT6L1zfdqYmsiSQGFUHrzLzGmNbNzji3yxpump&inputMint=sol">
              <img loading="lazy" src={Raydium} alt="raydium" width="50" />
            </a>
          </div>
          <div
            style={{
              maxWidth: "100%",
              whiteSpace: "normal",
              wordWrap: "anywhere",
            }}
          >
            <p>
              CA: <strong>28BxCgNT6L1zfdqYmsiSQGFUHrzLzGmNbNzji3yxpump</strong>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
