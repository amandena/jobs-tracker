import React from 'react'
import Job from './Job'
import Search from './Search'
import ScrollArrow from './ScrollArrow'

const Applications = () => {
  return(
    <div className='applications container'>
      <div className='spacer'/>
      <h3>Applications</h3>
      <Search/>
      <Job/>
      <ScrollArrow/>
    </div>
  ) 
}

export default Applications