import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a
				className="header__link link"
				href="https://linkedin.com "
				target="_blank"
				rel="noreferrer noopener"
			>
				<BsLinkedin />
			</a>

			<a
				className="header__link link"
				href="https://github.com/ed54rus/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<FaGithub />
			</a>

			<a
				className="header__link link"
				href="https://linkedin.com "
				target="_blank"
				rel="noreferrer noopener"
			>
				<FiDribbble />
			</a>
		</div>
	);
};

export default HeaderSocials;
