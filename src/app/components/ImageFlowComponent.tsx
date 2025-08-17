"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { data } from "../constants";

const ImageFlowComponent = () => {
  const pathRefs = [
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
    useRef<SVGPathElement>(null),
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    pathRefs.forEach((ref, i) => {
      const path = ref.current;
      if (!path) return;

      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      tl.to(path, {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.in",
        onComplete: () => setActiveIndex(i + 1),
      });
    });

    tl.to({}, { duration: 3 });
    tl.call(() => setActiveIndex(0));

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] desktop:h-[500px] pt-8">
      <div className="relative w-full h-full">
        {data.map((step, index) => (
          <div
            key={step.id}
            className={`absolute ${step.position} flex flex-col ${step.align} w-48 desktop:w-56 lg-desktop:w-64`}
          >
            {index === 1 || index === 3 ? (
              <>
                <div className="mb-4 space-y-1">
                  <h3 className="text-3xl font-semibold text-secondary desktop:text-4xl">
                    0{step.id}
                  </h3>
                  <h4 className="text-lg font-semibold uppercase text-black desktop:text-xl">
                    {step.title}
                  </h4>
                  <p className="text-sm text-black/50 desktop:text-base">
                    {step.description}
                  </p>
                </div>
                <Image
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className={`w-36 min-h-36 desktop:min-w-44 desktop:min-h-44 rounded-full bg-cover border-8 border-secondary transition-all duration-700 z-10 ${
                    activeIndex >= index ? "grayscale-0" : "grayscale"
                  }`}
                />
              </>
            ) : (
              <>
                <Image
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className={`w-36 min-h-36 desktop:w-44 desktop:min-h-44 rounded-full border-8 border-secondary bg-cover transition-all duration-700 z-10 ${
                    activeIndex >= index ? "grayscale-0" : "grayscale"
                  }`}
                />
                <div className="mt-4 space-y-1">
                  <h3 className="text-3xl font-semibold text-secondary desktop:text-4xl">
                    0{step.id}
                  </h3>
                  <h4 className="text-lg font-semibold uppercase text-black desktop:text-xl">
                    {step.title}
                  </h4>
                  <p className="text-sm text-black/50 desktop:text-base">
                    {step.description}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}

        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 900 400"
          preserveAspectRatio="none"
        >
          <path
            d="M50,100 C330,0,50,250,270,350"
            stroke="#4C4C4C"
            strokeWidth="5"
            strokeDasharray="8 8"
            fill="none"
          />
          <path
            d="M320,350 C600,300,280,100,550,100"
            stroke="#4C4C4C"
            strokeWidth="5"
            strokeDasharray="8 8"
            fill="none"
          />
          <path
            d="M550,100 C850,20,550,400,800,350"
            stroke="#4C4C4C"
            strokeWidth="5"
            strokeDasharray="8 8"
            fill="none"
          />

          <path
            ref={pathRefs[0]}
            d="M50,100 C330,0,50,250,270,350"
            stroke="#DEF4FC"
            strokeWidth="6"
            fill="none"
          />
          <path
            ref={pathRefs[1]}
            d="M320,350 C600,300,280,100,550,100"
            stroke="#DEF4FC"
            strokeWidth="6"
            fill="none"
          />
          <path
            ref={pathRefs[2]}
            d="M550,100 C850,20,550,400,800,350"
            stroke="#DEF4FC"
            strokeWidth="6"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default ImageFlowComponent;
