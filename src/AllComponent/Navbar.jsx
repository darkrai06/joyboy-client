import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../AllHooks/useAuth';
import axios from 'axios';
import logo from '../assets/adobe.png'

const Navbar = () => {
    const [userdata, setUserdata] = useState({});
    const { currentUser, Out } = useAuth();

    const navigate = useNavigate()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(
                    `https://joyboy-server.onrender.com/oneUser${currentUser?.email}`
                );
                setUserdata(res.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        if (currentUser) {
            fetchUser();
        }
    }, [currentUser]);

    const { imgurl } = userdata || {};
    const SignOut = () => {
        Out()
        navigate('/')
            .then(() => { })
            .catch((error) => { });
    };

    const section = (
        <>
            {currentUser && (
                <p className="border-2  py-1 rounded-full flex justify-center items-center font-bold text-lg">
                    ${userdata?.coin}
                </p>
            )}
            <NavLink
                to="/"
                className=" border-2 border-blue-400 px-2 py-3 flex justify-center items-center rounded-md"
            >
                Home
            </NavLink>

            <NavLink
                to="https://github.com/darkrai06/joyboy-client" target='_blank'
                className="border-2 border-blue-600 px-1 py-3 flex justify-center items-center  rounded-md"
            >
                Join As Developer
            </NavLink>
            <NavLink
                to="/aboutUs"
                className="border-2 border-blue-600 px-1 py-3 flex justify-center items-center  rounded-md"
            >
                About Us
            </NavLink>

            {currentUser && (
                <>
                    <NavLink to="/Dashboard" className="text-lg border-2 border-blue-600 px-2  flex justify-center items-center py-2 rounded-md">
                        <button >
                            Dashboard
                        </button>
                    </NavLink>
                </>
            )}
            {currentUser ? (
                <>
                    <div className="text-lg border-2 border-blue-600 px-2 py-1 rounded-md flex justify-center items-center gap-3">
                        <Link

                            onClick={SignOut}
                        >
                            <button>LogOut</button>
                        </Link>
                        <img
                            referrerPolicy="no-referrer"
                            className="w-[40px] h-[40px] rounded-full"
                            src={imgurl}
                            alt=""
                        />
                    </div>
                    <NavLink to="/Profile" className="text-lg border-2 border-blue-600 px-2  flex justify-center items-center py-2 rounded-md">
                        <button >
                            Profile
                        </button>
                    </NavLink>
                </>
            ) : (
                <Link to="/login" className="text-lg border-2 px-3  border-blue-600  py-2 rounded-md flex justify-center items-center">
                    <button >
                        Log-in
                    </button>
                </Link>
            )}
        </>
    );

    return (
        <div className=''>
            <div className="container mx-auto fixed z-30 navbar top-0 bg-base-100 border-b-2 border-b-blue-500 pb-5 pl-8">
                <div className="navbar-start">
                    <Link to="/">
                        <img src={logo} className='w-1/4' alt="" />
                    </Link>
                </div>

                <div className="navbar-end w-[95%] flex-grow flex justify-end items-center">
                    {/* Dropdown for small screens */}
                    <div className="dropdown lg:hidden">
                        <label
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost"
                        >
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
                            className=" space-y-3 right-5 menu menu-compact dropdown-content bg-base-100 mt-3 p-2 shadow rounded-box w-80 *:w-full"
                        >
                            <li>{section}</li>
                        </ul>
                    </div>

                    {/* Menu for large screens */}
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal space-x-3 px-1 flex justify-center items-center ">
                            {section}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
