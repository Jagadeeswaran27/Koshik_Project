import { useEffect, useState } from "react";
import medicinesData from "../../medicinesData";
import { NavLink } from "react-router-dom";

const MedicinesPage = () => {
  const [medicineList, setMedicineList] = useState([]);

  useEffect(() => {
    const storedMedicineList = JSON.parse(
      sessionStorage.getItem("medicineList")
    );

    if (storedMedicineList) {
      setMedicineList(storedMedicineList);
    } else {
      setMedicineList(medicinesData);
      sessionStorage.setItem("medicineList", JSON.stringify(medicinesData));
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {medicineList.map((medicine) => (
          <div
            key={medicine.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              className="w-full h-48 object-cover object-center"
              src={medicine.imageUrl}
              alt={medicine.name}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {medicine.name}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {medicine.genericName}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Manufacturer: {medicine.manufacturer}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Strength: {medicine.strength}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Price: ${medicine.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Quantity: {medicine.quantity}
              </p>
              <p className="text-sm text-gray-700">{medicine.description}</p>
              <NavLink
                to={`/medicine/${medicine.id}/desc`}
                className="block mt-4 text-center bg-green hover:bg-darkGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
              >
                Order Now!
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicinesPage;
