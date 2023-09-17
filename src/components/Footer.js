import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import logo from "../assets/otoko_logo.png";
import "../styles/Footer.css";

const openLinkInNewWindow = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon
          onClick={() =>
            openLinkInNewWindow("https://www.instagram.com/otoko_sushi/?hl=en")
          }
        />

        <FacebookIcon onClick={() =>
            openLinkInNewWindow("https://www.facebook.com/search/top?q=otoko_sushi")
          }/>
        <TwitterIcon />
        <PinterestIcon />
        
      </div>
      <p> &copy; 2023 Powerd By EasyRest</p>
    </div>
  );
};

export default Footer;
