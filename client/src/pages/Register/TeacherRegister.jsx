import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const TeacherRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let image = '';
      let description = `Educator with ${experience} years of experience in ${subject}, fostering a positive learning environment.`;
      const result = await axios.post('http://localhost:3000/api/teacher-register', {
        name, email, password, subject, experience, location, description, image
      });

      if (result.data.message === 'User not created') {
        toast.error(result.data.message);
      } else {
        toast.success('User registered.');
        navigate('/teacher-login');
      }
    } catch (err) {
      console.log(err.message);
      toast.error('Registration failed');
    }
  };

  return (
    <section className='max-w-7xl max-auto py-10'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col bg-slate-100 p-10 text-black rounded-md shadow-md'>
          <h1 className='text-black text-2xl text-center font-semibold mb-5'>
            <span className='text-blue-500 font-bold'>Teacher</span> SignUp
          </h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <input
              type="text"
              name="name"
              placeholder='Enter Name...'
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='py-2 px-2 shadow-md rounded-md'
              required
            />
            <input
              type="email"
              name="email"
              placeholder='Enter Email...'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='py-2 px-2 shadow-md rounded-md'
              required
            />
            <input
              type="password"
              name="password"
              placeholder='Enter Password...'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='py-2 px-2 shadow-md rounded-md'
              required
            />
            <input
              type="text"
              name="subject"
              placeholder='Enter Subject...'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              className='py-2 px-2 shadow-md rounded-md'
            />
            <input
              type="number"
              name="experience"
              placeholder='Enter Experience (in years)...'
              onChange={(e) => setExperience(e.target.value)}
              value={experience}
              className='py-2 px-2 shadow-md rounded-md'
            />
            <input
              type="text"
              name="location"
              placeholder='Enter Location...'
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              className='py-2 px-2 shadow-md rounded-md'
            />
            <button type="submit" className='bg-blue-400 text-white py-1 rounded-md hover:bg-blue-500 duration-150'>
              Submit
            </button>
          </form>
          <p className='mt-3 text-gray-600'>Already registered? <Link to='/teacher-login' className='text-blue-500 underline'>login</Link></p>
        </div>
      </div>
    </section>
  );
};

export default TeacherRegister;
