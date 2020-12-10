import React from 'react'
import Job from './Job'
import Search from './Search'

const Applications = () => {
  return(
    <div className='applications container'>
      <h3>Applications</h3>
      <Search/>
      <Job/>
    </div>
  ) 
}

export default Applications