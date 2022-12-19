import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div>
      <div className="flex flex-col md:flex-row container justify-between gap-4 items-center px-3 md:px-10 py-5 mt-3 md:mt-10 dark:(dark-design bg-cover bg-no-repeat)">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl">
            You Can Make A{" "}
            <span className="text-global-orange dark:text-global-yellow">
              Difference
            </span>{" "}
            In This World
          </h2>
          <p className="dark:text-global-grey-dark">
            Volence crowdfunding campaigns are where new and groundbreaking
            products take flight, sometimes long before they hit mainstream
            availability. With thousands of campaigns launching every week,
            there's great tech, design, and much more around every corner —
            often with limited-time perks and pricing for the earliest backers.
            Before it's everywhere, it's on Indiegogo.
          </p>
        </div>
        <div className="relative z-5 mx-10 mt-5 md:mt-0">
          <Image
            src={"/charing_food.jpg"}
            alt="charing food"
            height={400}
            width={450}
            className="rounded-md md:h-[30rem] md:w-[34rem] w-72 h-72"
          />
          <div className="flex flex-col text-center bg-white rounded-lg p-5 absolute top-[-2rem] right-[-2rem] md:right-[-60px] z-20 shadow-hero-section">
            <span className="text-2xl font-semibold text-global-orange">
              15 K
            </span>
            <span className="text-global-primary">Number of Supports</span>
          </div>
          <div className="bg-line-pattern bg-global-green dark:(bg-global-yellow text-black) p-3 md:p-8 flex flex-col absolute bottom-7 left-[-1rem] md:left-[-3rem] rounded-md">
            <span className="text-white dark:text-black">Our Volunteers</span>
            <div className="flex items-center">
              <Image
                src={"/volenteer.jpg"}
                alt=""
                height={50}
                width={50}
                className="rounded-full border-2 border-white"
              />
              <Image
                src={"/volenteer.jpg"}
                alt=""
                height={50}
                width={50}
                className="rounded-full border-2 border-white"
              />
              <span className="bg-white p-2 rounded-full text-global-green text-2xl dark:(text-global-yellow)">
                2+
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
