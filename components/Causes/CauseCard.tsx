import Image from "next/image";
import Link from "next/link";
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

function CauseCard(causeData: any) {
  return (
    <div className="p-5 flex flex-col gap-3 shadow-hero-section rounded-lg dark:(border-2 border-dark-border bg-dark-card)">
      <Image
        src={causeData.image}
        alt={causeData.title}
        height={369}
        width={355}
        className="rounded-lg h-[20rem] w-[20rem] md:h-[22rem] md:w-[22rem]"
      />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <span className="text-light-grey dark:(text-global-grey-dark)">Raised: </span>
          <span className="text-global-orange dark:(text-global-yellow)">
            $ {causeData.raisedAmount}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-light-grey dark:(text-global-grey-dark)">Goal: </span>
          <span className="text-global-orange dark:(text-global-yellow)">
            $ {causeData.targetAmount}
          </span>
        </div>
      </div>
      <Link href={`/cause/${causeData.projectId}`}>
        <h3 className="font-semibold">{causeData.title}</h3>
      </Link>
      <p className="text-light-grey dark:(text-global-grey-dark)">
        {causeData.desc.substring(0, 130) + "..."}
      </p>
      <button className="text-white bg-global-green dark:(bg-global-yellow text-black) px-3 py-2 rounded-lg">
        Donate Now
      </button>
    </div>
  );
}

export default CauseCard;
