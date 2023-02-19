import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e1swii6",
        "template_5xb8zaq",
        form.current,
        "3N6E4kC6FmgeY90Id"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ed54rus@mail.ru</h5>
            <a
              href="mailto:ed54rus@mail.ru"
              target="_blank"
              rel="noreferrer noopener"
            >
              Отправить сообщение
            </a>
          </article>
          <article className="contact__option">
            <BsTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@Ed54rus</h5>
            <a
              href="https://t.me/Ed54rus"
              target="_blank"
              rel="noreferrer noopener"
            >
              Отправить сообщение
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+7 991 503 33 70</h5>
            <a
              href="https://api.whatsapp.com/send?phone=79915033370"
              target="_blank"
              rel="noreferrer noopener"
            >
              Отправить сообщение
            </a>
          </article>
        </div>
        <form ref={form} autoComplete="off" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Ваше Имя"
            required
          />
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Ваш Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Ваше Сообщение"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Отправить Сообщение
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
