"use client";
import { SITE_CONTENT } from "../constants";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-10">
          {SITE_CONTENT.about.title}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {SITE_CONTENT.about.description}
        </p>
      </div>
    </section>
  );
};

export default About;
