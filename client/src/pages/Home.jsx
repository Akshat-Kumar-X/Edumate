import React from 'react'
import { Link } from 'react-router-dom';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Home = () => {
  return (
    <div id="hero" className='max-w-7xl mx-auto'>
        <section className='flex max-md:flex-col ps-8 justify-center items-center max-md:gap-16'>
          <div className='flex-1 flex flex-col pt-10 md:ps-5 max-w-[630px]'>
            <h2 className='text-7xl  text-[#353452] dm-sans-font-bold'>
              FIND 
              <span className='bg-gradient-to-r ms-4 from-fuchsia-500 to-indigo-400 inline-block text-transparent bg-clip-text me-2'> BEST </span>
              <br /> 
              <span className='relative'>
                TEACHERS 
                <div className='absolute right-[-50px] bottom-1 rotate-12 text-lg w-[65px] text-center text-white font-medium bg-gradient-to-r from-orange-400 to-rose-500 px-3 py-1 rounded-full'>Free</div>
                <img src="./src/assets/images/arrow.png" alt="arrow" className='absolute max-md:hidden h-20 top-[-50px] right-[-180px]' />
              </span>
            </h2>
            <h2 className='text-3xl w-[170px] font-extrabold bg-gradient-to-r from-yellow-300  to-orange-500 i text-transparent bg-clip-text ' >Around You</h2>
            <div className='flex max-md:flex-col mt-5'>
              <p className='text-gray-500 text-base mt-7 font-medium w-80'>
              Discover top educators nearby, enabling students and teachers to schedule appointments and demos seamlessly.
              </p>
              <div className='flex flex-col'>
                <img src="./src/assets/images/teachers.png" alt="Teachers" className='w-[200px]' />
                <p className='text-gray-700 text-sm ps-6 font-medium w-80'>
                 Experienced Teachers
              </p>
              </div>
            </div>
            <div className='flex max-md:flex-col md:items-center mt-10'>
            <div className='flex max-md:hidden flex-col gap-2 text-sm'>
                <div className='flex gap-1'>
                  <p className='rounded-full px-3 py-2 border border-gray-500'>Social Science</p>
                  <p className='rounded-full px-3 py-2 border border-gray-500'>Maths</p>
                </div>
                <div className='flex gap-1'>
                  <p className='rounded-full py-2 text-white px-3 bg-purple-500 border-gray-500'>Machine Learning</p>
                  <p className='rounded-full px-3 py-2 border border-gray-500'>AI</p>
                  <p className='rounded-full px-3 py-2 border border-gray-500'>Science</p>
                </div>
                <div className='flex gap-1'>
                  <p className='rounded-full px-3 py-2 border border-gray-500'>Science</p>
                  <p className='rounded-full px-3 py-2 border border-gray-500'>Physics</p>
                  <p className='rounded-full px-3 py-2 border border-gray-500'>Hindi</p>
                </div>
            </div>
            <Link to='/find-teachers' className='flex ms-12 text-lg w-[210px] items-center gap-1 text-white px-6 py-1 rounded-[2px] bg-gradient-to-r from-fuchsia-400 to-purple-600 hover:from-fuchsia-500 hover:to-purple-700 duration-300'>View all teachers <LiaLongArrowAltRightSolid /></Link>

            </div>
            
          </div>
          <div className='flex-1 '>
            <img src="./src/assets/images/heroBanner.png"  alt="Hero Banner"/>
          </div>
        </section>
        <section id='about' className='flex ps-12 max-md:flex-col pt-20 pb-20 '>
          <div className='flex-1 flex-center  '>
            <img src="./src/assets/images/about.png"  alt="About" className='max-w-[450px]'/>
          </div>
          <div className='flex-1  ps-10 flex flex-col justify-center'>
            <h2 className='text-5xl  text-[#353452] font-medium'>
              Access to Learning at<br /> Anytime from
              <span className='bg-gradient-to-r ms-4 from-fuchsia-500 to-indigo-400 inline-block text-transparent bg-clip-text me-2'> Anywhere </span>
              <br /> 
            </h2>
            <div className='flex max-md:flex-col '>
              <p className='text-gray-500 text-base mt-7 mb-5 font-medium max-w-[480px]'>
              Discover top educators nearby, enabling students and teachers to schedule appointments and demos seamlessly Discover top educators nearby, enabling students and teachers to schedule appointments and demos seamlessly.
              </p>
            </div>
            <div className='flex flex-col gap-5  font-medium'>
              <div className='flex gap-10'>
                <div className='flex-center gap-2 me-2'>
                  <img src="./src/assets/images/check.png"  alt="check" className='w-6 '/>
                  <p>Expert Training</p>
                </div>
                <div className='flex-center gap-2'>
                  <img src="./src/assets/images/check1.png"  alt="check"  className='w-6'/>
                  <p>Online Learning</p>
                </div>
              </div>
              <div className='flex gap-10'>
                <div className='flex-center gap-2'>
                  <img src="./src/assets/images/check2.png"  alt="check" className='w-6'/>
                  <p>Lifetime Access</p>
                </div>
                <div className='flex-center gap-2'>
                  <img src="./src/assets/images/check3.png"  alt="check"  className='w-6'/>
                  <p>Great Results</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='flex ps-12 max-md:flex-col pt-0 pb-20 '>
          
          <div className='flex-1 ps-5 flex flex-col justify-center max-w-[540px]'>
            <h2 className='text-5xl  text-[#353452] font-medium'>
              Meet Skilled
              <span className='bg-gradient-to-r ms-4 from-fuchsia-500 to-indigo-400 inline-block text-transparent bg-clip-text me-2'> Teachers  </span>
              Near Your Home
            </h2>
            <div className='flex max-md:flex-col '>
              <p className='text-gray-500 text-base mt-7 mb-5 font-medium max-w-[480px]'>
              Discover top educators nearby, enabling students and teachers to schedule appointments and demos seamlessly Discover top educators nearby, enabling students and teachers to schedule appointments and demos seamlessly.
              </p>
            </div>
            <Link to='/find-teachers' className='flex mt-5 text-lg w-[210px] items-center gap-1 text-white px-6 py-1 rounded-[2px] bg-gradient-to-r from-fuchsia-400 to-purple-600 hover:from-fuchsia-500 hover:to-purple-700 duration-300'>View all teachers <LiaLongArrowAltRightSolid /></Link>
          </div>
          <div className='flex-1 flex-center  '>
            <img src="./src/assets/images/skilled.png"  alt="About" className='max-h-[450px]'/>
          </div>
        </section>
    </div>
  )
}

export default Home