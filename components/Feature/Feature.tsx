import Image from "next/image";
import React from "react";
import { BiSupport, BiDonateBlood } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";

function Feature() {
  const imageList = [
    "/food_charity_2.jpg",
    "/food_charity_3.jpg",
    "/food_charity_4.jpg",
    "/charing_food.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
        <div className="grid gap-1 grid-cols-1 md:grid-cols-2">
          {imageList.map((image, index) => {
            return (
              <Image
                src={image}
                key={index}
                alt=""
                width={350}
                height={220}
                className="rounded-md md:h-[16rem] md:w-[18rem]"
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-global-orange">Features</h3>
          <span className="text-3xl font-semibold">
            Donate To People In Our Features.
          </span>
          <p className="text-light-grey">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            laborum quasi nesciunt itaque sapiente dignissimos fugit a eveniet,
            inventore ullam enim aut ea, deserunt atque ipsum doloremque facilis
            odio exercitationem.
          </p>
          <ul className="">
            <li className="items-center flex gap-2 text-global-primary p-2 font-semibold">
              <BiSupport className="text-global-orange text-4xl rounded-full p-2 bg-orange-100" />{" "}
              24/7 Support
            </li>
            <li className="items-center flex gap-2 text-global-primary p-2 font-semibold">
              <BiDonateBlood className="text-global-green text-4xl rounded-full p-2 bg-green-100" />{" "}
              Make Donation
            </li>
            <li className="items-center flex gap-2 text-global-primary p-2 font-semibold">
              <FaUserCheck className="text-global-orange text-4xl rounded-full p-2 bg-orange-100" />{" "}
              Success Rate
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Feature;
