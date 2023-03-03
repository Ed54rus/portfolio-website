import React from "react";
import "./header.css";
import CTA from "./CTA";
import Eduard from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header className="header" id="home">
			<div className="header__container container ">
				<h1 className="header__title">
					<span className="header__text">Привет, меня зовут</span>
					Эдуард Малышенко
					<span className="header__text header__text--light">
						Frontend Developer
					</span>
				</h1>
				<CTA />

				<div className="header__profile-wrapper">
					<HeaderSocials />
					<div className="header__profile">
						<img src={Eduard} alt="Eduard" />
					</div>
					<a className="header__link link scroll-down" href="#contact">
						Прокрутить вниз
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
