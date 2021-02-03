import React from 'react'
import ScrollArrow from './ScrollArrow'

const GoalsTracker = () => {
  return(
    <div className='goals container'>
      <div className='row spacer'>
        <div className='col-12'>
          <h3>Goals</h3>
        </div>
      </div>
      <div className='col-12'>
        <label>1 Applications for week of </label>
        <p>{new Date().toLocaleDateString()}</p>
      </div>
      <div className='col-12'>
        <label>Jobs Applied to:</label>
        <p>251</p>
      </div>
      <div className='col-12'>
        <label>Rejections:</label>
        <p>127</p>
      </div>
      <div className='col-12'>
        <label>Personality Assessments:</label>
        <p>3</p>
      </div>
      <div className='col-12'>
        <label>Code Challenges:</label>
        <p>6</p>
      </div>
      <div className='col-12'>
        <label>HR Interviews:</label>
        <p>9</p>
      </div>
      <div className='col-12'>
        <label>Technical Interviews:</label>
        <p>3</p>
      </div>
      <div className='col-12'>
        <label>Internships:</label>
        <p>2</p>
      </div>
      <div className='col-12'>
        <label>Non-Technical Tech Interview:</label>
        <p>1</p>
      </div>
      <div className='col-12'>
        <label>Third Round:</label>
        <p>1</p>
      </div>
      <ScrollArrow/>
    </div>
  )
}

export default GoalsTracker