import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import * as Constants from '../helpers/routeConstants'

const Header = () => {
  return(
    <header>
      <div className='nav navbar-light container'>
        <div className='container-fluid'>
          <div className='row mainnav-text text-center'>
            <div className='col-sm-12'>
              <Link to={`${Constants.HOME_ROUTE}`}><h1>Jobs Tracker</h1></Link>
              <NavLink className='mainnav-link' to={`${Constants.HOME_ROUTE}`}>Home</NavLink>
              <NavLink className='mainnav-link' to={`${Constants.APPLICATIONS_TRACKER_ROUTE}`}>Applications</NavLink>
              <NavLink className='mainnav-link' to={`${Constants.ACTIVITY_TRACKER_ROUTE}`}>Activity</NavLink>
              <NavLink className='mainnav-link' to={`${Constants.NEW_JOB_ROUTE}`}>New Job</NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header