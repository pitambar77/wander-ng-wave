import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useSelector,useDispatch } from 'react-redux';
import logo from '../assets/hero-carousel/wander logo.png'
import avatar from '../assets/hero-carousel/avatar.png'
import { useLogoutUserMutation } from '../redux/features/auth/authApi';
import { logout } from '../redux/features/auth/authSlice';

const navLists = [
    {
        name:"Home",
        path:"/"
    },
    {
        name:"About us",
        path:"/about-us"
    },
    {
        name:"Privacy Policy",
        path:"/privacy-policy"
    },
    {
        name:"Contact us",
        path:"/contact-us"
    }
]

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const {user} = useSelector((state)=>state.auth);
    // console.log(user);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    const dispatch = useDispatch();

    const [logoutUser] = useLogoutUserMutation();

    const handleLogout = async () =>{
        try {
            await logoutUser().unwrap();
            dispatch(logout());
        } catch (error) {
            
        }
    }

  return (
    <header className=' bg-white py-6 border'>
        <nav className=' container mx-auto flex justify-between px-5 '>
            <Link to="/">
            
                <img src={logo} alt="logo" className=' h-12' />
            </Link>

            <ul className=' sm:flex hidden items-center gap-8 '>
                {
                    navLists.map((listIteam, index) =>(
                        <li key={index}>
                            <NavLink to={`${listIteam.path}`} 
                            className={({isActive}) =>
                                isActive?"active":""
                            }
                            >
                                {listIteam.name}
                            </NavLink>
                        </li>
                    ))
                }

                {/* render btn based on user login activity */}

                {
                    user && user.role === "user" ? (<li className=' flex items-center gap-3'>
                        <img src={avatar} alt=""  className=' size-8 bg-transparent'/>
                        <button onClick={handleLogout} className=' bg-[#1E73BE] px-4 py-1 text-white rounded-md '>Logout</button> 
                    </li>) :(
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    )
                }

                {
                    user && user.role === "admin" && (<li className=' flex items-center gap-3'>
                        <img src={avatar} alt=""  className=' size-8 bg-transparent'/>
                        <Link to="/dashbord" > <button className=' bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm '>Dashbord</button> </Link>
                    </li>)
                }

                
            </ul>

            {/*toggle menu */}

            <div className=' flex items-center sm:hidden'>
                <button
                onClick={toggleMenu}
                className={` flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900`}>
                    {
                        isMenuOpen ? <IoClose className=' size-6' /> : <IoMenuSharp className=' size-6'/>
                    }
                </button>
            </div>

        </nav>
        {/* mobile menu items */}
            {
                isMenuOpen && (
                    <ul className=' fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50 '>
                        {
                            navLists.map((listIteam, index) =>(
                                <li className=' mt-5 px-4' key={index}>
                                    <NavLink
                                    onClick={() =>setIsMenuOpen(false)}
                                    to={`${listIteam.path}`} 
                                    className={({isActive}) =>
                                        isActive?"active":""
                                    }
                                    >
                                        {listIteam.name}
                                    </NavLink>
                                </li>
                            ))
                        }

{
                    user && user.role === "user" ? (<li className=' flex items-center gap-3 px-4 mt-5'>
                        <img src={avatar} alt=""  className=' size-8 bg-transparent'/>
                        <button onClick={handleLogout} className=' bg-[#1E73BE] px-4 py-1 text-white rounded-md '>Logout</button> 
                    </li>) :(
                        <li className=' px-4 mt-5'>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    )
                }
                    </ul>
                )
            }
            

    </header>
  )
} 

export default Navbar