import React from "react";
import { Link } from "react-scroll";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
const Nav = () => {
	return (
		<nav className="nav">
			<Link
				className="nav__link"
				activeClass="active"
				to="home"
				smooth={true}
				spy={true}
				offset={0}
				duration={1000}
			>
				<AiOutlineHome />
			</Link>
			<Link
				className="nav__link"
				activeClass="active"
				to="about"
				smooth={true}
				spy={true}
				offset={-50}
				duration={1000}
			>
				<AiOutlineUser />
			</Link>
			<Link
				className="nav__link"
				activeClass="active"
				to="experience"
				smooth={true}
				spy={true}
				offset={-50}
				duration={1000}
			>
				<BiBookOpen />
			</Link>
			<Link
				className="nav__link"
				activeClass="active"
				to="portfolio"
				smooth={true}
				spy={true}
				offset={-50}
				duration={1000}
			>
				<MdWorkOutline />
			</Link>
			<Link
				className="nav__link"
				activeClass="active"
				to="contact"
				smooth={true}
				spy={true}
				offset={-50}
				duration={1000}
			>
				<MdOutlineContactPage />
			</Link>
		</nav>
	);
};

export default Nav;
