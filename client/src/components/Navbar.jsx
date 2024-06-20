// Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../HOC/AuthContext';
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className='header'>
      <nav className='nav flex justify-between items-center px-7 text-lg'>
        <img src="/logo.png" alt="Logo" className='w-40' />
        <ul className='nav-link mt-2'>
          <li className=''>
            <Link to='/'>Home</Link>
          </li>
          <li className='duration-300'>
            <Link to='/'>About</Link>
          </li>
          <li className=''>
            <Link to='/'>Contact</Link>
          </li>
          <li className=''>
            <Link to='/find-teachers'>Teachers</Link>
          </li>
          <li>
            {isAuthenticated ? (
              <div className='flex justify-center items-center gap-3'>
                <Link to='/appointments' className='hover:text-blue-500 duration-300'>Appointments</Link>
                <Link to='/profile'><FaUserCircle className='text-3xl hover:text-blue-500 duration-300' /></Link>
              </div>
            ) : null}
          </li>
        </ul>
        {isAuthenticated ? (
          <button onClick={logout} className='flex-center gap-1 text-white px-6 py-1 rounded-[2px] bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 duration-300'>
            Logout <CiLogout/>
          </button>
        ) : (
          <Link to='/selection'  className='flex-center gap-1 text-white px-6 py-1 rounded-[2px] bg-gradient-to-r from-fuchsia-400 to-purple-600 hover:from-fuchsia-500 hover:to-purple-700 duration-300'>
            Login  <IoIosArrowRoundForward />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
