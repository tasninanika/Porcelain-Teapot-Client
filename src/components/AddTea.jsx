import Swal from "sweetalert2";
import Header from "../Header";

const AddTea = () => {
  const handleAddTea = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const url = form.url.value;

    const newTea = { name, chef, supplier, taste, category, details, url };
    console.log(newTea);

    // send data to the server
    fetch("http://localhost:5000/tea", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTea),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tea added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <Header></Header>
      <div className="w-10/12 mx-auto my-40">
        <div className="bg-[#F4F3F0] p-10 md:p-24">
          <h2 className="text-3xl font-bold text-center mb-10">Add New Tea</h2>
          <p className="text-[#1B1A1AB3] text-center mb-10">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at <br /> its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to <br /> using Content here.
          </p>
          <form onSubmit={handleAddTea}>
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
                <input
                  className="bg-[#D2B48C] text-lg font-semibold px-8 py-3 rounded hover:bg-[#F5F4F1] transition w-full border-1 border-[#331A15]"
                  type="submit"
                  value="Add Tea"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTea;
