import React from "react";
import { Link } from "react-router-dom";
import { BsBroadcastPin, BsBookmark, BsFillGridFill, BsPlusLg } from "react-icons/bs";
import { FcGoogle, FcRedo } from "react-icons/fc";
import { AuthContext } from "../../Context/UserContext";
import { useContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";

const Header = () => {

    const {googlePopUp, user} = useContext(AuthContext)

    const provider = new GoogleAuthProvider();

    const googleSingIn = (event) => {
        event.preventDefault();
        googlePopUp(provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const menu = (
        <>
            <li>
                <Link to={"/"}><BsBroadcastPin className=""></BsBroadcastPin>Discover</Link>
            </li>
            <li>
                <Link to={"/bookmark"}><BsBookmark></BsBookmark>Bookmarks</Link>
            </li>
            <li>
                <Link to={"/myGallery"}><BsFillGridFill></BsFillGridFill>My Gallery</Link>
            </li>
            <li>
                <Link to={"/addAi"}><BsPlusLg></BsPlusLg>Add New Ai Tool</Link>
            </li>
        </>
    );
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menu}
                    </ul>
                </div>
                <button className="btn btn-ghost normal-case text-xl">
                    Ai Gallery
                </button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{menu}</ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button className="btn"><FcRedo className="text-2xl mr-2"></FcRedo> Logout</button> : <button onClick={googleSingIn} className="btn"><FcGoogle className="text-2xl mr-2"></FcGoogle> Sign In</button>
                }
            </div>
        </div>
    );
};

export default Header;
