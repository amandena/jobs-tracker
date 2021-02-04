import React from 'react'
import ScrollArrow from './ScrollArrow'

const ActivityTracker = () => {
  return(
    <div className='goals container'>
      <div className='row spacer'>
        <div className='col-12'>
          <h3>Activity Tracker</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>1 Applications for week of</label>
        </div>
        <div className='col-6 text-start'>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Jobs Applied to:</label>
        </div>
        <div className='col-6 text-start'>
          <p>252</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Rejections:</label>
        </div>
        <div className='col-6 text-start'>
          <p>127</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Personality Assessments:</label>
        </div>
        <div className='col-6 text-start'>
          <p>3</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Code Challenges:</label>
        </div>
        <div className='col-6 text-start'>
          <p>6</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>HR Interviews:</label>
        </div>
        <div className='col-6 text-start'>
          <p>9</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Technical Interviews:</label>
        </div>
        <div className='col-6 text-start'>
          <p>3</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Internships:</label>
        </div>
        <div className='col-6 text-start'>
          <p>2</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Non-Technical Tech Interview:</label>
        </div>
        <div className='col-6 text-start'>
          <p>1</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Third Round:</label>
        </div>
        <div className='col-6 text-start'>
          <p>1</p>
        </div>
      </div>
      <ScrollArrow/>
    </div>
  )
}

export default ActivityTracker