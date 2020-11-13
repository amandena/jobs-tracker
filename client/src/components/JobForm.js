import React from 'react'

class JobForm extends React.Component {
  render() {
    return(
      <div className='job-form'>
        <form>
          <input 
            type='text' 
            placeholder='Date' 
            name='date'
          />
          <br/>
          <input 
            type='text' 
            placeholder='Company Name' 
            name='companyName'
          />
          <br/>
          <input
            type='text'
            placeholder='Job Title'
            name='jobTitle'
          />
          <br/>
          <input
            type='text'
            placeholder='Application URL'
            name='applicationUrl'
          />
          <br/>
          <input
            type='text'
            placeholder='Referral Source'
            name='referralSource'
          />
          <br/>
          <input
            type='textarea'
            placeholder='Notes'
            name='notes'
          />
          <br/>
          <input
            type='text'
            placeholder='Application Status'
            name='applicationStatus'
          />
          <br/>
          <input
            type='submit'
          />
        </form>
      </div>
    )
  }
}

export default JobForm