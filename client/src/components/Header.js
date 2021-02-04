import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return(
    <header>
      <div className='nav navbar-light container'>
        <div className='container-fluid'>
          <div className='row mainnav-text text-center'>
            <div className='col-sm-12'>
              <NavLink to='/'><h1>Jobs Tracker</h1></NavLink>
              <NavLink className='mainnav-link' to='/applications-tracker'>Applications</NavLink>
              <NavLink className='mainnav-link' to='/activity-tracker'>Activity</NavLink>
              <NavLink className='mainnav-link' to='/jobs/new'>New Job</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header