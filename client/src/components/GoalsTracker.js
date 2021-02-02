import React from 'react'
import ScrollArrow from './ScrollArrow'

const GoalsTracker = () => {
  return(
    <div className='goals container'>
      <div className='row spacer'>
        <div className='col-12'>
          <h3>Goals</h3>
          <p>1 Applications for week of {new Date().toLocaleDateString()}</p>

          <p>Jobs Applied to: 251</p>
          <p>Rejections: 127</p>
          <p>Personality Assessments: 3</p>
          <p>Code Challenges: 6</p>
          <p>HR Interviews: 9</p>
          <p>Technical Interviews: 3</p>
          <p>Internships: 2</p>
          <p>Non-Technical Tech Interview: 1</p>
          <p>Third Round: 1</p>
        </div>
      </div>
      <ScrollArrow/>
    </div>
  )
}

export default GoalsTracker