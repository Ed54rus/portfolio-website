import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
	return (
		<div className="header__buttons">
			<a className="header__button button" href={CV} download>
				Скачать резюме
			</a>

			<a className="header__button button button--primary" href="#contact">
				Связаться со мной
			</a>
		</div>
	);
};

export default CTA;