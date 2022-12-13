import Image from "next/image";
import React from "react";

interface causeStruct {
  projectId: number;
  title: string;
  category: string;
  desc: string;
  targetAmount: number;
  raisedAmount: number;
  image: string;
  creator: string;
  deadline: number;
  location: string;
  numRequests: number;
}

function CauseCard(causeData: causeStruct) {
  return (
    <div className="p-5 flex flex-col gap-3 shadow-hero-section rounded-lg">
      <Image
        src={causeData.image}
        alt={causeData.title}
        height={369}
        width={355}
        className="rounded-lg h-[20rem] w-[20rem] md:h-[22rem] md:w-[22rem]"
      />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <span className="text-light-grey">Raised: </span>
          <span className="text-global-orange ">$ {causeData.raisedAmount}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-light-grey">Goal: </span>
          <span className="text-global-orange ">$ {causeData.targetAmount}</span>
        </div>
      </div>
      <h3 className="font-semibold">{causeData.title}</h3>
      <p className="text-light-grey">{causeData.desc.substring(0, 130) + '...'}</p>
      <button className="text-white bg-global-green px-3 py-2 rounded-lg">Donate Now</button>
    </div>
  );
}

export default CauseCard;
