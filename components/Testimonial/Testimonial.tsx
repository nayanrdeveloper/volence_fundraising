import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  interface testimonialStruct{
    name: string;
    role: string;
    desc: string;
    image: string;
  }
  const testimonialList : testimonialStruct[] = [
    {
      name: "John Doe",
      role: "Volunteer",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro enimnumquam architecto deserunt quo, assumenda quis natus veniam soluta",
      image: "/volenteer_4.jpg",
    },
    {
      name: "Adams Hobes",
      role: "Volunteer",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro enimnumquam architecto deserunt quo, assumenda quis natus veniam soluta",
      image: "/volenteer_5.jpg",
    },
    {
      name: "Augusta Wind",
      role: "Volunteer",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro enimnumquam architecto deserunt quo, assumenda quis natus veniam soluta",
      image: "/volenteer_6.jpg",
    },
    {
      name: "Constance Noring",
      role: "Volunteer",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro enimnumquam architecto deserunt quo, assumenda quis natus veniam soluta",
      image: "/volenteer_7.jpg",
    },
  ];
  return (
    <div className="container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
      <h3 className="text-global-orange text-center dark:(text-global-yellow)">Our Testimonial</h3>
      <h4 className="text-global-primary text-2xl md:text-3xl font-semibold text-center dark:(text-white)">
        What Our Sponsors Say?
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
        {
          testimonialList.map((testimonialData, index) => {
            return <TestimonialCard key={index} {...testimonialData} />
          })
        }
      </div>
    </div>
  );
}

export default Testimonial;
