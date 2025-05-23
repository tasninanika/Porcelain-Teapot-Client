import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TeaCard = ({ tea }) => {
  const { _id, name, chef, url } = tea;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tea/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Tea has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F4F3F0] p-6 rounded-lg shadow-md flex items-center justify-between w-[500px] h-[250px]">
      {/* Image */}
      <div className="w-1/3">
        <img src={url} alt={name} className="w-36 h-auto object-contain" />
      </div>

      {/* Text Content */}
      <div className="w-2/3 px-6 flex flex-col md:flex-row md:items-center justify-between">
        <div className="space-y-2">
          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-bold">Price:</span> 890 Taka
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 mt-4 md:mt-0">
          <Link
            to={`/updateTea/${_id}`}
            className="btn bg-[#D2B48C] p-2 rounded hover:opacity-80 flex items-center justify-center"
          >
            <FaEye className="text-white" />
          </Link>

          <button className="btn bg-[#3C3C3C] p-2 rounded hover:opacity-80">
            <FaPen className="text-white" />
          </button>

          <button
            className="btn bg-red-500 p-2 rounded hover:opacity-80"
            onClick={() => handleDelete(_id)}
          >
            <FaTrash className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeaCard;
