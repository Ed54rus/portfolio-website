import React from "react";
import ScrollSpy from "react-scrollspy-navigation";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookOpen } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
const Nav = () => {
	return (
		<nav className="nav">
			<ScrollSpy duration="1000">
				<a className="nav__link active" href="#home" ref={React.createRef()}>
					<AiOutlineHome />
				</a>
				<a className="nav__link" href="#about" ref={React.createRef()}>
					<AiOutlineUser />
				</a>
				<a className="nav__link" href="#experience" ref={React.createRef()}>
					<BiBookOpen />
				</a>
				<a className="nav__link" href="#portfolio" ref={React.createRef()}>
					<MdWorkOutline />
				</a>
				<a className="nav__link" href="#contact" ref={React.createRef()}>
					<MdOutlineContactPage />
				</a>
			</ScrollSpy>
		</nav>
	);
};

export default Nav;
