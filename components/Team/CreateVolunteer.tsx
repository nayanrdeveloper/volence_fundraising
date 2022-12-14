import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { useSigner, useContract } from "wagmi";
import voielnceAbi from "../../ContractAbi/violenceAbi";
import { ethers } from "ethers";
import { NFTStorage, File } from "nft.storage";
import volunteer from "../../pages/volunteer";

function CreateVolunteer() {
  const { data: signer, isError, isLoading } = useSigner();
  const contract = useContract({
    address: process.env.NEXT_PUBLIC_VOLENCE_CONRACT,
    abi: voielnceAbi,
    signerOrProvider: signer,
  });

  const [volunteerInputs, setVolunteerInputs] = useState({
    name: "",
    role: "",
    desc: "",
    location: "",
    email: "",
    phone: "",
  });

  const registerVolunteer = async (event: any) => {
    event.preventDefault();
    const nftStorage = new NFTStorage({
        token: process.env.NEXT_PUBLIC_NFT_STORAGE_API || "",
      });
      const imageFile = event.target.file.files[0];
      const link = await nftStorage.store({
        image: imageFile,
        name: volunteerInputs.name,
        description: volunteerInputs.desc,
      });
      const ipfsURL = `https://ipfs.io/ipfs/${link.url.substr(7)}`;

      let volunteerTransaction = await contract?.registerasAsVolunteer(
        volunteerInputs.name,
        volunteerInputs.desc,
        ipfsURL,
        volunteerInputs.role,
        volunteerInputs.location,
        volunteerInputs.email,
        volunteerInputs.phone
      )

      await volunteerTransaction.wait();
      console.log(volunteerTransaction);
  }
  const [volunteerImage, setVolunteerImage] = useState<File | null>(null);
  return (
    <div className="mt-5 container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
      <div className="">
        <h3 className="text-4xl text-global-primary text-center">
          Register as a Volunteer
        </h3>
      </div>
      <div className="shadow-hero-section px-3 md:px-10 py-5 mt-3 md:mt-10 rounded-md">
        <form onSubmit={registerVolunteer}>
          <div className="flex flex-col gap-3">
            <input
              type={"text"}
              className="create-input"
              placeholder="Name"
              name="name"
              value={volunteerInputs.name}
              onChange={(e) =>
                setVolunteerInputs({
                  ...volunteerInputs,
                  name: e.currentTarget.value,
                })
              }
            />
            <textarea
              className="create-input h-20"
              placeholder="Role description"
              name="desc"
              value={volunteerInputs.desc}
                onChange={(e) =>
                  setVolunteerInputs({
                    ...volunteerInputs,
                    desc: e.currentTarget.value,
                  })
                }
            ></textarea>
            <div className="flex gap-2">
              <input
                type={"text"}
                className="create-input"
                placeholder="Role"
                name="role"
                value={volunteerInputs.role}
                onChange={(e) =>
                  setVolunteerInputs({
                    ...volunteerInputs,
                    role: e.currentTarget.value,
                  })
                }
              />
              <input
                type={"text"}
                className="create-input"
                placeholder="Location"
                name="location"
                value={volunteerInputs.location}
                onChange={(e) =>
                  setVolunteerInputs({
                    ...volunteerInputs,
                    location: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="flex gap-2">
              <input
                type={"email"}
                className="create-input"
                placeholder="Email"
                name="email"
                value={volunteerInputs.email}
                onChange={(e) =>
                  setVolunteerInputs({
                    ...volunteerInputs,
                    email: e.currentTarget.value,
                  })
                }
              />
              <input
                type={"text"}
                className="create-input"
                placeholder="Phone Number"
                name="phone"
                value={volunteerInputs.phone}
                onChange={(e) =>
                  setVolunteerInputs({
                    ...volunteerInputs,
                    phone: e.currentTarget.value,
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
                      setVolunteerImage(e.currentTarget.files && e.currentTarget.files[0])
                    }
                />
              </label>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-global-green text-white rounded-lg w-32"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateVolunteer;
