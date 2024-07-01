import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import defaultImage from '/assets/profile.jpg';

import { MdLocalPhone } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineSubject } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import BASE_URL from '../constants';

const TeacherProfile = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/teacher-profile/${id}`);
        setTeacher(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTeacher();
  }, [id]);

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.type === 'teacher') {
      toast.error('Only students can schedule appointments');
      setMessage('Sign in as Student');
      return;
    }
    const studentId = user ? user._id : null;

    if (!studentId) {
      toast.error('Please SignIn');
      navigate('/student-login');
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/appointments`, {
        studentId,
        teacherId: id,
        date,
        time,
      });
      toast.success('Appointment scheduled!');
      setMessage('Appointment scheduled!');
    } catch (error) {
      console.error('Error response:', error.response);
      toast.error(error.response?.data?.message || 'Failed to schedule appointment.');
      setMessage('Failed to schedule appointment.');
    }
  };

  if (!teacher) {
    return <div>Loading...</div>;
  }

  const user = JSON.parse(localStorage.getItem('user'));
  const profileImage = teacher.image ? teacher.image : defaultImage;

  return (
    <div className='max-w-7xl mx-auto md:px-9 px-5'>
      <div className='relative rounded-lg bg-gradient-to-r from-fuchsia-200 via-indigo-100 to bg-purple-300 h-[150px] bg-cover' style={{ backgroundImage: "url(https://png.pngtree.com/thumb_back/fh260/background/20220511/pngtree-abstract-pastel-purple-gradient-background-ecology-concept-for-your-graphic-design-image_1324968.jpg)" }}>
        {user && user._id === id && (
          <Link to='/profile' className='absolute shadow-lg bottom-5 right-5 text-xl font-bold flex-center gap-2 text-white py-2 px-3 rounded-sm bg-gradient-to-r from-fuchsia-400 to-purple-600 hover:from-fuchsia-500 hover:to-purple-700 duration-300'> <FaEdit /> Edit</Link>
        )}
      </div>
      <div className='rounded-lg flex md:flex-row flex-col justify-between px-5 pb-20 md:px-10 md:pt-5 pt-3 relative'>
        <div>
          <div className='flex gap-10 items-start justify-start'>
            <img
              src={profileImage}
              alt={teacher.name}
              className='md:w-48 md:h-48 w-36 h-36 rounded-xl object-cover absolute md:top-[-90px] top-[-70px] border-[5px] border-white'
            />
            <div className='flex flex-col gap-2'>
              <h1 className='md:text-3xl text-2xl font-bold text-[#353452] md:ps-52 ps-40'>{teacher.name}</h1>
              <p className='text-gray-500 font-semibold flex items-center gap-2 md:ps-52 ps-40'><span className='bg-gradient-to-r from-pink-400 to-rose-500 text-transparent bg-clip-text text-xl font-semibold'>{teacher.subject}</span> Expert</p>
            </div>
          </div>
          <div className='flex flex-col mx-auto mt-5 px-2'>
            <h2 className='text-2xl font-medium text-[#353452] mb-1'>About</h2>
            <p className='font-medium text-[#3e3e4a]'>{teacher.description}</p>
          </div>
          <hr className='my-3 w-1/2' />
          <div className='flex flex-col mx-auto mt-2 px-2 gap-5'>
            <h2 className='text-2xl font-medium text-[#353452] mb-1'>Details</h2>
            <div className="flex">
              <div className='w-[3px] rounded-full bg-gradient-to-b from-fuchsia-500 to-indigo-400'></div>
              <div className='flex flex-col gap-4 ms-5 mr-20'>
                <div className='flex flex-col'>
                  <h3 className='text-xl font-medium text-[#353452] mb-1 flex items-center gap-2'><MdOutlineSubject /> Subject</h3>
                  <p className='font-medium bg-gradient-to-r from-fuchsia-500 to-indigo-400 text-transparent bg-clip-text'>{teacher.subject}</p>
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-xl font-medium text-[#353452] mb-1 flex items-center gap-2'><MdLocalPhone /> Contact</h3>
                  <p className='font-medium bg-gradient-to-r from-fuchsia-500 to-indigo-400 text-transparent bg-clip-text'>+91 {teacher.contact}</p>
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-xl font-medium text-[#353452] mb-1 flex items-center gap-2'><TfiLocationPin /> Location</h3>
                  <p className='font-medium bg-gradient-to-r from-fuchsia-500 to-indigo-400 text-transparent bg-clip-text'>{teacher.location}</p>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                  <h3 className='text-xl font-medium text-[#353452] mb-1 flex items-center gap-2'><BsClockHistory /> Years of experience</h3>
                  <p className='font-medium bg-gradient-to-r from-fuchsia-500 to-indigo-400 text-transparent bg-clip-text'>{teacher.experience}+ years</p>
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-xl font-medium text-[#353452] mb-1 flex items-center gap-2'><MdOutlineEmail /> Email</h3>
                  <p className='font-medium bg-gradient-to-r from-fuchsia-500 to-indigo-400 text-transparent bg-clip-text'>{teacher.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-20 text-[#353452]'>
          <div className='min-w-[300px] border-4 border-white px-5 py-10 rounded-xl shadow-lg bg-gradient-to-r from-fuchsia-100 via-indigo-50 to bg-purple-50'>
            <h2 className='text-xl font-bold text-center mb-4 text-[#353452]'>Schedule
              <span className='bg-gradient-to-r from-pink-400 to-rose-500 text-transparent bg-clip-text ps-2'>Appointment</span>
            </h2>
            <form onSubmit={handleAppointmentSubmit}>
              <div className='mb-4'>
                <label className='block text-gray-700 font-medium ps-1'>Date</label>
                <input
                  type='date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700 font-medium ps-1'>Time</label>
                <input
                  type='time'
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full text-white text-xl py-1 rounded-sm bg-gradient-to-r from-fuchsia-400 to-purple-600 hover:from-fuchsia-500 hover:to-purple-700 duration-300'
              >
                Schedule
              </button>
              {message && <p className='mt-2 text-center text-[#353452] font-medium'>{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
