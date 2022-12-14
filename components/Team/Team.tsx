import React from "react";
import TeamCard from "./TeamCard";

function Team() {
  interface teamStruct {
    name: string;
    role: string;
    desc: string;
    image: string;
  }
  const teamList = [
    {
      name: "Fahima Khatun",
      role: "Reporter",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus luctus adipiscing.",
      image: "/volenteer_4.jpg",
    },
    {
      name: "Alamgir Hossain",
      role: "Donate Support",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus luctus adipiscing.",
      image: "/volenteer_5.jpg",
    },
    {
      name: "Nilufa Smith",
      role: "Volunteer",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus luctus adipiscing.",
      image: "/volenteer_6.jpg",
    },
    {
      name: "Kelian Baldes",
      role: "Volunteer",
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus luctus adipiscing.",
      image: "/volenteer_7.jpg",
    },
  ];
  return (
    <div className="container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
      <h3 className="text-global-orange text-center">Causes</h3>
      <h4 className="text-global-primary text-3xl font-semibold text-center">
        Are You Ready For a Better Our Active Campaigns.
      </h4>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 rounded-lg">
        {teamList.map((teamData: teamStruct, index) => {
          return <TeamCard key={index} {...teamData} />;
        })}
      </div> */}
    </div>
  );
}

export default Team;
