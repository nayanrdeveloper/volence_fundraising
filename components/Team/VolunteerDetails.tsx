import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSigner, useContract, useProvider } from "wagmi";
import { ethers } from "ethers";
import voielnceAbi from "../../ContractAbi/violenceAbi";

function VolunteerDetails() {
  const router = useRouter();
  const { volunteerId } = router.query;
  const { data: signer, isError } = useSigner();
  const provider = useProvider();
  const [volunteerData, setVolunteerData] = useState<any>();
  const contract = useContract({
    address: process.env.NEXT_PUBLIC_VOLENCE_CONRACT,
    abi: voielnceAbi,
    signerOrProvider: signer || provider,
  });

  const getVolunteerDetails = async () => {
    const volunteerInfo = await contract?.getVolunterById(volunteerId);
    const meta = await axios.get(volunteerInfo.image);
    const imageUrl = `https://ipfs.io/ipfs/${meta.data.image.substr(7)}`;
    const data = {
      name: volunteerInfo.name,
      desc: volunteerInfo.desc,
      image: imageUrl,
      volunteerId: volunteerId,
      role: volunteerInfo.role,
      email: volunteerInfo.email,
      phone: volunteerInfo.phone,
      location: volunteerInfo.location,
      active: volunteerInfo.active,
      address: volunteerInfo.volunteerAddress,
    };
    setVolunteerData(data);
    // setIsLoading(false);
  };

  useEffect(() => {
    if (signer && volunteerId){
        getVolunteerDetails();
    }
  })
  return (
    <div>
      <div className="mt-5 flex flex-col container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
        <h3 className="text-3xl text-global-primary text-center p-5 bg-[#FAFCF6]">
          Volunteer Details
        </h3>
        {volunteerData && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Image
                src={volunteerData.image}
                alt={"food charity"}
                height={300}
                width={300}
                className="w-full h-[20rem] md:h-[32rem] rounded-lg"
              />
            </div>
            <div className="">
              <div className="flex flex-col gap-3 justify-between">
                <h4 className="text-3xl font-semibold">{volunteerData.name}</h4>
                <h5 className="text-2xl">{volunteerData.role}</h5>
                <div>
                  <span className="font-semibold text-global-primary">
                    Location:{" "}
                  </span>
                  <span className="text-light-grey">
                    {volunteerData.location}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-global-primary">
                    Email:{" "}
                  </span>
                  <span className="text-light-grey">
                    {volunteerData.email}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-global-primary">
                    Phone:{" "}
                  </span>
                  <span className="text-light-grey">{volunteerData.phone}</span>
                </div>
                <div>
                  <span className="font-semibold text-global-primary">
                    Account:{" "}
                  </span>
                  <span className="text-light-grey">
                   {volunteerData.address}
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur obcaecati similique cupiditate totam dicta esse
                  repudiandae, officia accusamus iusto illo?
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VolunteerDetails;
