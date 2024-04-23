import { NavLink, useParams } from "react-router-dom";
import medicinesData from "../../medicinesData";

export default function OrderPage() {
  const { id } = useParams();

  // Find the medicine that matches the id from params
  const selectedMedicine = medicinesData.find(
    (medicine) => medicine.id === parseInt(id)
  );

  return (
    <div
      className="bg-gray-100 h-full p-5 pt-8"
      style={{ height: "calc(100vh - 68px)" }}
    >
      <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        {selectedMedicine ? (
          <div>
            <h1 className="text-2xl font-semibold mb-4">Order Placed</h1>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">
                {selectedMedicine.name}
              </h2>
              <p className="text-gray-600 mb-2">
                Price: ${selectedMedicine.price}
              </p>
              <p className="text-gray-600 mb-4">
                Description: {selectedMedicine.description}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-red-500">Medicine not found</p>
        )}
      </div>
      <NavLink
        to="/"
        className="block text-center mt-4 text-green hover:text-darkGreen underline"
      >
        Back to Home Page
      </NavLink>
    </div>
  );
}
