import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Selection from './pages/Selection';
import TeacherLogin from './pages/Login/TeacherLogin';
import TeacherRegister from './pages/Register/TeacherRegister';
import StudentLogin from './pages/Login/StudentLogin';
import StudentRegister from './pages/Register/StudentRegister';
import { AuthProvider, AuthContext } from '../HOC/AuthContext';
import Home from './pages/Home';
import Profile from './pages/Profile';
import FindTeachers from './pages/FindTeachers';
import TeacherProfile from './pages/TeacherProfile';
import Appointments from './pages/Appointments';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
      <div className='flex flex-col min-h-screen overflow-hidden'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/selection' element={<Selection />} />
            <Route
              path='/teacher-login'
              element={
                <AuthContext.Consumer>
                  {({ isAuthenticated }) =>
                    isAuthenticated ? <Navigate to='/' /> : <TeacherLogin />
                  }
                </AuthContext.Consumer>
              }
            />
            <Route
              path='/teacher-register'
              element={
                <AuthContext.Consumer>
                  {({ isAuthenticated }) =>
                    isAuthenticated ? <Navigate to='/' /> : <TeacherRegister />
                  }
                </AuthContext.Consumer>
              }
            />
            <Route
              path='/student-login'
              element={
                <AuthContext.Consumer>
                  {({ isAuthenticated }) =>
                    isAuthenticated ? <Navigate to='/' /> : <StudentLogin />
                  }
                </AuthContext.Consumer>
              }
            />
            <Route
              path='/student-register'
              element={
                <AuthContext.Consumer>
                  {({ isAuthenticated }) =>
                    isAuthenticated ? <Navigate to='/' /> : <StudentRegister />
                  }
                </AuthContext.Consumer>
              }
            />
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={
              <AuthContext.Consumer>
                {({ isAuthenticated }) =>
                  isAuthenticated ? <Profile /> : <Navigate to='/selection' />
                }
              </AuthContext.Consumer>
            } />
            <Route path='/find-teachers' element={<FindTeachers />} />
            <Route path='/teacher-profile/:id' element={<TeacherProfile />} /> {/* Add Route for teacher-profile with id param */}
            <Route path='/appointments' element={
              <AuthContext.Consumer>
                {({ isAuthenticated }) =>
                  isAuthenticated ? <Appointments /> : <Navigate to='/selection' />
                }
              </AuthContext.Consumer>} />
          </Routes>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
