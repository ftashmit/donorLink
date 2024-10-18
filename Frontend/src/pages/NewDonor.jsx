import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewDonor = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAddDonors = async () => {
    try {
      await publicRequest.post("/donors", inputs);
      setInputs({});
      toast.success("Donor has been successfully saved to the database.");
    } catch (error) {
      toast.warning("Make sure you have fill all fields");
    }
  };
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New Donor</h2>
      <div className="flex">
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              placeholder="James Kruger"
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Michigan, USA"
              value={inputs.address || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Tel</label>
            <input
              type="text"
              name="tel"
              value={inputs.tel || ""}
              onChange={handleChange}
              placeholder="+123 568 908"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Blood Pressure</label>
            <input
              type="number"
              name="bloodpressure"
              placeholder="120"
              value={inputs.bloodpressure || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Blood Group</label>
            <select
              id="bloodGroup"
              name="bloodgroup"
              value={inputs.bloodgroup || ""}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
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
          </div>

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
              placeholder="jameskruger@gmail.com"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
        </div>
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Weight</label>
            <input
              type="Number"
              name="weight"
              value={inputs.weight || ""}
              onChange={handleChange}
              placeholder="60 kg"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Date</label>
            <input
              type="date"
              name="date"
              value={inputs.date || ""}
              placeholder="20/06/2024"
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Age</label>
            <input
              type="number"
              name="age"
              value={inputs.age || ""}
              onChange={handleChange}
              placeholder="30 years"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Diseases</label>
            <textarea
              type="text"
              name="diseases"
              value={inputs.diseases || ""}
              onChange={handleChange}
              placeholder="Hypertension"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <button
            className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px]"
            onClick={handleAddDonors}
          >
            Create
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default NewDonor;
