"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SITE_CONTENT } from "../constants";
import Card from "./Card";

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Events = () => {
  return (
    <section id="events" className="py-20 mb-20px bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-10">
          {SITE_CONTENT.events.title}
        </h2>
        <Slider {...sliderSettings}>
          {SITE_CONTENT.events.items.map((event: Event) => (
            <Card
              key={event.id}
              title={event.title}
              subtitle={event.date}
              description={event.description}
              image={event.image}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Events;
