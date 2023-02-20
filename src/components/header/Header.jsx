import React from "react";
import "./header.css";
import CTA from "./CTA";
import Eduard from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Привет, меня зовут</h5>
        <h1>Эдуард Малышенко</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Eduard} alt="Eduard" />
        </div>
        <a href="#contact" className="scroll__down">
          Прокрутить вниз
        </a>
      </div>
    </header>
  );
};

export default Header;
