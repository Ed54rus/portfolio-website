import React from "react";
import "./footer.css";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="footer">
			<a className="footer__logo footer__link" href="#home">
				ED
			</a>

			<ul className="footer__items">
				<li className="footer__item">
					<a className="footer__link" href="#home">
						Домой
					</a>
				</li>
				<li className="footer__item">
					<a className="footer__link" href="#about">
						Обо мне
					</a>
				</li>
				<li className="footer__item">
					<a className="footer__link" href="#experience">
						Опыт работы
					</a>
				</li>
				{/* <li className="footer__item">
					<a className="footer__link" href="#services">
						Services
					</a>
				</li> */}
				<li className="footer__item">
					<a className="footer__link" href="#portfolio">
						Портфолио
					</a>
				</li>
				<li className="footer__item">
					<a className="footer__link" href="#testimonials">
						Отзывы
					</a>
				</li>
				<li className="footer__item">
					<a className="footer__link" href="#contact">
						Контакты
					</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a
					className="footer__social-link"
					href="https://vk.com/ed54rus"
					target="_blank"
					rel="noreferrer noopener"
				>
					<SlSocialVkontakte />
				</a>
				<a
					className="footer__social-link"
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
