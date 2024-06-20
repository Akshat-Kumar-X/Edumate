// TeacherLogin.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../HOC/AuthContext';
import { Link } from 'react-router-dom';

const TeacherLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('http://localhost:3000/api/teacher-login', { email, password });
      const { message, user } = result.data;
      if (message === 'Login successful') {
        toast.success(message);
        login(user);
        navigate('/');
      } else {
        toast.error(message);
      }
    } catch (err) {
      console.log(err.message);
      toast.error('Login failed');
    }
  };

  return (
    <section className='max-w-7xl max-auto py-10'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col bg-slate-100 p-10 text-black rounded-md shadow-md'>
          <h1 className='text-black text-2xl text-center font-semibold mb-5'>
            <span className='text-blue-500 font-bold'>Teacher</span> Login
          </h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <input
              type='email'
              name='email'
              placeholder='Enter Email...'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='py-2 px-2 shadow-md rounded-md'
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Enter Password...'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='py-2 px-2 shadow-md rounded-md'
              required
            />
            <button type='submit' className='bg-blue-400 text-white py-1 rounded-md hover:bg-blue-500 duration-150'>
              Submit
            </button>
          </form>
          <p className='mt-3 text-gray-600'>
            Not registered? <Link to='/teacher-register' className='text-blue-500 underline'>Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeacherLogin;
