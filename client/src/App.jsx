import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Selection from './pages/Selection'
import TeacherLogin from './pages/Login/TeacherLogin'
import TeacherRegister from './pages/Register/TeacherRegister'
import StudentLogin from './pages/Login/StudentLogin'
import StudentRegister from './pages/Register/StudentRegister'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/selection' element={<Selection/>}/>
          <Route path='/teacher-login' element={<TeacherLogin/>}/>
          <Route path='/teacher-register' element={<TeacherRegister/>}/>
          <Route path='/student-login' element={<StudentLogin/>}/>
          <Route path='/student-register' element={<StudentRegister/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App