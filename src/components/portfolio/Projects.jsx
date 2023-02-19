import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

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
    <div className="container portfolio__container">
      {data.map(({ id, img, title, github, demo }) => (
        <article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
            <img src={img} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a
              href={github}
              className="btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Demo
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects;
