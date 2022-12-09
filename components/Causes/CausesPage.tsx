import React from "react";
import CauseCard from "./CauseCard";

function CausesPage() {
  interface causeStruct {
    title: string;
    category: string;
    raised: number;
    goal: number;
    desc: string;
    id: number;
    image: string;
  }
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
      <h3 className="text-4xl text-global-primary text-center">Causes</h3>
      <h4 className="text-center text-2xl font-normal">
        Are You Ready For a Better Our Active Campaigns.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5">
        {causeList.map((causeData, index) => {
          return <CauseCard {...causeData} key={index} />;
        })}
      </div>
    </div>
  );
}

export default CausesPage;
