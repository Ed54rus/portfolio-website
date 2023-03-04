import React from "react";
import "./about.css";
import PersonPhoto from "../../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
	return (
		<section className="about section" id="about">
			<h2 className="about__title">Обо мне</h2>

			<div className="about__container container">
				<div className="about__person about__block">
					<div className="about__person-image">
						<img
							className="about__image image"
							src={PersonPhoto}
							alt="Фотография Малышенко Эдуарда"
						/>
					</div>
				</div>

				<div className="about__content about__block">
					<ul className="about__cards">
						<li className="about__card">
							<article className="about__card-item">
								<FaAward className="about__icon" />
								<h2 className="about__card-title">Опыт</h2>
								<small className="about__card-text">1 год</small>
							</article>
						</li>

						<li className="about__card">
							<article className="about__card-item">
								<FiUsers className="about__icon" />
								<h2 className="about__card-title">Клиенты</h2>
								<small className="about__card-text">10+</small>
							</article>
						</li>

						<li className="about__card">
							<article className="about__card-item">
								<VscFolderLibrary className="about__icon" />
								<h2 className="about__card-title">Проекты</h2>
								<small className="about__card-text">10+</small>
							</article>
						</li>
					</ul>
					<p className="about__text">
						Далеко-далеко за словесными горами в стране гласных, и согласных
						живут рыбные тексты. Путь прямо использовало его щеке, сбить толку
						жизни. Возвращайся путь алфавит вершину парадигматическая раз!
						Первую пор его всеми последний до.
					</p>
					<a className="about_button button button-primary" href="#contact">
						Мои контакты
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
