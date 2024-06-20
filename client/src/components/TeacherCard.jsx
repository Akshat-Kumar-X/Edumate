import { FaAngleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const TeacherCard = ({ id, name, subject, experience, location, image, description }) => {
  const defaultImage = './src/assets/profile.jpg';
  const profileImage = image != "" ? image : defaultImage;
 
  return (
    <Link to={`/teacher-profile/${id}`}>
    <div className='rounded-2xl shadow-lg hover:scale-105 duration-300 bg-white p-5'>
      <div className="flex max-md:flex-col  gap-8 justify-start items-center relative">
        <img src={profileImage} alt="Profile" className='h-32 w-32 object-cover rounded-full shadow-xl' />
        <div className='flex flex-col gap-1'>
          <h1 className='text-3xl font-medium text-[#353452]  '>{name}</h1>
          <p className='text-gray-500 text-base mt-2 font-medium w-[450px] max-md:hidden'>
            {`${description.slice(0, 108)}...`}
          </p>
          
        </div>
        <Link to={`/teacher-profile/${id}`} className='absolute right-[-30px] md:top-[70px] bg-blue-400 px-5 py-2 rounded-lg md:flex-center hidden text-white font-semibold gap-1'>
          View Profile <FaAngleRight />
        </Link>
      </div>
      <hr className="mb-2 mt-5" />
        <div className='flex max-md:flex-col  gap-5'>
          <p className='text-sm text-gray-500 flex-center gap-1'><FaStar /> Expertise: <span className='text-lg  text-white px-4 py-1 rounded-full font-semibold  bg-gradient-to-r  from-pink-400 to-rose-500 '>{subject}</span></p>
          <p className='text-sm text-gray-500 flex-center gap-1'><IoTimeOutline /> Experience: <span className='text-lg text-white px-4 py-1 rounded-full  bg-gradient-to-r from-pink-400 to-rose-500  font-semibold'>{experience}+ years</span></p>
          <p className='text-sm text-gray-500 flex-center gap-1'><FaLocationDot />Location: <span className='text-lg bg-gradient-to-r from-blue-500  to-sky-400 text-transparent bg-clip-text  font-semibold'>{location}</span></p>
        </div>
    </div>
    </Link>
  );
}

export default TeacherCard;
