import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import DonationDetails from "../components/DonationDetails/DonationDetails";
import ErrorPage from "../ErrorPage/ErrorPage";

const Route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch("../categories.json")
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/donationDetails/:Id",
                loader:() => fetch("../categories.json"),
                element:<DonationDetails></DonationDetails>
            }
        ]
    }
])
export default Route;