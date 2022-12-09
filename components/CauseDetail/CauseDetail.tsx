import Image from "next/image";
import React, { useState } from "react";
import { AiFillDownCircle } from "react-icons/ai";

function CauseDetail() {
  const causeFaqList = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet.",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro, dignissimos voluptatum voluptatibus sunt verodoloribus.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet.",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro, dignissimos voluptatum voluptatibus sunt verodoloribus.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet.",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Porro, dignissimos voluptatum voluptatibus sunt verodoloribus.",
    },
  ];
  const [openFaqNumber, setOpenFaqNumber] = useState<number>(1);
  return (
    <div>
      <div className="mt-5 flex flex-col container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
        <h3 className="text-3xl text-global-primary text-center p-5 bg-[#FAFCF6]">
          Cause Details
        </h3>
        <Image
          src={"/food_charity_2.jpg"}
          alt={"food charity"}
          height={300}
          width={300}
          className="w-full h-[20rem] md:h-[32rem] rounded-lg"
        />
        <div className="flex justify-between">
          <div className="flex gap-2">
            <span className="text-light-grey">Raised: </span>
            <span className="text-global-orange ">$ 2300</span>
          </div>
          <div className="flex gap-2">
            <span className="text-light-grey">Goal: </span>
            <span className="text-global-orange ">$ 5000</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-3xl text-global-primary">Help For Humanity</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum harum
              dolores iste voluptatibus maiores optio, odio repellendus tempora
              libero a? Minima esse itaque voluptatum eum nihil. Exercitationem,
              voluptas. Assumenda, delectus.
            </p>
            <div className="flex flex-col gap-1">
              {causeFaqList.map((causeFaq) => {
                return (
                  <div className="shadow-hero-section mt-5 px-4 py-4">
                    <div
                      className="flex justify-between items-center"
                      onClick={() => setOpenFaqNumber(causeFaq.id)}
                    >
                      <h5 className="font-medium text-global-primary text-2xl">
                        {causeFaq.question}
                      </h5>
                      <AiFillDownCircle
                        className={`text-2xl text-global-green ${
                          openFaqNumber == causeFaq.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <p
                      className={`text-light-grey duration-300 transition-all ease-linear ${
                        openFaqNumber == causeFaq.id ? "" : "hidden"
                      }`}
                    >
                      {causeFaq.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3 shadow-hero-section p-5 rounded-md">
            <h4 className="text-center text-3xl font-semibold">
              Donate to our cause
            </h4>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-global-primary font-medium">
                Last Name *
              </label>
              <input
                type={"text"}
                id="name"
                name={"name"}
                className="w-[20rem] h-10 border border-[#7AB82F30] rounded-md p-3"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-global-primary font-medium"
              >
                Email Address *
              </label>
              <input
                type={"email"}
                id="email"
                name={"email"}
                className="w-[20rem] h-10 border border-[#7AB82F30] rounded-md p-3"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="amount"
                className="text-global-primary font-medium"
              >
                Amount *
              </label>
              <input
                type={"number"}
                id="amount"
                name={"amount"}
                className="w-[20rem] h-10 border border-[#7AB82F30] rounded-md p-3"
              />
            </div>
            <button className="bg-global-green text-white px-5 py-3 rounded-xl">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CauseDetail;
