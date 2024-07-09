import React from 'react'

const Hero = () => {
  return (
    <div className='container mx-auto py-16 text-center'>
        <h1 className='font-extrabold text-3xl'>Welcome to Hire<span className='text-cyan-600'>Hub</span></h1>
        <p className='text-gray-800 hidden max-w-2xl m-auto sm:block'>Your gateway to discovering and securing your dream job. At HireHub, we connect talented professionals with top companies, making job hunting easier and more efficient. Start your career journey with us today!</p>
        <form className='flex justify-center gap-2 p-2 m-2 max-w-md mx-auto'>
            <input type='search' placeholder='Find Your Job' className='flex-grow border border-gray-300 rounded-md p-2'/>
            <button className='py-2 px-3 bg-cyan-500 rounded-md text-white'>Search</button>
        </form>
    </div>
  )
}

export default Hero
