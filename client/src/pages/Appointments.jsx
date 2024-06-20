import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  const fetchAppointments = async () => {
    try {
      const id = user._id;
      console.log(id);
      let response;

      if (user.type === 'student') {
        response = await axios.get('http://localhost:3000/api/my-appointments', {
          params: { studentId: id }
        });
      } else if (user.type === 'teacher') {
        response = await axios.get('http://localhost:3000/api/my-appointments', {
          params: { teacherId: id }
        });
      }

      console.log('Fetched appointments:', response.data);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [user._id, user.type]);

  const updateStatus = async (appointmentId, status) => {
    try {
      const response = await axios.put('http://localhost:3000/api/update-appointment-status', {
        appointmentId,
        status,
      });
      console.log('Updated appointment:', response.data);
      fetchAppointments(); // Refresh appointments after updating
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  return (
    <section className='max-w-7xl mx-auto'>
      <div className='flex-center flex-col'>
        <h1 className='font-bold text-3xl my-5'>{user.type === 'student' ? 'Teacher' : 'Student'} Appointments</h1>
        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <ul className='flex flex-col gap-5'>
            {appointments.toReversed().map((appointment) => (
              <li key={appointment._id} className="mb-4 p-4 px-10 border shadow-lg rounded-lg hover:scale-105 duration-300 bg-gradient-to-r from-gray-200 via-white to-gray-200">
                {user.type === 'student' ? (
                  <div className='flex flex-col gap-3'>
                    <p>Teacher: <span className='font-semibold text-lg ms-2 text-black'>{appointment.teacherId.name}</span></p>
                    <p>Subject: <span className='font-semibold text-lg ms-2 text-black'>{appointment.teacherId.subject}</span></p>
                    <p>Date: <span className='font-semibold text-lg ms-2 text-black'>{new Date(appointment.date).toLocaleDateString()}</span></p>
                    <p>Time: <span className='font-semibold text-lg ms-2 text-black'>{appointment.time}</span> </p>
                    <p className=''>Status: <span className='font-semibold text-lg text-blue-500 ms-2'>{appointment.status}</span></p>
                  </div>
                ) : (
                  <div className='flex flex-col gap-2 text-sm text-gray-600'>
                    <p>Student: <span className='font-semibold text-lg ms-2 text-black'>{appointment.studentId.name}</span></p>
                    <p>Email: <span className='font-semibold text-lg ms-2 text-black'>{appointment.studentId.email}</span></p>
                    <p>Date: <span className='font-semibold text-lg ms-2 text-black'>{new Date(appointment.date).toLocaleDateString()}</span></p>
                    <p>Time: <span className='font-semibold text-lg ms-2 text-black'>{appointment.time}</span> </p>
                    <p className=''>Status: <span className='font-semibold text-lg text-blue-500 ms-2'>{appointment.status}</span></p>
                    {appointment.status === 'pending' && (
                      <div>
                        <button
                          onClick={() => updateStatus(appointment._id, 'accepted')}
                          className="bg-green-500 text-white p-2 px-5 rounded-md mr-2 font-semibold"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => updateStatus(appointment._id, 'rejected')}
                          className="bg-red-500 text-white p-2 px-5 rounded-md font-semibold"
                        >
                          Decline
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Appointments;
