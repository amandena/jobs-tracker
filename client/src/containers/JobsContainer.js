import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Jobs from '../components/Jobs'
import JobForm from '../components/JobForm'

class JobsContainer extends React.Component {
  render() {
    return(
      <div className='jobs-container'>
        JobsContainer
        <Switch>
          <Route path='/jobs/new' component={JobForm}/>
          <Route path='/jobs' component={Jobs}/>
        </Switch>
      </div>
    )
  }
}

export default JobsContainer

//make fetch request here for jobs to pass into Jobs and Job Routes