import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from '../components/Home'
import Applications from '../components/Applications'
import JobForm from '../components/JobForm'
import ActivityTracker from '../components/ActivityTracker'
import Redirect404 from '../components/Redirect404'
import * as Constants from '../helpers/routeConstants'

class JobsContainer extends React.Component {
  render() {
    return(
      <div className='jobs container'>
        <Switch>
          <Route exact path={`${Constants.HOME_ROUTE}`} component={Home}/>
          <Route path={`${Constants.APPLICATIONS_TRACKER_ROUTE}`} component={Applications}/>
          <Route path={`${Constants.NEW_JOB_ROUTE}`} component={JobForm}/>
          <Route path={`${Constants.ACTIVITY_TRACKER_ROUTE}`} component={ActivityTracker}/>
          <Route path="*" component={Redirect404} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(JobsContainer)

//make fetch request here for jobs to pass into Jobs and Job Routes