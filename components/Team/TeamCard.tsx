import Image from "next/image";
import Link from "next/link";
import React from "react";

interface teamStruct {
  name: string;
  desc: string;
  image: string;
  volunteerId: number;
  role: string;
  email: string;
  phone: string;
  location: string;
  active: string;
  address: string;
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
      <Link href={`/volunteer/${teamData.volunteerId}`}>
        <h3 className="text-3xl">{teamData.name}</h3>
      </Link>
      <span className="text-global-green">{teamData.role}</span>
      <p className="text-light-grey">{teamData.desc}</p>
    </div>
  );
}

export default TeamCard;
