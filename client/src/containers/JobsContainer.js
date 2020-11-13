import React from 'react'
import Jobs from '../components/Jobs'
import JobForm from '../components/JobForm'

class JobsContainer extends React.Component {
  render() {
    return(
      <div className='jobs-container'>
        JobsContainer
        <Jobs/>
        <JobForm/>
      </div>
    )
  }
}

export default JobsContainer

//make fetch request here for jobs to pass into Jobs and Job Routes