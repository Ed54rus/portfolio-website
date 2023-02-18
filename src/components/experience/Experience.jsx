import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  { skill: "HTML", level: "Experienced" },
  { skill: "CSS", level: "Experienced" },
  { skill: "JavaScript", level: "Experienced" },
  { skill: "Bootstrap", level: "Experienced" },
  { skill: "Tailwind", level: "Experienced" },
  { skill: "React", level: "Experienced" },
];

const backendSkills = [
  { skill: "Node JS", level: "Experienced" },
  { skill: "MongoDB", level: "Experienced" },
  { skill: "PHP", level: "Experienced" },
  { skill: "MySQL", level: "Experienced" },
  { skill: "Python", level: "Experienced" },
];

const getSkills = (skills) =>
  skills.map((item, id) => (
    <article className="experience__details" key={id}>
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{item.skill}</h4>
        <small className="text-light">{item.level}</small>
      </div>
    </article>
  ));

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">{getSkills(frontendSkills)}</div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">{getSkills(backendSkills)}</div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
