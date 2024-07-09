import React from 'react'
import SingleJob from './SingleJob'

const RecentJobs = () => {
  return (
    <div className='w-full bg-gray-100 py-6 px-4 rounded-lg'>
      <div className='container flex flex-col gap-3 mx-auto rounded-md p-3'>
        <h1 className='font-bold'>Recent Jobs</h1>
        <SingleJob />
        <SingleJob />
        <SingleJob />
      </div>
    </div>
  )
}

export default RecentJobs
