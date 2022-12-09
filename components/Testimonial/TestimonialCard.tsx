import Image from "next/image";
import React from "react";

interface testimonialStruct {
  name: string;
  role: string;
  desc: string;
  image: string;
}
function TestimonialCard(testimonialData: testimonialStruct) {
  return (
    <div className="p-5 flex flex-col items-center gap-3 shadow-hero-section rounded-lg">
      <Image
        src={testimonialData.image}
        alt={testimonialData.name}
        height={60}
        width={60}
        className="rounded-full"
      />
      <h3 className="text-2xl font-semibold text-global-primary">{testimonialData.name}</h3>
      <span className="text-global-green">{testimonialData.role}</span>
      <p className="text-light-grey">{testimonialData.desc}</p>
    </div>
  );
}

export default TestimonialCard;
