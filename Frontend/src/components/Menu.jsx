import { useState } from "react";
import {
  FaBox,
  FaCalendarAlt,
  FaChartBar,
  FaClipboard,
  FaClipboardList,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = () => {
 
  const [activeLink, setActiveLink] = useState("/admin");


  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className=" h-auto bg-gray-100 p-[20px] w-[350px] shadow-lg">
      <ul className="flex flex-col items-start justify-start mt-[20px] pl-[20px]">
        <Link to="/admin" onClick={() => handleLinkClick("/admin")}>
          <li
            className={`flex items-center  text-[20px]  cursor-pointer mt-[20px] transition-colors duration-300 ${
              activeLink === "/admin"
                ? "bg-red-300 p-[10px] w-[200px] text-white"
                : ""
            }`}
          >
            <FaHome
              className={`mr-[15px] ${
                activeLink === "/admin" ? "text-white" : "text-red-500"
              } `}
            />
            Home
          </li>
        </Link>
        <Link to="/profile" onClick={() => handleLinkClick("/profile")}>
          <li
            className={`flex items-center text-gray-800 text-[20px] hover:text-yellow-400 cursor-pointer mt-[20px] transition-colors duration-300 ${
              activeLink === "/profile"
                ? "bg-red-400 p-[10px] w-[200px] text-white"
                : ""
            }`}
          >
            <FaUser className="mr-[15px] text-red-500" />
            Profile
          </li>
        </Link>
        <hr className="w-full my-[20px] border-gray-300" />
        <Link
          to="/admin/donors"
          onClick={() => handleLinkClick("/admin/donors")}
        >
          <li
            className={`flex items-center  text-[20px]  cursor-pointer mt-[20px] transition-colors duration-300 ${
              activeLink === "/admin/donors"
                ? "bg-red-300 p-[10px] w-[200px] text-white"
                : ""
            }`}
          >
            <FaBox
              className={`mr-[15px] ${
                activeLink === "/admin/donors" ? "text-white" : "text-red-500"
              } `}
            />
            Donors
          </li>
        </Link>
        <Link
          to="/admin/prospects"
          onClick={() => handleLinkClick("/admin/prospects")}
        >
          <li
            className={`flex items-center  text-[20px]  cursor-pointer mt-[20px] transition-colors duration-300 ${
              activeLink === "/admin/prospects"
                ? "bg-red-300 p-[10px] w-[200px] text-white"
                : ""
            }`}
          >
            <FaUsers
              className={`mr-[15px] ${
                activeLink === "/admin/prospects" ? "text-white" : "text-red-500"
              } `}
            />
            Prospects
          </li>
        </Link>
        <Link to="/orders" onClick={() => handleLinkClick("/orders")}>
          <li
            className={`flex items-center text-gray-800 text-[20px] hover:text-yellow-400 cursor-pointer mt-[20px] transition-colors duration-300 ${
              activeLink === "/orders"
                ? "bg-red-400 p-[10px] w-[200px] text-white"
                : ""
            }`}
          >
            <FaClipboardList className="mr-[15px] text-red-500" />
            Orders
          </li>
        </Link>
        <hr className="w-full my-[20px] border-gray-300" />
        <Link to="/elements" onClick={() => handleLinkClick("/elements")}>
          <li
            className={`flex items-center text-gray-800 text-[20px] hover:text-yellow-400 cursor-pointer mt-[20px] transition-colors duration-300 ${
              activeLink === "/elements"
                ? "bg-red-400 p-[10px] w-[200px] text-white"
                : ""
            }`}
          >
            <FaElementor className="mr-[15px] text-red-500" />
            Elements
          </li>
        </Link>
        <Link to="/settings" onClick={() => handleLinkClick("/settings")}>
          <li
            className={`flex items-center text-gray-800 text-[20px] hover:text-yellow-400 cursor-pointer mt-[20px] transition-colors duration-300 ${
              activeLink === "/settings"
                ? "bg-red-400 p-[10px] w-[200px] text-white"
                : ""
            }`}
          >
            <FaCog className="mr-[15px] text-red-500" />
            Settings
          </li>
        </Link>
        <Link to="/backups" onClick={() => handleLinkClick("/backups")}>
          <li
            className={`flex items-center text-gray-800 text-[20px] hover:text-yellow-400 cursor-pointer mt-[20px] transition-colors duration-300 ${
              activeLink === "/backups"
                ? "bg-red-400 p-[10px] w-[200px] text-white"
                : ""
            }`}
          >
            <FaHdd className="mr-[15px] text-red-500" />
            Backups
          </li>
        </Link>
        <hr className="w-full my-[20px] border-gray-300" />
        <Link to="/charts" onClick={() => handleLinkClick("/charts")}>
          <li
            className={`flex items-center text-gray-800 text-[20px] hover:text-yellow-400 cursor-pointer mt-[20px] transition-colors duration-300 ${
              activeLink === "/charts"
                ? "bg-red-400 p-[10px] w-[200px] text-white"
                : ""
            }`}
          >
            <FaChartBar className="mr-[15px] text-red-500" />
            Charts
          </li>
        </Link>
        <Link to="/logs" onClick={() => handleLinkClick("/logs")}>
          <li
            className={`flex items-center text-gray-800 text-[20px] hover:text-yellow-400 cursor-pointer mt-[20px] transition-colors duration-300 ${
              activeLink === "/logs"
                ? "bg-red-400 p-[10px] w-[200px] text-white"
                : ""
            }`}
          >
            <FaClipboard className="mr-[15px] text-red-500" />
            All logs
          </li>
        </Link>
        <Link to="/calendar" onClick={() => handleLinkClick("/calendar")}>
          <li
            className={`flex items-center text-gray-800 text-[20px] hover:text-yellow-400 cursor-pointer mt-[20px] transition-colors duration-300 ${
              activeLink === "/calendar"
                ? "bg-red-400 p-[10px] w-[200px] text-white"
                : ""
            }`}
          >
            <FaCalendarAlt className="mr-[15px] text-red-500" />
            Calendar
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu; 