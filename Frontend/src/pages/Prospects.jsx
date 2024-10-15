import { FaTrash } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
const Prospects = () => {

  const [prospects, setDonors] = useState([]);

  useEffect(() =>{
    const getAllProspects = async() =>{
          try {
            const res = await publicRequest.get("/prospects",{
              
            });
            setDonors(res.data)
          } catch (error) {
            console.log(error)
          }
    }
    getAllProspects();
  }, [])

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "bloodgroup", headerName: "BloodType", width: 130 },
    { field: "diseases", headerName: "Disease", width: 150 },

    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/prospect/${params.row._id}`}>
              <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
                Approve
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: () => {
        return (
          <>
            <FaTrash className="text-red-500 cursor-pointer m-2" />
          </>
        );
      },
    },
  ];

  
  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px]">All Prospects</h1>
      </div>
      <div className="mx-[30px]">
        <DataGrid columns={columns} 
        checkboxSelection 
        getRowId={(row) => row._id}
        rows={prospects} />;
      </div>
    </div>
  );
};

export default Prospects;