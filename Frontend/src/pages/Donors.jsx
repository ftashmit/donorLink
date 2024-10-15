import { FaTrash } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const Donors = () => {
  const [donors, setDonors] = useState([]);

  useState(() => {
    const getAllDonors = async () => {
      try {
        const res = await publicRequest.get("/donors");
        setDonors(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllDonors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/donors/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 90 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "bloodgroup", headerName: "BloodType", width: 130 },
    { field: "diseases", headerName: "Diseases", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/donor/${params.row._id}`}>
              <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
                Edit
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <FaTrash
              className="text-red-500 cursor-pointer m-2"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px]">All Donors</h1>

        <Link to="/admin/newdonor">
          <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">
            New Donor
          </button>
        </Link>
      </div>
      <div className="mx-[30px]">
        <DataGrid
          columns={columns}
          checkboxSelection
          getRowId={(row) => row._id}
          rows={donors}
        />
        ;
      </div>
    </div>
  );
};

export default Donors;