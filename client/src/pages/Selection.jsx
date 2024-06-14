import React from 'react'
import { Link } from 'react-router-dom'

import { FaUserCircle } from "react-icons/fa";

const Selection = () => {
  return (
    <section className='max-w-7xl mx-auto'>
        <div className='flex py-5 gap-3 justify-center items-center text-white font-medium'>
            <Link to='/teacher-login'>
                <div className='selection-card'>
                    <FaUserCircle className='text-5xl  mb-2' />
                    <p>Login as</p>
                    <h2 className='text-2xl font-bold'>Teacher</h2>
                </div>
            </Link>
            <Link to='/student-login'>
                <div className='selection-card'>
                    <FaUserCircle className='text-5xl mb-2' />
                    <p>Login as</p>
                    <h2 className='text-2xl font-bold'>Student</h2>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default Selection