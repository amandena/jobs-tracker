import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <header>
      <div className="nav navbar-light container">
        <div className="container-fluid">
          <div className="row mainnav-text text-center">
            <div className="col-sm-12">
              <Link to='/'><h1>Jobs Tracker</h1></Link>
              <Link className="mainnav-link" to='/applications-tracker'>Applications</Link>
              <Link className="mainnav-link" to='/goals'>Goals</Link>
              <Link className="mainnav-link" to='/jobs/new'>New Job</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header