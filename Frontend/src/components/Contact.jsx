import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAddProspect = async () => {
    try {
      await publicRequest.post("/", inputs);
      toast.success("You have been successfully saved to the database.");
      setInputs({});
    } catch (error) {
      console.error(error);
      toast.error("There was an error saving your details. Please try again.");
    }
  };

  console.log(inputs);

  return (
    <div className="flex items-center justify-center h-auto my-[100px] ">
      <div className="flex flex-col bg-gray-100 w-[50%] h-auto p-[50px] rounded-xl">
        <span className="text-[20px] my-[10px] font-bold">
          Do you want to donate blood? Fill in the information.
        </span>
        <label
          htmlFor="name"
          className="text-[15px] mt-[10px] font-normal mb-1"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          className="w-[350px] p-[15px] font-light rounded-md"
          placeholder="Aarav Singh"
          onChange={handleChange}
        />

        <label htmlFor="tel" className="text-[15px] mt-[10px] font-normal mb-1">
          Telephone
        </label>
        <input
          type="text"
          name="tel"
          value={inputs.tel || ""}
          className="w-[350px] p-[15px] font-light rounded-md"
          placeholder="+91 9876543210"
          onChange={handleChange}
        />

        <label
          htmlFor="email"
          className="text-[15px] mt-[10px] font-normal mb-1"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          className="w-[350px] p-[15px] font-light rounded-md"
          placeholder="aaravsingh@gmail.com"
          onChange={handleChange}
        />

        <label
          htmlFor="address"
          className="text-[15px] mt-[10px] font-normal mb-1"
        >
          Address
        </label>
        <input
          type="text"
          name="address"
          value={inputs.address || ""}
          className="w-[350px] p-[15px] font-light rounded-md"
          placeholder="Kolkata, West Bengal"
          onChange={handleChange}
        />

        <label
          htmlFor="weight"
          className="text-[15px] mt-[10px] font-normal mb-1"
        >
          Weight
        </label>
        <input
          type="number"
          name="weight"
          value={inputs.weight || ""}
          className="w-[350px] p-[15px] font-light rounded-md"
          placeholder="50kg"
          onChange={handleChange}
        />

        <label
          htmlFor="bloodGroup"
          className="text-[15px] mt-[10px] font-normal mb-1"
        >
          Blood Group
        </label>
        <select
          id="bloodGroup"
          name="bloodgroup"
          value={inputs.bloodgroup || ""}
          className="w-[350px] p-[15px] font-light rounded-md bg-white bg-opacity-60 backdrop-blur-lg border border-gray-300 text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:border-indigo-300"
          onChange={handleChange}
        >
          <option value="" className="bg-white bg-opacity-30 backdrop-blur-lg text-gray-700">Select Blood Group</option>
          <option value="A+" className="bg-white bg-opacity-10 backdrop-blur-lg text-gray-700">A+</option>
          <option value="A-" className="bg-white bg-opacity-30 backdrop-blur-lg text-gray-700">A-</option>
          <option value="B+" className="bg-white bg-opacity-30 backdrop-blur-lg text-gray-700">B+</option>
          <option value="B-" className="bg-white bg-opacity-30 backdrop-blur-lg text-gray-700">B-</option>
          <option value="AB+" className="bg-white bg-opacity-30 backdrop-blur-lg text-gray-700">AB+</option>
          <option value="AB-" className="bg-white bg-opacity-30 backdrop-blur-lg text-gray-700">AB-</option>
          <option value="O+" className="bg-white bg-opacity-30 backdrop-blur-lg text-gray-700">O+</option>
          <option value="O-" className="bg-white bg-opacity-30 backdrop-blur-lg text-gray-700">O-</option>
        </select>

        <label htmlFor="age" className="text-[15px] mt-[10px] font-normal mb-1">
          Age
        </label>
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          className="w-[350px] p-[15px] font-light rounded-md"
          placeholder="30 years"
          onChange={handleChange}
        />

        <label
          htmlFor="diseases"
          className="text-[15px] mt-[10px] font-normal mb-1"
        >
          Do you have any diseases?
        </label>
        <textarea
          name="diseases"
          value={inputs.diseases || ""}
          className="w-[350px] p-[15px] font-light rounded-md"
          placeholder="I have hypertension."
          onChange={handleChange}
        />

        <button
          className="bg-blue-400 p-3 mt-3 w-[350px] cursor-pointer text-white font-medium rounded-lg hover:bg-blue-600"
          onClick={handleAddProspect}
        >
          Submit
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
