import { Link, NavLink } from "react-router-dom";

import "../components/NavBar.css";
import { SearchForm } from "./SearchForm";

const Navbar = () => {
return (
    <div>
    <nav>
        <h1>Peaga Library</h1>
        
        <div>
            <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/"
            >
            Home
            </NavLink>
            <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/library"
            >
            Books
            </NavLink>
            <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/inserir"
            >
            Create Book
            </NavLink>
        </div>
        <SearchForm/> 
    </nav>
    </div>
)
}

export default Navbar