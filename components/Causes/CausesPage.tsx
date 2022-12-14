import React, { useEffect, useState } from "react";
import CauseCard from "./CauseCard";
import axios from "axios";
import { useSigner, useContract, useProvider } from "wagmi";
import { ethers } from "ethers";
import voielnceAbi from "../../ContractAbi/violenceAbi";

function CausesPage() {
  const { data: signer, isError } = useSigner();
  const provider = useProvider();
  const [campaignList, setCampaignList] = useState<any>();
  interface causeStruct {
    title: string;
    category: string;
    raised: number;
    goal: number;
    desc: string;
    id: number;
    image: string;
  }

  const contract = useContract({
    address: process.env.NEXT_PUBLIC_VOLENCE_CONRACT,
    abi: voielnceAbi,
    signerOrProvider: signer || provider,
  });

  const getItems = async () => {
    const projectsData = await contract?.getAllProjects();
      const data: any = await Promise.all(
        projectsData.map(async (d: any) => {
          // console.log(d);
          
          const meta = await axios.get(d.Img);
          // console.log(meta);
          
          const projectId = d.OrgainizationId.toNumber();
          const imageUrl = `https://ipfs.io/ipfs/${meta.data.image.substr(7)}`;
          const targetAmount = await ethers.utils.formatUnits(
            d.Target.toString(),
            "ether"
          );
          const raisedAmount = await ethers.utils.formatUnits(
            d.CapitalRaised.toString(),
            "ether"
          );
          return {
            title: d.Title,
            desc: d.Description,
            image: imageUrl,
            projectId: projectId,
            raisedAmount: raisedAmount,
            targetAmount: targetAmount,
            category: d.Category,
            creator: d.Creator,
            deadline: d.Deadline.toNumber(),
            location: d.Location,
          };
        })
      );
      setCampaignList(data);
      console.log(data);
  }

  useEffect(() => {
    if (signer) {
      getItems();
    }
  },[]);
  const causeList: causeStruct[] = [
    {
      title: "Help For Humanity",
      category: "Humanity",
      raised: 124,
      goal: 200,
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus luctus adipiscing.",
      id: 1,
      image: "/food_cause.jpg",
    },
    {
      title: "Help For Water & Food",
      category: "Water & Food",
      raised: 124,
      goal: 200,
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus luctus adipiscing.",
      id: 2,
      image: "/water_cause.jpg",
    },
    {
      title: "Save Earth & Lives Secure the Future",
      category: "Save Earth",
      raised: 124,
      goal: 200,
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus luctus adipiscing.",
      id: 3,
      image: "/save_eath_cause.jpg",
    },
    {
      title: "Help For Humanity",
      category: "Humanity",
      raised: 124,
      goal: 200,
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus luctus adipiscing.",
      id: 1,
      image: "/food_cause.jpg",
    },
    {
      title: "Help For Water & Food",
      category: "Water & Food",
      raised: 124,
      goal: 200,
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus luctus adipiscing.",
      id: 2,
      image: "/water_cause.jpg",
    },
    {
      title: "Save Earth & Lives Secure the Future",
      category: "Save Earth",
      raised: 124,
      goal: 200,
      desc: "Lorem ipsum dolor sit amet, consectetur elit. Ut elit tellus luctus adipiscing.",
      id: 3,
      image: "/save_eath_cause.jpg",
    },
  ];
  return (
    <div className="container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
      <h3 className="text-4xl text-global-primary text-center dark:(text-global-yellow)">Causes</h3>
      <h4 className="text-center text-2xl font-normal">
        Are You Ready For a Better Our Active Campaigns.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5">
        {campaignList && campaignList.map((causeData: any, index: number) => {
          return <CauseCard {...causeData} key={index} />;
        })}
      </div>
    </div>
  );
}

export default CausesPage;
