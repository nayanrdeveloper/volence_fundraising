import Image from "next/image";
import React from "react";

interface causeStruct {
  title: string;
  category: string;
  raised: number;
  goal: number;
  desc: string;
  id: number;
  image: string;
}

function CauseCard(causeData: causeStruct) {
  return (
    <div className="p-5 flex flex-col gap-3 shadow-hero-section rounded-lg">
      <Image
        src={causeData.image}
        alt={causeData.title}
        height={369}
        width={355}
        className="rounded-lg"
      />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <span className="text-light-grey">Raised: </span>
          <span className="text-global-orange ">$ {causeData.raised}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-light-grey">Goal: </span>
          <span className="text-global-orange ">$ {causeData.goal}</span>
        </div>
      </div>
      <h3 className="font-semibold">{causeData.title}</h3>
      <p className="text-light-grey">{causeData.desc}</p>
      <button className="text-white bg-global-green px-3 py-2 rounded-lg">Donate Now</button>
    </div>
  );
}

export default CauseCard;
