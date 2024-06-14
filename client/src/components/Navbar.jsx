import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <nav className='nav'>
            <ul className='nav-link'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/selection'>Login</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar