import React from "react";

// import Swiper core and required modules
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonials.css";

import AVTR1 from "../../../assets/avatar1.jpg";
import AVTR2 from "../../../assets/avatar2.jpg";
import AVTR3 from "../../../assets/avatar3.jpg";
import AVTR4 from "../../../assets/avatar4.jpg";

const data = [
	{
		avatar: AVTR1,
		name: "Tina Show",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet vitae ducimus facilis a animi consectetur ea pariatur impedit modi! consectetur ea pariatur impedit modi! Hic nulla doloribus voluptatem modi vero aut deleniti repudiandae sequi!",
	},
	{
		avatar: AVTR2,
		name: "Shatta Wale",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet vitae ducimus facilis a animi consectetur ea pariatur impedit modi! Hic nulla doloribus voluptatem modi vero aut deleniti repudiandae sequi!",
	},
	{
		avatar: AVTR3,
		name: "Sergio Despite",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet vitae ducimus facilis a animi consectetur ea pariatur impedit modi! Hic nulla doloribus voluptatem modi vero aut deleniti repudiandae sequi! doloribus voluptatem modi vero aut deleniti repudiandae sequi! doloribus voluptatem modi vero aut deleniti repudiandae sequi!",
	},
	{
		avatar: AVTR4,
		name: "Matilda Mellon",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet vitae ducimus facilis a animi consectetur ea pariatur impedit modi! Hic nulla doloribus voluptatem modi vero aut deleniti repudiandae sequi! doloribus voluptatem modi vero aut deleniti repudiandae sequi!",
	},
];

const Testimonials = () => {
	return (
		<section className="testimonials section" id="testimonials">
			<h2 className="testimonials__title">Отзывы</h2>

			<Swiper
				className="container testimonials__container"
				modules={[Autoplay]}
				spaceBetween={40}
				slidesPerView={1}
				speed={700}
				autoplay={{ delay: 3000 }}
				loop={true}
        autoHeight={true}
			>
				{data.map(({ avatar, name, review }, id) => (
					<SwiperSlide className="testimonial" key={id}>
						<div className="testimonial__avatar">
							<img className="testimonial__photo" src={avatar} alt={name} />
						</div>
						<h3 className="testimonial__name">{name}</h3>
						<small className="testimonial__review">{review}</small>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonials;
