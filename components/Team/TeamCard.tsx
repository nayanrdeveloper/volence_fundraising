import Image from "next/image";
import React from "react";

interface teamStruct {
  name: string;
  role: string;
  desc: string;
  image: string;
}
function TeamCard(teamData: teamStruct) {
  return (
    <div className="p-5 flex flex-col justify-start shadow-hero-section rounded-lg">
      <Image
        src={teamData.image}
        alt={teamData.name}
        height={300}
        width={300}
        className="h-[20rem] w-[20rem] md:h-[34rem] md:w-[34rem] rounded-lg"
      />
      <h3 className="text-3xl">{teamData.name}</h3>
      <span className="text-global-green">{teamData.role}</span>
      <p className="text-light-grey">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro enim
        numquam architecto deserunt quo, assumenda quis natus veniam soluta
      </p>
    </div>
  );
}

export default TeamCard;
