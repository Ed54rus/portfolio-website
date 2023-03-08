import React from "react";
import "./portfolio.css";
import Projects from "./Projects";

const Portfolio = () => {
	return (
		<section className="portfolio section" name="portfolio" id="portfolio">
			<h2 className="portfolio__title">Портфолио</h2>
			<Projects />
		</section>
	);
};

export default Portfolio;
