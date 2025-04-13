import React from "react";
import { FaLinkedinIn, FaMediumM, FaTwitter } from "react-icons/fa";
import { AiFillGithub, AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";
import "./styles/Footer.scss";

const Footer = () => {
    const logo = new URL('../../public/images/m.svg', import.meta.url)
  return (
    <div className="Footer" id="footer">
      <img src={logo} alt="logo" height="70" weight="70" />
      <h4 className="follow">Reach out to me at</h4>
      <div className="footer-container">
        <a
          href="https://www.linkedin.com/in/masudhameher/"
          className="social-logo"
        >
          <FaLinkedinIn className="social-logo" />
        </a>
        <a href="https://www.github.com/samflab" className="social-logo">
          <AiFillGithub className="social-logo" />
        </a>
        <a href="https://samflab.medium.com" className="social-logo">
          <FaMediumM className="social-logo" />
        </a>
        <a href="https://www.twitter.com/kasturimeh" className="social-logo">
          <FaTwitter className="social-logo" />
        </a>
      </div>
      
      <div>
        Made with ♡ by{" "}
        <a className="my-name" href="https://github.com/samflab/Portfolio">
          Masudha Meher
        </a>
      </div>
      <Link
        id="scrollUp"
        to="top"
        smooth={true}
        
      >
        <AiOutlineArrowUp />
      </Link>
    </div>
  );
};

export default Footer;
