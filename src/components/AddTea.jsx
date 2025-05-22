import React from "react";

const AddTea = () => {
  return (
    <div className="bg-[#F4F3F0] p-10 md:p-24">
      <h2 className="text-3xl font-bold text-center mb-10">Add Tea</h2>
      <form>
        <div className="space-y-10 max-w-5xl mx-auto">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter tea name"
                className="w-full p-3 rounded bg-white"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Chef</label>
              <input
                type="text"
                name="chef"
                placeholder="Enter chef name"
                className="w-full p-3 rounded bg-white"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block mb-2 font-semibold">Supplier</label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter supplier name"
                className="w-full p-3 rounded bg-white"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Taste</label>
              <input
                type="text"
                name="taste"
                placeholder="Enter taste"
                className="w-full p-3 rounded bg-white"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="block mb-2 font-semibold">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Enter category"
                className="w-full p-3 rounded bg-white"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Details</label>
              <input
                type="text"
                name="details"
                placeholder="Enter details"
                className="w-full p-3 rounded bg-white"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-2 font-semibold">Photo URL</label>
            <input
              type="text"
              name="url"
              placeholder="Enter photo URL"
              className="w-full p-3 rounded bg-white"
            />
          </div>

          <div className="text-center">
            <button className="bg-[#D2B48C] text-lg font-semibold px-8 py-3 rounded hover:bg-[#F5F4F1] transition w-full">
              Add Tea
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTea;
