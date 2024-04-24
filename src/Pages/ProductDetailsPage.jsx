import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const sessionData = sessionStorage.getItem("medicineList");
  const medicineData = JSON.parse(sessionData);
  const filteredData = medicineData.filter((data) => data.id == id);

  if (!filteredData || filteredData.length === 0) {
    return <p className="text-red-500">Medicine not found</p>;
  }

  const medicine = filteredData[0];
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  const handleQuantityChange = (value) => {
    if (value >= 1 && value <= medicine.quantity) {
      setQuantity(value);
    }
  };

  const handleOrder = () => {
    const updatedMedicineData = medicineData.map((data) => {
      if (data.id == id) {
        return {
          ...data,
          quantity: (data.quantity -= quantity),
        };
      } else {
        return {
          ...data,
        };
      }
    });

    sessionStorage.setItem("medicineList", JSON.stringify(updatedMedicineData));
  };

  return (
    <div
      className="bg-gray-100 h-full flex items-center justify-center"
      style={{ height: "calc(100vh - 68px)" }}
    >
      <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Product Details</h1>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">{medicine.name}</h2>
          <p className="text-gray-600 mb-2">
            Generic Name: {medicine.genericName}
          </p>
          <p className="text-gray-600 mb-2">
            Manufacturer: {medicine.manufacturer}
          </p>
          <p className="text-gray-600 mb-2">Strength: {medicine.strength}</p>
          <p className="text-gray-600 mb-2">
            Price: ${medicine.price.toFixed(2)}
          </p>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              min="1"
              max={medicine.quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              className="border border-gray-400 px-2 py-1 rounded"
            />
          </div>
          <NavLink
            to={`/payment/${medicine.id}`}
            onClick={handleOrder}
            className="bg-green hover:bg-darkGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Order {quantity} {medicine.name}
          </NavLink>
          <p className="text-gray-700 mt-2">{medicine.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
