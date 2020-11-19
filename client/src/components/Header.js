import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className='header'>
      <h1>Jobs Tracker</h1>
      <Link to='#'>Applications</Link>
      <Link to='#'>Goals</Link>
      <Link to='#'>Add Job</Link>
    </div>
  )
}

export default Header