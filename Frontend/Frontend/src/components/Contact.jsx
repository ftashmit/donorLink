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
      await publicRequest.post("/prospects", inputs);
      toast.success("You have been successfully saved to the database.");
      setInputs({});
    } catch (error) {
      console.error(error);
      toast.warning("Make sure you have filled all fields.");
    }
  };

  console.log(inputs);

  return (
    <div className="flex items-center justify-center h-auto my-[100px]">
      <div className="flex flex-col bg-gray-100 w-[50%] h-auto p-[50px]">
        <span className="text-[20px] my-[20px]">
          Do you want to donate blood? Fill in the information.
        </span>
        <label htmlFor="name" className="text-[18px] mt-[10px]">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          className="w-[350px] p-[15px]"
          placeholder="Aarav Singh"
          onChange={handleChange}
        />

        <label htmlFor="tel" className="text-[18px] mt-[10px]">
          Telephone
        </label>
        <input
          type="text"
          name="tel"
          value={inputs.tel || ""}
          className="w-[350px] p-[15px]"
          placeholder="+91 9876543210"
          onChange={handleChange}
        />

        <label htmlFor="email" className="text-[18px] mt-[10px]">
          Email
        </label>
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          className="w-[350px] p-[15px]"
          placeholder="aaravsingh@gmail.com"
          onChange={handleChange}
        />

        <label htmlFor="address" className="text-[18px] mt-[10px]">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={inputs.address || ""}
          className="w-[350px] p-[15px]"
          placeholder="Kolkata, West Bengal"
          onChange={handleChange}
        />

        <label htmlFor="weight" className="text-[18px] mt-[10px]">
          Weight
        </label>
        <input
          type="number"
          name="weight"
          value={inputs.weight || ""}
          className="w-[350px] p-[15px]"
          placeholder="50kg"
          onChange={handleChange}
        />

        <label htmlFor="bloodGroup" className="text-[18px] mt-[10px]">
          Blood Group
        </label>
        <select
          id="bloodGroup"
          name="bloodgroup"
          value={inputs.bloodgroup || ""}
          className="w-[350px] p-[15px]"
          onChange={handleChange}
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <label htmlFor="age" className="text-[18px] mt-[10px]">
          Age
        </label>
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          className="w-[350px] p-[15px]"
          placeholder="30 years"
          onChange={handleChange}
        />

        <label htmlFor="diseases" className="text-[18px] mt-[10px]">
          Do you have any diseases?
        </label>
        <textarea
          name="diseases"
          value={inputs.diseases || ""}
          className="w-[350px] p-[15px]"
          placeholder="I have hypertension."
          onChange={handleChange}
        />

        <button
          className="bg-blue-500 p-3 mt-3 w-[350px] cursor-pointer text-white"
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
