import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDropzone } from 'react-dropzone';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState('');
  const [name, setName] = useState(user?.name);
  const [subject, setSubject] = useState(user?.subject || '');
  const [experience, setExperience] = useState(user?.experience || '');
  const [location, setLocation] = useState(user?.location || '');
  const [image, setImage] = useState(user?.image || '');
  const [description, setDescription] = useState(user?.description);
  const [imageFile, setImageFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    setImageFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/gif': [],
    },
    multiple: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('http://localhost:3000/api/profile', {
        name, email, password, subject, experience, location, description, image
      });

      if (result.data.message === 'Update successful') {
        toast.success('Profile Updated.');
        localStorage.setItem('user', JSON.stringify({ ...user, name, subject, experience, location, description, image }));
      } else {
        toast.error(result.data.message);
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <section className='max-w-7xl mx-auto py-10'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col bg-slate-100 p-10 text-black rounded-md shadow-md'>
          <h1 className='text-black text-2xl text-center font-semibold mb-5'>
            <span className='text-blue-500 font-bold'>Profile</span>
          </h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div {...getRootProps()} className='mx-auto shadow-md rounded-full h-24 w-24 border-dashed border-2 border-gray-400 cursor-pointer'>
              <input {...getInputProps()} />
              {image ? (
                <img src={image} alt="Profile" className="h-24 w-24 pb-[3px] object-cover rounded-full" />
              ) : (
                <p className='text-center flex flex-col justify-center items-center text-gray-600 text-sm mt-4'>
                  Add <br /> Profile <br /> Picture
                </p>
              )}
            </div>
            <input
              type="text"
              name="name"
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              className='py-2 px-2 shadow-md rounded-md'
              required
            />
            <input
              type="text"
              name="subject"
              placeholder='Subject'
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              className='py-2 px-2 shadow-md rounded-md'
              required
            />
            <input
              type="number"
              name="experience"
              placeholder='Experience'
              onChange={(e) => setExperience(e.target.value)}
              value={experience}
              className='py-2 px-2 shadow-md rounded-md'
              required
            />
            <input
              type="text"
              name="location"
              placeholder='Location'
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              className='py-2 px-2 shadow-md rounded-md'
              required
            />
            <textarea
              className="py-2 px-2 h-[200px]  shadow-md rounded-md resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={email}
              className='py-2 px-2 shadow-md rounded-md text-gray-500 bg-zinc-100'
              required
              readOnly
            />
            <input
              type="password"
              name="password"
              placeholder='Confirm password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='py-2 px-2 shadow-md rounded-md'
              required
            />
            <button type="submit" className='bg-blue-400 text-white py-1 rounded-md hover:bg-blue-500 duration-150'>
              Update Details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
