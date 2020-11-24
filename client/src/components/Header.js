import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className="nav navbar-light">
      <div className="container-fluid">
        <div className="row mainnav-text text-center">
          <div className="col-sm-12">
            <h1>Jobs Tracker</h1>
            <Link className="mainnav-link" to='/applications-tracker'>Applications</Link>
            <Link className="mainnav-link" to='/goals'>Goals</Link>
            <Link className="mainnav-link" to='/jobs/new'>Add Job</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header