import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const Donor = () => {
  const location = useLocation();
  const donorId = location.pathname.split("/")[3];
  const [donor, setDonor] = useState({});
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    const getDonor = async () => {
      try {
        const res = await publicRequest.get("/donors/find/" + donorId);
        setDonor(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDonor();
  }, [donorId]);

  const handleUpdate = async () => {
    try {
      await publicRequest.put(`/donors/${donor._id}`, inputs);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] p-[20px] h-[80vh] w-[450px] shadow-lg">
        <h2 className="font-semibold">Donor</h2>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            placeholder={donor.name}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] border-solid outline-none p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Address</label>
          <input
            type="text"
            name={donor.address}
            placeholder="Michigan, USA"
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Tel</label>
          <input
            type="text"
            name="tel"
            placeholder={donor.tel}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Blood Group</label>
          <input
            type="text"
            name="bloodgroup"
            onChange={handleChange}
            placeholder={donor.bloodgroup}
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            placeholder={donor.email}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
      </div>
      <div className="p-[20px] h-[80vh] w-[450px] shadow-lg m-[20px]">
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Weight</label>
          <input
            type="number"
            name="weight"
            placeholder={donor.weight}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>

        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Date</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            placeholder={donor.date}
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
        <div className="flex flex-col my-[20px]">
          <label htmlFor="">Diseases</label>
          <textarea
            type="text"
            name="disease"
            placeholder={donor.diseases}
            onChange={handleChange}
            className="border-b-2 border-b-[#555] outline-none border-solid p-[10px] w-[300px]"
          />
        </div>
        <button
          className="bg-[#444242] cursor-pointer text-white p-[10px] w-[300px]"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Donor;
