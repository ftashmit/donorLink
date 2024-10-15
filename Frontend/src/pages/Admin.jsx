import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userRedux";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [bloodGroupData, setBloodGroupData] = useState([]);

  useEffect(() => {
    const getBloodGroupStats = async () => {
      try {
        const res = await publicRequest.get("/donors/stats");
        const transformedData = res.data.map((item, index) => ({
          id: index,
          value: item.count,
          label: `Blood Group ${item._id}`,
        }));
        setBloodGroupData(transformedData);
      } catch (error) {
        console.log(error);
      }
    };
  
    getBloodGroupStats();
  }, []);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div className="flex  justify-between h-[100vh]">
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          <div className="bg-gray-50 h-[300px] m-[30px] w-[350px] shadow-md">
            <div className="h-[200px] w-[200px]">
              <Gauge
                value={65}
                startAngle={10}
                endAngle={360}
                innerRadius="80%"
                outerRadius="100%"
              />
            </div>
            <h2 className="font-semibold text-[18px] m-[20px]">Prospects.</h2>
          </div>
          <div className="bg-gray-50 h-[300px] m-[30px] w-[350px] shadow-md">
            <div className="h-[200px] w-[200px]  m-[30px] border-[20px] border-red-400 border-solid rounded-full">
              <div className="flex items-center justify-center m-[30px]">
                <h2 className="font-bold text-[25px] m-[40px]">100</h2>
              </div>
              <h2 className="flex items-center font-semibold justify-center text-[18px] m-[50px]">
                Donors
              </h2>
            </div>
          </div>
        </div>

        <div className="m-[40px]">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={300}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>
      </div>

      <div className="flex flex-col bg-gray-100 m-[20px] h-[700px] w-[300px] shadow-xl">
        <div className="flex items-center p-[10px]">
          <FaUser className="mr-3" />
          <span className="cursor-pointer font-semibold" onClick={handleLogout}>
            Logout
          </span>
        </div>
        <div className="m-[40px]">
          <h3 className="font-semibold">Recent Donors</h3>
          <ul>
            <li>1.James Lisley</li>
            <li>2.Joel Lispler</li>
            <li>3.James Lisley</li>
            <li>4.Joel Lispler</li>
          </ul>
        </div>
        {bloodGroupData.length === 0 ? <span>Loading data...</span> :
        <PieChart
        series={[
          {
            data: bloodGroupData,
            innerRadius: 50,
            outerRadius: 70,
            paddingAngle: 7,
            cornerRadius: 5,
            startAngle: -90,
            endAngle: 180,
            cx: 150,
            cy: 100,
          },
        ]}
      />
        
        }
      </div>
    </div>
  );
};

export default Admin;