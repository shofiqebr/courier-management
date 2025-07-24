import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../dataPanel";

const CreateParcel = () => {
  const [formData, setFormData] = useState({
    pickupAddress: "",
    deliveryAddress: "",
    parcelType: "",
    isCOD: false,
    amount: "",
    recipientName: "",
    destination: "",
    weight: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      amount: Number(formData.amount), // Convert amount to number
      weight: Number(formData.weight), // Optional: convert weight if needed
    };

    try {
      const res = await fetch(`${baseUrl}/api/parcel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        console.error("Failed to create parcel:", error);
        return;
      }

      navigate("/customer/dashboard");
    } catch (error) {
      console.error("Error creating parcel:", error);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Create New Parcel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="pickupAddress"
          value={formData.pickupAddress}
          onChange={handleChange}
          placeholder="Pickup Address"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="deliveryAddress"
          value={formData.deliveryAddress}
          onChange={handleChange}
          placeholder="Delivery Address"
          required
          className="w-full p-2 border rounded"
        />
        <select
          name="parcelType"
          value={formData.parcelType}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select Parcel Type</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Fragile">Fragile</option>
          <option value="Document">Document</option>
        </select>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isCOD"
            checked={formData.isCOD}
            onChange={handleChange}
          />
          Cash on Delivery (COD)
        </label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="recipientName"
          value={formData.recipientName}
          onChange={handleChange}
          placeholder="Recipient Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          placeholder="Destination"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateParcel;
