import React from "react";
import "./footer.css";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        ED
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://vk.com/ed54rus"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SlSocialVkontakte />
        </a>
        <a
          href="http://instagram.com/eduard_malyshenko"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiOutlineInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ED Projects. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
