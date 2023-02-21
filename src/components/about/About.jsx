import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      {/* <h5>Познакомимся</h5> */}
      <h2>Обо мне</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Опыт</h5>
              <small>1 год</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Клиенты</h5>
              <small>10+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Проекты</h5>
              <small>10+</small>
            </article>
          </div>

          <p>
            Далеко-далеко за словесными горами в стране гласных, и согласных
            живут рыбные тексты. Путь прямо использовало его щеке, сбить толку
            жизни. Возвращайся путь алфавит вершину парадигматическая раз!
            Первую пор его всеми последний до.
          </p>
          <a href="#contact" className="btn btn-primary">
            Мои контакты
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
