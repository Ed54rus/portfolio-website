import React from "react";
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

const skills = [
	{ skill: "HTML", icon: <AiOutlineHtml5 /> },
	{ skill: "CSS", icon: <TbBrandCss3 /> },
	{ skill: "Sass", icon: <FaSass /> },
	{ skill: "Figma", icon: <FiFigma /> },
	{ skill: "JavaScript", icon: <TbBrandJavascript /> },
	{ skill: "Bootstrap", icon: <BsBootstrapFill /> },
	{ skill: "Tailwind", icon: <TbBrandTailwind /> },
	{ skill: "React", icon: <FaReact /> },
	{ skill: "NodeJS", icon: <FaNodeJs /> },
	{ skill: "Webpack", icon: <SiWebpack /> },
];

const Skills = () => {
	return (
		<div className="experience__container container ">
			<ul className="experience__content">
				{skills.map((item, id) => (
					<li className="experience__item" key={id}>
						<div className="experience__item-icon">{item.icon}</div>
						<h3 className="experience__item-title">{item.skill}</h3>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;
