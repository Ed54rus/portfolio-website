import React from "react";
import { Link } from "react-scroll";
import CV from "../../assets/cv.pdf";

const CTA = () => {
	return (
		<div className="header__buttons">
			<a className="header__button" href={CV} download>
				Скачать резюме
			</a>

			<a className="header__button header__button--primary" href="#contact">
				Связаться со мной
			</a>
		</div>
	);
};

export default CTA;