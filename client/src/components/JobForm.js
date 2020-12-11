import React from 'react'

class JobForm extends React.Component {
  render() {
    return(
      <div className='job-form container'>
        <div className="spacer"/>
        <h3>New Job Application</h3>
        <form>
          <div className="row form-group">
            <div className="col-8 offset-2 input-group spacer-xs">
              <input 
                className="form-control input-lg"
                type='text' 
                placeholder='Date' 
                name='date'
              />
            </div>
            
            <div className="col-8 offset-2 input-group spacer-xs">
              <input 
                className="form-control input-lg"
                type='text' 
                placeholder='Company Name' 
                name='companyName'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                className="form-control input-lg"
                type='text'
                placeholder='Job Title'
                name='jobTitle'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                className="form-control input-lg"
                type='text'
                placeholder='Application URL'
                name='applicationUrl'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                className="form-control input-lg"
                type='text'
                placeholder='Referral Source'
                name='referralSource'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                className="form-control input-lg"
                type='textarea'
                placeholder='Notes'
                name='notes'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                className="form-control input-lg"
                type='text'
                placeholder='Application Status'
                name='applicationStatus'
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                className="btn btn-secondary"
                type='submit'
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default JobForm