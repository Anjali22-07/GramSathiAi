import { useState } from "react";
import api from "../Services/api";

function EligibilityForm() {

    const [formData, setFormData] = useState({
        gender: "",
        age: "",
        income: "",
        occupation: "",
        state: "",
        category: "",
        isBPL: false,
        isDisable: false
    });

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });

    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await api.post("/eligible", formData);
        setResult(response.data);
    } catch (error) {
        console.error(error);
    }
};

    return (
      <div classname="max-w-5xl w-full mx-auto px-6">
  <div className="bg-neutral-primary-soft border-t-6 border-gray-600 shadow-lg rounded-xl p-8">

    <h1 className="text-4xl font-bold text-center text-gray-700">
    📋 Check Your Eligibility
    </h1>

    <p className="text-center text-gray-300 mt-2 mb-8">
        Answer a few questions and discover government schemes you may qualify for.
    </p>

    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >

      {/* Gender */}
      <div>
        <label className="block mb-2 font-semibold">Gender</label>

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="ANY">Any</option>
        </select>
      </div>

      {/* Age */}

      <div>
        <label className="block mb-2 font-semibold">Age</label>

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter Age"
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Income */}

      <div>
        <label className="block mb-2 font-semibold">
          Annual Income
        </label>

        <input
          type="number"
          name="income"
          value={formData.income}
          onChange={handleChange}
          placeholder="Enter Income"
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Occupation */}

      <div>
        <label className="block mb-2 font-semibold">
          Occupation
        </label>

        <select
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="">Select Occupation</option>
          <option value="STUDENT">Student</option>
          <option value="FARMER">Farmer</option>
          <option value="UNEMPLOYED">Unemployed</option>
          <option value="EMPLOYED">Employed</option>
          <option value="SELF_EMPLOYED">Self Employed</option>
          <option value="ANY">Any</option>
        </select>
      </div>

      {/* State */}

      <div>
        <label className="block mb-2 font-semibold">
          State
        </label>

        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter State"
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Category */}

      <div>
        <label className="block mb-2 font-semibold">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="">Select Category</option>
          <option value="GENERAL">General</option>
          <option value="OBC">OBC</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
          <option value="EWS">EWS</option>
          <option value="ANY">Any</option>
        </select>
      </div>

      {/* Checkboxes */}

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isBPL"
          checked={formData.isBPL}
          onChange={handleChange}
        />
        <label>BPL Family</label>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isDisable"
          checked={formData.isDisable}
          onChange={handleChange}
        />
        <label>Person with Disability</label>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700"
        >
          Find Schemes
        </button>
      </div>

    </form>
   </div>
  </div>
);

}

export default EligibilityForm;