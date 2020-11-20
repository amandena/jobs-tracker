import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Job from '../components/Job'
import Applications from '../components/Applications'
import JobForm from '../components/JobForm'
import GoalsTracker from '../components/GoalsTracker'

class JobsContainer extends React.Component {
  render() {
    return(
      <div className='jobs-container'>
        JobsContainer
        <Switch>
          <Route path='/applications-tracker' component={Applications}/>
          <Route path='/jobs/new' component={JobForm}/>
          <Route path='/jobs/:id' component={Job}/>
          <Route path='/goals' component={GoalsTracker}/>
        </Switch>
      </div>
    )
  }
}

export default JobsContainer

//make fetch request here for jobs to pass into Jobs and Job Routes