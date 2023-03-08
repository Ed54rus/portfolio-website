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
		setTimeout(() => {
			form.current[3].innerText = "Сообщение Отправлено";

			setTimeout(() => {
				form.current[3].innerText = "Отправить Сообщение";
			}, 2000);
		}, 500);

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
		<section className="contact section" title="contact" id="contact">
			<h2 className="contact__title">Мои контакты</h2>
			<div className="contact__container container ">
				<ul className="contact__options">
					<li className="contact__option">
						<MdOutlineMail className="contact__option-icon" />
						<h3 className="contact__option-title">Email</h3>
						<p className="contact__option-text">ed54rus@mail.ru</p>
						<a
							className="contact__link link"
							href="mailto:ed54rus@mail.ru"
							target="_blank"
							rel="noreferrer noopener"
						>
							Отправить сообщение
						</a>
					</li>

					<li className="contact__option">
						<BsTelegram className="contact__option-icon" />
						<h3 className="contact__option-title">Telegram</h3>
						<p className="contact__option-text">@Ed54rus</p>
						<a
							className="contact__link link"
							href="https://t.me/Ed54rus"
							target="_blank"
							rel="noreferrer noopener"
						>
							Отправить сообщение
						</a>
					</li>

					<li className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h3 className="contact__option-title">WhatsApp</h3>
						<p className="contact__option-text">+7 991 503 33 70</p>
						<a
							className="contact__link link"
							href="https://api.whatsapp.com/send?phone=79915033370"
							target="_blank"
							rel="noreferrer noopener"
						>
							Отправить сообщение
						</a>
					</li>
				</ul>
				<form
					className="contact__form"
					ref={form}
					autoComplete="off"
					onSubmit={sendEmail}
				>
					<input
						className="contact__form-input"
						type="text"
						name="name"
						autoComplete="off"
						placeholder="Ваше Имя"
						required
					/>
					<input
						className="contact__form-input"
						type="email"
						name="email"
						autoComplete="off"
						placeholder="Ваш Email"
						required
					/>
					<textarea
          className="contact__form-textarea"
						name="message"
						placeholder="Ваше Сообщение"
						required
					></textarea>
					<button className="button button-primary" id="submit" type="submit">
						Отправить Сообщение
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
