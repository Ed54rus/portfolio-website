import React from "react";
import { Link } from "react-scroll";
import "./header.css";
import CTA from "./CTA";
import Eduard from "../../assets/ed.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header className="header section" name="home" id="home">
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
					<Link
						className="header__link link scroll-down"
						activeClass="active"
						to="contact"
						smooth={true}
						spy={true}
						offset={-50}
						duration={1000}
					>
						Прокрутить вниз
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
