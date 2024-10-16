import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Donors from "./pages/Donors";
import Prospects from "./pages/Prospects";
import NewDonor from "./pages/NewDonor";
import Donor from "./pages/Donor";
import Prospect from "./pages/Prospect";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);

  const Layout = () => {
    return (
      <div className="flex">
        <div>
          <Menu />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/admin",
      element: user.currentUser ? <Layout /> : <Navigate to="/login"/>,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/admin/donors",
          element: <Donors />,
        },
        {
          path: "/admin/prospects",
          element: <Prospects />,
        },
        {
          path: "/admin/newdonor",
          element: <NewDonor />,
        },
        {
          path: "/admin/donor/:id",
          element: <Donor />,
        },

        {
          path: "/admin/prospect/:id",
          element: <Prospect />,
        },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
