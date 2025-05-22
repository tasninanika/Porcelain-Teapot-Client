import React from "react";

const AddTea = () => {
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-bold text-center mb-10">Add Tea</h2>
      <form action="">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="flex gap-10">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-4">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter tea name"
                className="input w-96"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-4">
                Chef
              </label>
              <input
                type="text"
                placeholder="Enter tea name"
                className="input w-96"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col">
              <label htmlFor="" className="mb-4">
                Supplier
              </label>
              <input
                type="text"
                placeholder="Enter tea name"
                className="input w-96"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="mb-4">
                Taste
              </label>
              <input
                type="text"
                placeholder="Enter tea name"
                className="input w-96"
              />
            </div>
          </div>
          <button className="btn bg-amber-200">Add Tea</button>
        </div>
      </form>
    </div>
  );
};

export default AddTea;
