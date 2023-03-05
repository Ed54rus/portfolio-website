import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
	const [activeNav, setActiveNav] = useState("#home");
	return (
		<nav className="nav">
			<a
				className={
					activeNav === "#home" ? "nav__link nav__link--active" : "nav__link"
				}
				href="#home"
				onClick={() => setActiveNav("#home")}
			>
				<AiOutlineHome />
			</a>
			<a
				className={
					activeNav === "#about" ? "nav__link nav__link--active" : "nav__link"
				}
				href="#about"
				onClick={() => setActiveNav("#about")}
			>
				<AiOutlineUser />
			</a>
			<a
				className={
					activeNav === "#experience"
						? "nav__link nav__link--active"
						: "nav__link"
				}
				href="#experience"
				onClick={() => setActiveNav("#experience")}
			>
				<BiBookOpen />
			</a>
			<a
				className={
					activeNav === "#portfolio"
						? "nav__link nav__link--active"
						: "nav__link"
				}
				href="#portfolio"
				onClick={() => setActiveNav("#portfolio")}
			>
				<MdWorkOutline />
			</a>
			<a
				className={
					activeNav === "#contact" ? "nav__link nav__link--active" : "nav__link"
				}
				href="#contact"
				onClick={() => setActiveNav("#contact")}
			>
				<MdOutlineContactPage />
			</a>
		</nav>
	);
};

export default Nav;
