import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className='header'>
      <h1>Jobs Tracker</h1>
      <Link to='/applications-tracker'>Applications</Link>
      <Link to='/goals'>Goals</Link>
      <Link to='/jobs/new'>Add Job</Link>
    </div>
  )
}

export default Header