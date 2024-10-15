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
      toast.warning("Make sure you have filled all fields.");
    }
  };

  return (
    <div className="flex items-center justify-center h-auto my-[100px]">
      <div className="flex flex-col bg-gray-100 w-[400px] p-[50px] rounded-lg shadow-lg"> {/* Adjusted width and added rounded corners */}
        <span className="text-[20px] mb-[20px] text-center">
          Do you want to donate blood? Fill in the information.
        </span>
        
        {/* Each input field in a block to make them stack */}
        <label htmlFor="name" className="text-[18px] mt-[10px]">Name</label>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          className="w-full p-[15px] mb-[10px]" // Use mb for spacing between fields
          placeholder="John Doe"
          onChange={handleChange}
        />

        <label htmlFor="tel" className="text-[18px] mt-[10px]">Telephone</label>
        <input
          type="text"
          name="tel"
          value={inputs.tel || ""}
          className="w-full p-[15px] mb-[10px]"
          placeholder="+234 678 908"
          onChange={handleChange}
        />

        <label htmlFor="email" className="text-[18px] mt-[10px]">Email</label>
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          className="w-full p-[15px] mb-[10px]"
          placeholder="jamesdoe@gmail.com"
          onChange={handleChange}
        />

        <label htmlFor="address" className="text-[18px] mt-[10px]">Address</label>
        <input
          type="text"
          name="address"
          value={inputs.address || ""}
          className="w-full p-[15px] mb-[10px]"
          placeholder="123 Sydney AUS"
          onChange={handleChange}
        />

        <label htmlFor="weight" className="text-[18px] mt-[10px]">Weight</label>
        <input
          type="number"
          name="weight"
          value={inputs.weight || ""}
          className="w-full p-[15px] mb-[10px]"
          placeholder="50kg"
          onChange={handleChange}
        />

        <label htmlFor="bloodGroup" className="text-[18px] mt-[10px]">Blood Group</label>
        <select
          id="bloodGroup"
          name="bloodgroup"
          value={inputs.bloodgroup || ""}
          className="w-full p-[15px] mb-[10px]"
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

        <label htmlFor="age" className="text-[18px] mt-[10px]">Age</label>
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          className="w-full p-[15px] mb-[10px]"
          placeholder="30 years"
          onChange={handleChange}
        />

        <label htmlFor="diseases" className="text-[18px] mt-[10px]">Do you have any diseases?</label>
        <textarea
          name="diseases"
          value={inputs.diseases || ""}
          className="w-full p-[15px] mb-[10px]"
          placeholder="I have hypertension."
          onChange={handleChange}
        />

        <button
          className="bg-red-500 p-3 mt-3 w-full cursor-pointer text-white"
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
