import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { publicRequest } from "../requestMethods";


const Prospect = () => {
  const location = useLocation();
  const prospectId = location.pathname.split("/")[3];
  const [prospect, setProspect] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getProspect = async () => {
      try {
        const res = await publicRequest.get("/prospects/find/" + prospectId);
        setProspect(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProspect();
  }, [prospectId]);

  const handleApprove = async () => {
    try {
      await publicRequest.post("/donors", {
        name: prospect.name,
        address: prospect.address,
        email:prospect.email,
        tel: prospect.tel,
        bloodgroup:prospect.bloodgroup,
        diseases: prospect.diseases,
        date: prospect.date,
        weight: prospect.weight,
      });
      await publicRequest.delete(`/prospects/${prospectId}`);
      navigate('/admin/donors');
    } catch (error) {
      console.log(error);
    }
  };

const Prospect = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] h-[80vh] w-[450px] shadow-lg">
        <h2 className="font-semibold m-[30px]">Prospect</h2>
        <ul className="m-[30px]">
          <li className="mt-[10px]">
            <strong className="font-semibold">Name: </strong> {prospect.name}
          </li>
          <li className="mt-[10px]">
            <strong className="font-semibold">Address: </strong>  {prospect.address}
          </li>
          <li className="mt-[10px]">
            <strong className="font-semibold">Tel:  </strong> {prospect.tel}
          </li>
          <li className="mt-[5px]">
            <strong className="font-semibold">Blood Type:</strong>  {prospect.bloodgroup}
          </li>
          <li className="mt-[5px]">
            <strong className="font-semibold">Disease:</strong>  {prospect.diseases}
          </li>
          <li className="mt-[5px]">
            <strong className="font-semibold">Date: </strong> {prospect.date}
          </li>
          <li className="mt-[5px]">
            <strong className="font-semibold">Weight: </strong> {prospect.weight}kg
          </li>
          
        </ul>
        <span className="block m-[10px]">
          Do you want to approve Aarav to a donor?
        </span>
        <button
          className="bg-red-400 text-white cursor-pointer p-[5px] w-[150px] m-[10px]"
          onClick={handleApprove}
        >
          Approve
        </button>
      </div>
    </div>
  )
}
}
export default Prospect;
