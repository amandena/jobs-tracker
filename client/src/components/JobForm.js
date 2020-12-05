import React from 'react'

class JobForm extends React.Component {
  render() {
    return(
      <div className='job-form container'>
        <div className="spacer"/>
        <form>
          <div className="row form-group">
            <div className="col-8 offset-2 input-group spacer-xs">
              <input 
                type='text' 
                placeholder='Date' 
                name='date'
              />
            </div>
            
            <div className="col-8 offset-2 input-group spacer-xs"></div>
              <input 
                type='text' 
                placeholder='Company Name' 
                name='companyName'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                type='text'
                placeholder='Job Title'
                name='jobTitle'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                type='text'
                placeholder='Application URL'
                name='applicationUrl'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                type='text'
                placeholder='Referral Source'
                name='referralSource'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                type='textarea'
                placeholder='Notes'
                name='notes'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                type='text'
                placeholder='Application Status'
                name='applicationStatus'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                type='submit'
              />
            </div>
          {/* </div> */}
        </form>
      </div>
    )
  }
}

export default JobForm