import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Naveber = () => {

    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }
    console.log(user);
    const naveLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/booking">My Booking</NavLink></li>
     

    </>

    return (
        <div className="navbar bg-base-100 h-28 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {naveLinks}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {naveLinks}
                </ul>
            </div>
            <div className="navbar-end">
            {
                    user ?
                        <a onClick={handleLogout} className="btn bg-green-500 px-6 ml-3">Logout</a>
                        :
                        <Link to='/login'>
                            <a className="btn bg-green-500 px-5">Login</a>
                        </Link>
                }

                <button className="btn btn-outline btn-warning ml-4">Apponment</button>
            </div>
        </div>
    );
};

export default Naveber;