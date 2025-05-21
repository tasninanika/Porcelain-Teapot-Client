import React from "react";

const AddTea = () => {
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add Tea</h2>
      <form action="">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="flex gap-10">
            <div className="flex flex-col">
              <label htmlFor="">Tea Name</label>
              <input
                type="text"
                placeholder="Enter tea name"
                className="input w-96"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Available quantity</label>
              <input
                type="text"
                placeholder="Enter tea name"
                className="input w-96"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col">
              <label htmlFor="">Supplier</label>
              <input
                type="text"
                placeholder="Enter tea name"
                className="input w-96"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Details</label>
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
