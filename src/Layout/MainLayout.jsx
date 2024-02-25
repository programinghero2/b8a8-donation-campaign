import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navber/Navbar";

const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <div className="my-10 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;