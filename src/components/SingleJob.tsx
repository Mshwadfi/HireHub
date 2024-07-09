import Image from 'next/image'
import React from 'react'

const SingleJob = () => {
  return (
    <div className='flex items-center gap-4 bg-white p-4 rounded-md'>
        <Image 
        alt="icon" 
        src="https://cdn-icons-png.flaticon.com/128/3917/3917033.png" 
        width={24} 
        height={24} 
        /> 
        
            <div className=' flex-col flex-grow'>
                <h2 className='text-gray-500'>Company Name</h2>
                <h1 className='font-bold text-lg'>Jop Title</h1>
                <div className='sm:flex justify-between'>
                    <div className='flex gap-2 text-gray-600'>
                        <p>Remote</p>&middot;
                        <p>Cairo</p>&middot;
                        <p>Full Time</p>
                    </div>
                    <div className='self-end text-gray-600 text-xs'>Publish Date</div>
                </div>
            </div>
        
    </div>
  )
}

export default SingleJob
