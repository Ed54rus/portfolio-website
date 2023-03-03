import React from "react";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet vitae ducimus facilis a animi consectetur ea pariatur impedit modi! Hic nulla doloribus voluptatem modi vero aut deleniti repudiandae sequi!",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet vitae ducimus facilis a animi consectetur ea pariatur impedit modi! Hic nulla doloribus voluptatem modi vero aut deleniti repudiandae sequi!",
  },
  {
    avatar: AVTR4,
    name: "Matilda Mellon",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet vitae ducimus facilis a animi consectetur ea pariatur impedit modi! Hic nulla doloribus voluptatem modi vero aut deleniti repudiandae sequi!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* <h5>Review from clients</h5> */}
      <h2>Отзывы</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        speed={700}
        autoplay={{delay:3000}}
        loop={true}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, id) => (
          <SwiperSlide className="testimonial" key={id}>
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
