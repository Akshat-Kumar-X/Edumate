import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../HOC/AuthContext';
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem('user'));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className='header'>
      <nav className='nav flex justify-between items-center px-7 text-lg'>
        <img src="/logo.png" alt="Logo" className='w-40' />

        <ul className='nav-link mt-2 max-md:hidden'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className='duration-300'>
            <a href='/#about'>About</a>
          </li>
          <li>
            <Link to='/find-teachers'>Teachers</Link>
          </li>
          <li>
            {isAuthenticated ? (
              <div className='flex justify-center items-center gap-3'>
                <Link to='/appointments'>Appointments</Link>
              </div>
            ) : null}
          </li>
          <li>
            {isAuthenticated && user && user.type === 'teacher' ? (
              <div className='flex justify-center items-center gap-3'>
                <Link to='/profile'>Profile</Link>
              </div>
            ) : null}
          </li>
        </ul>
        {isAuthenticated ? (
          <button onClick={logout} className='max-md:hidden flex-center gap-1 text-white px-6 py-1 rounded-[2px] bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 duration-300'>
            Logout <CiLogout />
          </button>
        ) : (
          <Link to='/selection' className='max-md:hidden flex-center gap-1 text-white px-6 py-1 rounded-[2px] bg-gradient-to-r from-fuchsia-400 to-purple-600 hover:from-fuchsia-500 hover:to-purple-700 duration-300'>
            Login <IoIosArrowRoundForward />
          </Link>
        )}
        <button className='md:hidden text-3xl' onClick={toggleSidebar}>
          {sidebarOpen ? <IoClose className='text-black z-50'  /> : <IoIosMenu />}
        </button>

        {/* Sidebar */}
        {sidebarOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 z-10' onClick={toggleSidebar}></div>
        )}
        <div className={`fixed top-0 left-0 w-[250px] h-screen z-20 bg-white border shadow-2xl flex flex-col items-center transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
          <img src="/logo.png" alt="Logo" className='mt-5 w-40' />
          <ul className='flex flex-col text-center gap-5 mt-2'>
            <li>
              <Link to='/' onClick={toggleSidebar}>Home</Link>
            </li>
            <li className='duration-300'>
              <a href='/#about' onClick={toggleSidebar}>About</a>
            </li>
            <li>
              <Link to='/find-teachers' onClick={toggleSidebar}>Teachers</Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div className='flex justify-center items-center gap-3'>
                  <Link to='/appointments' onClick={toggleSidebar}>Appointments</Link>
                </div>
              ) : null}
            </li>
            <li>
              {isAuthenticated && user && user.type === 'teacher' ? (
                <div className='flex justify-center items-center gap-3'>
                  <Link to='/profile' onClick={toggleSidebar}>Profile</Link>
                </div>
              ) : null}
            </li>
          </ul>
          {isAuthenticated ? (
            <button onClick={() => { logout(); toggleSidebar(); }} className='flex-center gap-1 mt-5 text-white px-6 py-1 rounded-[2px] bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 duration-300'>
              Logout <CiLogout />
            </button>
          ) : (
            <Link to='/selection' onClick={toggleSidebar} className='flex-center gap-1 mt-5 text-white px-6 py-1 rounded-[2px] bg-gradient-to-r from-fuchsia-400 to-purple-600 hover:from-fuchsia-500 hover:to-purple-700 duration-300'>
              Login <IoIosArrowRoundForward />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
