import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/navbar.scss";


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <>
            <nav className="navbar">
                <div className="nav-links">

                    {!user && <Link to="/login">Login</Link>}
                    {!user && <Link to="/signup">Signup</Link>}

                    {user && <Link to="/dashboard">Dashboard</Link>}
                    {user && <button onClick={logout}>Logout</button>}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
