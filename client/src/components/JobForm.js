import React from 'react'
import { connect } from 'react-redux'
import { updateJobForm } from '../actions/updateJobForm'

const JobForm = ({ jobForm, updateJobForm }) => {
  const handleChange = e => {
    const { name, value } = e.target
    const updatedFormInfo = {
      ...jobForm,
      [name]: value
    }
    updateJobForm(updatedFormInfo)
  }

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
                value={jobForm.date}
                onChange={handleChange}
              />
            </div>
            
            <div className="col-8 offset-2 input-group spacer-xs">
              <input 
                className="form-control input-lg"
                type='text' 
                placeholder='Company Name' 
                name='companyName'
                value={jobForm.companyName}
                onChange={handleChange}
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                className="form-control input-lg"
                type='text'
                placeholder='Job Title'
                name='jobTitle'
                value={jobForm.jobTitle}
                onChange={handleChange}
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                className="form-control input-lg"
                type='text'
                placeholder='Application URL'
                name='applicationUrl'
                value={jobForm.applicationUrl}
                onChange={handleChange}
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                className="form-control input-lg"
                type='text'
                placeholder='Referral Source'
                name='referralSource'
                value={jobForm.referralSource}
                onChange={handleChange}
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                className="form-control input-lg"
                type='textarea'
                placeholder='Notes'
                name='notes'
                value={jobForm.notes}
                onChange={handleChange}
              />
            </div>
            <br/>
            <div className="col-8 offset-2 input-group spacer-xs">
              <input
                className="form-control input-lg"
                type='text'
                placeholder='Application Status'
                name='applicationStatus'
                value={jobForm.applicationStatus}
                onChange={handleChange}
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

const mapStateToProps = state => {
  return {
    jobForm: state.mainReducer.jobForm
  }
}

export default connect(mapStateToProps, { updateJobForm })(JobForm)