import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import voielnceAbi from "../../ContractAbi/violenceAbi";
import { useContract, useSigner, useProvider } from "wagmi";
import axios from "axios";
import { ethers } from "ethers";
import { NFTStorage, File } from "nft.storage";

function CreateCause() {
  const { data: signer, isError, isLoading } = useSigner();
  const provider = useProvider();
  const contract = useContract({
    address: process.env.NEXT_PUBLIC_VOLENCE_CONRACT,
    abi: voielnceAbi,
    signerOrProvider: signer || provider,
  });
  let curr = new Date();
  curr.setDate(curr.getDate() + 28);
  let date = curr.toISOString().substring(0, 10);
  const [causeInputs, setCauseInputs] = useState({
    title: "",
    desc: "",
    category: "",
    date: date,
    amount: 0,
    location: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const createCause = async (event: any) => {
    event.preventDefault();
    const nftStorage = new NFTStorage({
      token: process.env.NEXT_PUBLIC_NFT_STORAGE_API || "",
    });
    const imageFile = event.target.file.files[0];
    const link = await nftStorage.store({
      image: imageFile,
      name: causeInputs.title,
      description: causeInputs.desc,
      price: causeInputs.amount,
      category: causeInputs.category,
      deadlineDate: causeInputs.date,
    });
    const ipfsURL = `https://ipfs.io/ipfs/${link.url.substr(7)}`;
    const price = await ethers.utils.parseUnits(
      causeInputs.amount.toString(),
      "ether"
    );
      console.log(dateToTimestamp(causeInputs.date));
      
    let NFTTranction = await contract?.createCauseProject(
      causeInputs.title,
      causeInputs.desc,
      Math.abs(dateToTimestamp(causeInputs.date)),
      price,
      1,
      causeInputs.location,
      causeInputs.category,
      ipfsURL
    );
    await NFTTranction.wait();
    console.log(NFTTranction);
  };

  const dateToTimestamp = (date: any) => {
    let newDate = date.split("-");
    let convertedDate = new Date(newDate[2], newDate[1] - 1, newDate[0]);
    return convertedDate.getTime();
  };
  return (
    <div className="mt-5 container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
      <div className="">
        <h3 className="text-4xl text-global-primary text-center">
          Create Cause
        </h3>
        <h4 className="text-center text-2xl font-normal">Create a new Cause</h4>
      </div>
      <div className="shadow-hero-section px-3 md:px-10 py-5 mt-3 md:mt-10 rounded-md">
        <form onSubmit={createCause}>
          <div className="flex flex-col gap-3">
            <input
              type={"text"}
              className="create-input"
              placeholder="Cause Title"
              name="title"
              value={causeInputs.title}
              onChange={(e) =>
                setCauseInputs({ ...causeInputs, title: e.currentTarget.value })
              }
            />
            <textarea
              className="create-input h-20"
              placeholder="Cause Description"
              name="desc"
              value={causeInputs.desc}
              onChange={(e) =>
                setCauseInputs({ ...causeInputs, desc: e.currentTarget.value })
              }
            ></textarea>
            <div className="flex gap-2">
              <input
                type={"text"}
                className="create-input"
                placeholder="Category"
                name="category"
                value={causeInputs.category}
                onChange={(e) =>
                  setCauseInputs({
                    ...causeInputs,
                    category: e.currentTarget.value,
                  })
                }
              />
              <input
                type={"date"}
                className="create-input"
                placeholder="Deadline date"
                name="deadlineDate"
                value={causeInputs.date}
                onChange={(e) =>
                  setCauseInputs({
                    ...causeInputs,
                    date: e.currentTarget.value || date,
                  })
                }
              />
            </div>
            <div className="flex gap-2">
              <input
                type={"number"}
                className="create-input"
                placeholder="Target Amount"
                min={0.01}
                name="targetAmount"
                value={causeInputs.amount}
                onChange={(e) =>
                  setCauseInputs({
                    ...causeInputs,
                    amount: parseFloat(e.currentTarget.value),
                  })
                }
              />
              <input
                type={"text"}
                className="create-input"
                placeholder="Location"
                name="location"
                value={causeInputs.location}
                onChange={(e) =>
                  setCauseInputs({
                    ...causeInputs,
                    location: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FiUploadCloud className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  name="file"
                  onChange={(e) =>
                    setImage(e.currentTarget.files && e.currentTarget.files[0])
                  }
                />
              </label>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-global-green text-white rounded-lg w-32"
            >
              Create Cause
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCause;
