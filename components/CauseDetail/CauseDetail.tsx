import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillDownCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import axios from "axios";
import { useSigner, useContract, useProvider } from "wagmi";
import { ethers } from "ethers";
import voielnceAbi from "../../ContractAbi/violenceAbi";

function CauseDetail() {
  const router = useRouter();
  const { causeId } = router.query;
  const { data: signer, isError } = useSigner();
  const provider = useProvider();
  const [contributeData, setContributeData] = useState({
    contributeAmount: 0,
  });
  const [campaignData, setCampaignData] = useState<any>();
  const contract = useContract({
    address: process.env.NEXT_PUBLIC_VOLENCE_CONRACT,
    abi: voielnceAbi,
    signerOrProvider: signer || provider,
  });

  const getCauseDetails = async () => {
    const blogData = await contract?.getProjectById(causeId);
    const meta = await axios.get(blogData.Img);
    console.log(meta.data);
    const imageUrl = `https://ipfs.io/ipfs/${meta.data.image.substr(7)}`;
    const targetAmount = await ethers.utils.formatUnits(
      blogData.Target.toString(),
      "ether"
    );
    const raisedAmount = await ethers.utils.formatUnits(
      blogData.CapitalRaised.toString(),
      "ether"
    );
    const data = {
      title: blogData.Title,
      desc: blogData.Description,
      image: imageUrl,
      projectId: blogData.OrgainizationId.toNumber(),
      raisedAmount: raisedAmount,
      targetAmount: targetAmount,
      category: blogData.Category,
      creator: blogData.Creator,
      deadline: blogData.Deadline.toNumber(),
      location: blogData.Location,
      faqs: meta.data.faqs,
    };
    setCampaignData(data);
    // setIsLoading(false);
  };

  const contribute = async () => {
    const price = await ethers.utils.parseUnits(
      contributeData.contributeAmount.toString(),
      "ether"
    );
    const blogData = await contract?.contribute(causeId, {
      value: price,
    });
    await blogData.wait();
    console.log(blogData);
  };
  useEffect(() => {
    if (signer && causeId) {
      getCauseDetails();
    }
  });
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
      {campaignData && (
        <div className="mt-5 flex flex-col container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
          <h3 className="text-3xl text-global-primary text-center p-5 bg-[#FAFCF6] dark:(bg-dark-card text-global-yellow border-2 border-dark-border) rounded-lg">
            Cause Details
          </h3>
          <Image
            src={campaignData.image}
            alt={"food charity"}
            height={300}
            width={300}
            className="w-full h-[20rem] md:h-[32rem] rounded-lg"
          />
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span className="text-light-grey">Raised: </span>
              <span className="text-global-orange ">
                $ {campaignData.raisedAmount}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-light-grey">Goal: </span>
              <span className="text-global-orange ">
                $ {campaignData.targetAmount}
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-3xl text-global-primary">
                {campaignData.title}
              </h3>
              <p>{campaignData.desc}</p>
              <div className="flex flex-col gap-1">
                {campaignData.faqs.map((causeFaq: any) => {
                  return (
                    <div className="shadow-hero-section mt-5 px-4 py-4 dark:(border-2 border-dark-border rounded-lg)">
                      <div
                        className="flex justify-between items-center"
                        onClick={() => setOpenFaqNumber(causeFaq.id)}
                      >
                        <h5 className="font-medium text-global-primary text-2xl dark:(text-white)">
                          {causeFaq.question}
                        </h5>
                        <AiFillDownCircle
                          className={`text-2xl text-global-green dark:(text-global-yellow) ${
                            openFaqNumber == causeFaq.id ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <p
                        className={`text-light-grey duration-300 transition-all ease-linear dark:(text-global-grey-dark) ${
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
                <label
                  htmlFor="amount"
                  className="text-global-primary font-medium dark:(text-global-grey-dark)"
                >
                  Message
                </label>
                <textarea className="w-[20rem] h-20 border border-[#7AB82F30] rounded-md p-3 dark:(border-2 border-dark-border bg-dark-card text-global-grey-dark)"></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="amount"
                  className="text-global-primary font-medium dark:(text-global-grey-dark)"
                >
                  Amount *
                </label>
                <input
                  type={"number"}
                  id="amount"
                  name={"amount"}
                  className="w-[20rem] h-10 border border-[#7AB82F30] rounded-md p-3 dark:(border-2 border-dark-border bg-dark-card text-global-grey-dark)"
                  onChange={(e) =>
                    setContributeData({
                      contributeAmount: parseFloat(e.currentTarget.value),
                    })
                  }
                />
              </div>
              <button
                onClick={contribute}
                className="bg-global-green text-white px-5 py-3 rounded-xl dark:(bg-global-yellow text-black)"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CauseDetail;
