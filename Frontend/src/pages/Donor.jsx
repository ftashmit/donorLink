import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const Donor = () => {
    const [donor, setDonor] = useState({});
    const location= useLocation();
    const donorId=location.pathname.split("/")[3];

    useEffect(() => {
        const getAllDonors=async() =>{
          try {
            const res= await publicRequest.get('/donors/find/${donorId}')
            setDonor(res.data);
          } catch (error) {
            console.log(error)
          }
        }
        getAllDonors();
    })
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
    <h2 className="font-semibold">Donor</h2>
    <div className="flex">
      <div className="m-[20px]">
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            placeholder={donor.name}
            onChange={handleChange}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            placeholder={donor.address}
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
            placeholder={donor.tel}
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
            placeholder={donor.email}
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
            placeholder={donor.weight}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
          />
        </div>

        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Date</label>
          <input
            type="date"
            name="date"
            value={inputs.date || ""}
            placeholder={donor.date}
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
            placeholder={donor.age}
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
            placeholder={donor.diseases}
            className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
          />
        </div>
        <button
          className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px]"
          onClick={handleAddDonors}
        >
        Update
        </button>
        <ToastContainer />
      </div>
    </div>
  </div>
);
};


export default Donor
