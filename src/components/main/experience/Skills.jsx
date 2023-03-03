import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { FaSass } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { SiWebpack } from "react-icons/si";


const frontendSkills = [
  { skill: "HTML", icon: <AiOutlineHtml5/> },
  { skill: "CSS", icon: <TbBrandCss3/> },
  { skill: "Sass", icon: <FaSass/> },
  { skill: "Figma", icon: <FiFigma/> },
  { skill: "JavaScript", icon: <TbBrandJavascript/> },
  { skill: "Bootstrap", icon: <BsBootstrapFill/> },
  { skill: "Tailwind", icon: <TbBrandTailwind/> },
  { skill: "React", icon: <FaReact/> },
  { skill: "NodeJS", icon: <FaNodeJs/> },
  { skill: "Webpack", icon: <SiWebpack/> },
];

// const backendSkills = [
//   { skill: "Node JS", level: "Experienced" },
//   { skill: "MongoDB", level: "Experienced" },
//   { skill: "PHP", level: "Experienced" },
//   { skill: "MySQL", level: "Experienced" },
//   { skill: "Python", level: "Experienced" },
// ];

const getSkills = (skills) =>
  skills.map((item, id) => (
    <article className="experience__item" key={id}>
    <div className="experience__item-icon">{item.icon}</div>
        <h3 className='experience__item-title'>{item.skill}</h3>
    </article>
  ));

const Skills = () => {
  return (
    <div className="experience__container container ">

        {/* <div className="experience__item">
          <h3 className='experience__item-title'>SKILLS</h3> */}
          <div className="experience__content">{getSkills(frontendSkills)}</div>
        {/* </div> */}

        {/* <div className="experience__item">
          <h3 className='experience__item-title'>Backend Development</h3>
          <div className="experience__content">{getSkills(backendSkills)}</div>
        </div> */}

      </div>
  )
}

export default Skills