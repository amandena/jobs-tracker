import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className='header'>
      <Link to='#'>Applications</Link>
      <Link to='#'>Goals</Link>
      <Link to='#'>Add Job</Link>
    </div>
  )
}

export default Header