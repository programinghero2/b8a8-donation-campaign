import { NavLink } from "react-router-dom";
import "./Navbar.css"
import Logo from "../logo/Logo";
const Navbar = () => {
    return (
        <nav className="flex flex-col md:flex-row  items-center justify-between">
            <Logo></Logo>
            <ul className="flex gap-5 color mt-5 lg:mt-0 text-[18px]">
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/donation" >Donation</NavLink></li>
                <li><NavLink to="/statistics">Statistics</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;