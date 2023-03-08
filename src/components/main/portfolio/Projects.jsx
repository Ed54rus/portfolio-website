import React from "react";
import IMG1 from "../../../assets/portfolio1.jpg";
import IMG2 from "../../../assets/portfolio2.jpg";
import IMG3 from "../../../assets/portfolio3.jpg";
import IMG4 from "../../../assets/portfolio4.jpg";
import IMG5 from "../../../assets/portfolio5.png";
import IMG6 from "../../../assets/portfolio6.jpg";

const data = [
	{
		id: 1,
		title: "Crypto Currency Dashboard & Financial Visualization",
		img: IMG1,
		github: "https://github.com/",
		demo: "https://dribbble.com/Alien_pixels",
	},
	{
		id: 2,
		title: "Charts templates & infographics in Figma",
		img: IMG2,
		github: "https://github.com/",
		demo: "https://dribbble.com/Alien_pixels",
	},
	{
		id: 3,
		title: "Figma dashboard UI kit for data design web apps",
		img: IMG3,
		github: "https://github.com/",
		demo: "https://dribbble.com/Alien_pixels",
	},
	{
		id: 4,
		title: "Maintaining tasks and tracking progress",
		img: IMG4,
		github: "https://github.com/",
		demo: "https://dribbble.com/Alien_pixels",
	},
	{
		id: 5,
		title: "Charts templates & infographics in Figma",
		img: IMG5,
		github: "https://github.com/",
		demo: "https://dribbble.com/Alien_pixels",
	},
	{
		id: 6,
		title: "Figma dashboard UI kit for data design web apps",
		img: IMG6,
		github: "https://github.com/",
		demo: "https://dribbble.com/Alien_pixels",
	},
];

const Projects = () => {
	return (
		<ul className="portfolio__container container">
			{data.map(({ id, img, title, github, demo }) => (
				<li className="portfolio__item-list" key={id}>
        <article className="portfolio__item" >
					<img className="portfolio__item-image" src={img} alt={title} />
					<h3 className="portfolio__item-title">{title}</h3>
					<div className="portfolio__item-buttons">
						<a
							className="portfolio__item-button button"
							href={github}
							target="_blank"
							rel="noreferrer noopener"
						>
							Github
						</a>
						<a
							className="portfolio__item-button button button--primary"
							href={demo}
							target="_blank"
							rel="noreferrer noopener"
						>
							Live Demo
						</a>
					</div>
				</article>
        </li>
			))}
		</ul>
	);
};

export default Projects;
