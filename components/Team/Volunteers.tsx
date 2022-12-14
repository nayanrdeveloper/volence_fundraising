import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import axios from "axios";
import { useSigner, useContract, useProvider } from "wagmi";
import { ethers } from "ethers";
import voielnceAbi from "../../ContractAbi/violenceAbi";

function Volunteers() {
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
  const { data: signer, isError } = useSigner();
  const provider = useProvider();
  const [volunteerList, setVolunteerList] = useState<any>();

  const contract = useContract({
    address: process.env.NEXT_PUBLIC_VOLENCE_CONRACT,
    abi: voielnceAbi,
    signerOrProvider: signer || provider,
  });

  const getVolunteerList = async () => {
    try {
      console.log("Start");
      
      const data = await contract?.getAllVolunteer();
      let newItems: any = await Promise.all(
        data.map(async (d: any) => {
          const meta = await axios.get(d.image);
          const imageUrl = `https://ipfs.io/ipfs/${meta.data.image.substr(7)}`;
          return {
            name: d.name,
            desc: d.desc,
            image: imageUrl,
            volunteerId: d.volunteerId,
            role: d.role,
            email: d.email,
            phone: d.phone,
            location: d.location,
            active: d.active,
            address: d.volunteerAddress,
          };
        })
      );
      setVolunteerList(newItems);
      console.log(newItems);
      
    } catch (error: any) {}
  };

  useEffect(() => {
    if(signer) {
      getVolunteerList();
    }
  },[]);

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
    <div>
      <div className="container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
        <h3 className="text-4xl text-global-primary text-center">Volunteer</h3>
        <h4 className="text-center text-2xl font-normal">
          Our Expert Volunteer
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 rounded-lg">
          {volunteerList && volunteerList.map((teamData: teamStruct, index: number) => {
            return <TeamCard key={index} {...teamData} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Volunteers;
