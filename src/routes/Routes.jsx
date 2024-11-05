import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<div>Error</div>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"/dashboard",
                element:<Dashboard/>,
            }
        ]
    }
])

export default routes;