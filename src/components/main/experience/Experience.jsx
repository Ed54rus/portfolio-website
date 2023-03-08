import React from "react";
import "./experience.css";
import Skills from "./Skills";

const Experience = () => {
  return (
    <section className="experience section" name= "experience" id="experience">
      {/* <h5>What Skills I Have</h5> */}
      <h2 className="experience__title">Опыт работы</h2>
      <Skills />
    </section>
  );
};

export default Experience;
