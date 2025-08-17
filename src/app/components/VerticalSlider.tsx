"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useState, useRef } from "react";
import type { Settings } from "react-slick";
import { data } from "../constants";

export const VerticalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    infinite: true,
    vertical: true,
    arrows: false,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: false,
    beforeChange: (_: number, next: number) => {
      if (
        typeof document !== "undefined" &&
        document.activeElement instanceof HTMLElement
      )
        setCurrentSlide(next);
    },
  };

  return (
    <div className="relative overflow-hidden pr-6 tab-port:pr-10">
      <div className="relative w-full">
        <Slider ref={sliderRef} {...settings} className="vertical-slider">
          {data.map((item) => (
            <div key={item.id}>
              <div className="flex items-center gap-4 tab-port:gap-8  rounded-lg pt-8">
                <div className="relative min-w-[120px] h-[120px] tab-port:min-w-[150px] tab-port:h-[150px] tab-land:min-w-[180px] tab-land:h-[180px] overflow-hidden rounded-full border-4 tab-port:border-8 border-secondary">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center rounded-full"
                  />
                </div>
                <div className="space-y-1 tab-port:space-y-2">
                  <h4 className="text-secondary font-[500] text-3xl tab-port:text-4xl">
                    0{item.id}
                  </h4>
                  <p className="text-base tab-port:text-lg font-semibold text-gray-900 uppercase">
                    {item.title}
                  </p>
                  <p className="text-black/70 text-xs lg-phone:text-sm tab-port:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="absolute left-[101%] top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              className="relative w-1 h-7 lg-phone:w-[5px] lg-phone:h-6 bg-gray-300 rounded-full overflow-hidden transition-all focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`absolute left-0 right-0 bg-secondary rounded-full transition-all duration-500 ${
                  currentSlide === index ? "bottom-0 h-full" : "bottom-full h-0"
                }`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
