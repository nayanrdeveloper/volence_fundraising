import React from "react";
import { FiUploadCloud } from "react-icons/fi";

function CreateCategory() {
  return (
    <div className="mt-5 container gap-4 px-3 md:px-10 py-5 mt-3 md:mt-10">
      <div className="">
        <h3 className="text-4xl text-global-primary text-center">
          Create Category
        </h3>
      </div>
      <div className="shadow-hero-section px-3 md:px-10 py-5 mt-3 md:mt-10 rounded-md">
        <form>
          <div className="flex flex-col gap-3">
            <input
              type={"text"}
              className="create-input"
              placeholder="Category Name"
              name="name"
              // value={causeInputs.title}
              // onChange={(e) =>
              //   setCauseInputs({ ...causeInputs, title: e.currentTarget.value })
              // }
            />
            <textarea
              className="create-input h-20"
              placeholder="Category Description"
              name="desc"
              // value={causeInputs.desc}
              // onChange={(e) =>
              //   setCauseInputs({ ...causeInputs, desc: e.currentTarget.value })
              // }
            ></textarea>
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
                  // onChange={(e) =>
                  //   setImage(e.currentTarget.files && e.currentTarget.files[0])
                  // }
                />
              </label>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-global-green text-white rounded-lg w-44"
            >
              Create Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCategory;
