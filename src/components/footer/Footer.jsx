import React from "react";
import { Link } from "react-scroll";
import "./footer.css";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="footer">
			<Link
				className="footer__logo footer__link"
				to="home"
				smooth={true}
				spy={true}
				duration={1000}
			>
				ED
			</Link>

			<ul className="footer__items">
				<li className="footer__item">
					<Link
						className="footer__link"
						to="home"
						smooth={true}
						spy={true}
						duration={1000}
					>
						Домой
					</Link>
				</li>

				<li className="footer__item">
					<Link
						className="footer__link"
						to="about"
						smooth={true}
						spy={true}
						offset={-50}
						duration={1000}
					>
						Обо мне
					</Link>
				</li>

				<li className="footer__item">
					<Link
						className="footer__link"
						to="experience"
						smooth={true}
						spy={true}
						offset={-50}
						duration={1000}
					>
						Опыт работы
					</Link>
				</li>

				{/* <li className="footer__item">
					<a className="footer__link"
            to="contact"
						smooth={true}
						spy={true}
						offset={-50}
						duration={1000}>
						Services
					</a>
				</li> */}
				<li className="footer__item">
					<Link
						className="footer__link"
						to="portfolio"
						smooth={true}
						spy={true}
						offset={-50}
						duration={1000}
					>
						Портфолио
					</Link>
				</li>
				<li className="footer__item">
					<Link
						className="footer__link"
						to="testimonials"
						smooth={true}
						spy={true}
						offset={-50}
						duration={1000}
					>
						Отзывы
					</Link>
				</li>
				<li className="footer__item">
					<Link
						className="footer__link"
						to="contact"
						smooth={true}
						spy={true}
						offset={-50}
						duration={1000}
					>
						Контакты
					</Link>
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
