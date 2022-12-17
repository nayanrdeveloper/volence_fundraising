import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import voielnceAbi from "../../ContractAbi/violenceAbi";
import { useContract, useSigner, useProvider } from "wagmi";
import axios from "axios";
import { ethers } from "ethers";
import { AiFillDownCircle } from "react-icons/ai";
import { NFTStorage, File } from "nft.storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";

function CreateCause() {
  const { data: signer, isError, isLoading } = useSigner();
  const [loading, setLoading] = useState<boolean>(false);
  const provider = useProvider();
  const [faqInput, setFaqInput] = useState({
    question: "",
    answer: "",
    index: 0,
  });
  const [faqList, setFaqList] = useState<any>([]);
  const [count, setCount] = useState<number>(0);
  const [faqIndex, setFaqIndex] = useState(0);
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
  const [image, setImage] = useState<any>(null);
  const createCause = async (event: any) => {
    event.preventDefault();
    try {
      setLoading(true);
      addFaq();
      const nftStorage = new NFTStorage({
        token: process.env.NEXT_PUBLIC_NFT_STORAGE_API || "",
      });
      const imageFile = image;
      const link = await nftStorage.store({
        image: image || null || undefined,
        name: causeInputs.title,
        description: causeInputs.desc,
        price: causeInputs.amount,
        category: causeInputs.category,
        deadlineDate: causeInputs.date,
        faqs: faqList || faqInput || [],
      });
      const ipfsURL = `https://ipfs.io/ipfs/${link.url.substr(7)}`;
      const price = await ethers.utils.parseUnits(
        causeInputs.amount.toString(),
        "ether"
      );
      console.log(dateToTimestamp(causeInputs.date));
      toast.info("Please wait for we upload your data in Blockchain", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
      setCauseInputs({
        title: "",
        desc: "",
        category: "",
        date: date,
        amount: 0,
        location: "",
      });
      setFaqList([]);
      toast.success("Project cause create successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
    } catch (error: any) {
      setLoading(true);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const addFaq = () => {
    if (faqInput.answer && faqInput.question) {
      faqList.push({
        question: faqInput.question,
        answer: faqInput.answer,
        index: count,
      });
      setFaqInput({
        question: "",
        answer: "",
        index: 0,
      });
      setCount(count + 1);
    }
    console.log(faqList);
    
  };

  const dateToTimestamp = (date: any) => {
    let newDate = date.split("-");
    let convertedDate = new Date(newDate[2], newDate[1] - 1, newDate[0]);
    return convertedDate.getTime();
  };
  return (
    <div className="mt-5 container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
      <ToastContainer />
      <div className="">
        <h3 className="text-4xl text-global-primary text-center dark:(text-global-yellow)">
          Create Cause
        </h3>
        <h4 className="text-center text-2xl font-normal">Create a new Cause</h4>
      </div>
      <div className="shadow-hero-section px-3 md:px-10 py-5 mt-3 md:mt-10 rounded-md">
        {/* <form onSubmit={createCause}> */}
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
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dark-border border-dashed rounded-lg cursor-pointer dark:(bg-dark-card)"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FiUploadCloud className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-global-grey-dark">
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
          <h5>Frequently Asked Questions - FAQ's (Optional)</h5>
          <input
            type={"text"}
            className="create-input"
            placeholder="Frequently Question"
            name="question"
            value={faqInput.question}
            onChange={(e) =>
              setFaqInput({ ...faqInput, question: e.currentTarget.value })
            }
          />
          <textarea
            className="create-input h-20"
            placeholder="Frequently Answer"
            name="desc"
            value={faqInput.answer}
            onChange={(e) =>
              setFaqInput({ ...faqInput, answer: e.currentTarget.value })
            }
          ></textarea>
          {faqList &&
            faqList.map((faqData: any) => {
              return (
                <div className="shadow-hero-section mt-5 px-4 py-4 dark:(border-2 border-dark-border rounded-lg)">
                  <div
                    className="flex justify-between items-center"
                    onClick={() => setFaqIndex(faqData.index)}
                  >
                    <h5 className="font-medium text-global-primary text-2xl dark:(text-white)">
                      {faqData.question}
                    </h5>
                    <AiFillDownCircle
                      className={`text-2xl text-global-green dark:(text-global-yellow)}`}
                    />
                  </div>
                  <p
                    className={`text-light-grey duration-300 transition-all ease-linear dark:(text-global-grey-dark) ${
                      faqData.index == faqIndex ? "" : "hidden"
                    }`}
                  >
                    {faqData.answer}
                  </p>
                </div>
              );
            })}
          <div className="flex gap-2">
            <button
              onClick={addFaq}
              type="button"
              className="px-2 w-60 py-2 h-14 bg-global-green text-white rounded-lg dark:(bg-global-yellow text-black)"
            >
              Add another FAQ
            </button>
            <button
              type="submit"
              onClick={createCause}
              disabled={loading ? true : false}
              className="px-4 py-2 h-14 bg-global-green text-white rounded-lg w-60 dark:(bg-global-yellow text-black)"
            >
              <div className="flex gap-2 items-center justify-center">
                {loading && (
                  <ColorRing
                    visible={true}
                    height="40"
                    width="40"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                )}
                <span>Create Cause</span>
              </div>
            </button>
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default CreateCause;
