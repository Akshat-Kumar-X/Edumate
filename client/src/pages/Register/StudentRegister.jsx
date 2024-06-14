import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const StudentRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Succesfull");
    console.log('clicked')
  }

  return (
    <section className='max-w-7xl max-auto py-10'>
      <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col  bg-slate-100 p-10 text-black rounded-md shadow-md'>
            <h1 className='text-black text-2xl  text-center  font-semibold mb-5'>
              <span className='text-blue-500 font-bold '>Student</span> SignUp
            </h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
               <input 
                  type="text" 
                  name="name" 
                  placeholder='Enter Name...'
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className='py-2 px-2 shadow-md rounded-md'
              />
              <input 
                  type="text" 
                  name="email" 
                  placeholder='Enter Email...'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className='py-2 px-2 shadow-md rounded-md'
              />
              <input 
                  type="password" 
                  name="password" 
                  placeholder='Enter Password...'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className='py-2 px-2 shadow-md rounded-md'
              />
              <button type="submit" className='bg-blue-400 text-white py-1 rounded-md hover:bg-blue-500 duration-150'>
                  Submit
              </button>
            </form>
            <p className='mt-3 text-gray-600 '>Already registered? <Link to='/student-login' className='text-blue-500 underline'>login</Link></p>
          </div>
      </div>
    </section>
  )
}

export default StudentRegister