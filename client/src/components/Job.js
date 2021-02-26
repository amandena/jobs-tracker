import React from 'react'

const Job = () => {
  return(
    <div className='job container'>
      <div className='row'>
        <div className='col-12'>
          <h3>Vitalcy</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Start Date:</label>
        </div>
        <div className='col-6 text-start'>
          <p>9/15/20</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Job Title:</label>
        </div>
        <div className='col-6 text-start'>
          <p>Internship</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Application URL:</label>
        </div>
        <div className='col-6 text-start'>
          <p>N/A - LinkedIn</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Referral Source:</label>
        </div>
        <div className='col-6 text-start'>
          <p>Medium Blog Post</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 text-end'>
          <label>Application Status:</label>
        </div>
        <div className='col-6 text-start'>
          <p>Hired!</p>
        </div>
      </div>
    </div>
  )
}

export default Job