import React from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { updateJobForm } from '../actions/updateJobForm'
import { addJob } from '../actions/addJob'
import ScrollArrow from './ScrollArrow'

const jobFormSchema = Yup.object().shape({
  date: Yup.string().required(),
  companyName: Yup.string().required(),
  jobTitle: Yup.string().required(),
  applicationUrl: Yup.string().required(),
  referralSource: Yup.string().required(),
  notes: Yup.string().required(),
  applicationStatus: Yup.string().required()
})

const jobFormInputs = [
  {key: 'date', value: 'Date'},
  {key: 'companyName', value: 'Company Name'},
  {key: 'jobTitle', value: 'Job Title'},
  {key: 'applicationUrl', value: 'Application URL'},
  {key: 'referralSource', value: 'Referral Source'},
  {key: 'notes', value: 'Notes'},
  {key: 'applicationStatus', value: 'Application Status'}
]

const JobForm = ({ jobForm, updateJobForm, addJob, history }) => {
  const handleChange = e => {
    const { name, value } = e.target
    const updatedFormInfo = {
      ...jobForm,
      [name]: value
    }
    updateJobForm(updatedFormInfo)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addJob(jobForm, history)
  }

    return(
      <div className='job-form container'>
        <div className='spacer'/>
        <h3>New Job Application</h3>
        <form onSubmit={handleSubmit}>
          <div className='row form-group'>
            <div className='col-8 offset-2 spacer-xs mb-1'>
              <div className='form-floating'>
                <input 
                  className='form-control input-lg'
                  id='dateFloat'
                  type='text' 
                  placeholder='Date' 
                  name='date'
                  value={jobForm.date}
                  onChange={handleChange}
                  autoComplete='off'
                />
                <label htmlFor='dateFloat'>Date</label>
              </div>
            </div>
            <div className='col-8 offset-2 spacer-xs mb-1'>
              <div className='form-floating'>
                <input 
                  className='form-control input-lg'
                  id='companyNameFloat'
                  type='text' 
                  placeholder='Company Name' 
                  name='companyName'
                  value={jobForm.companyName}
                  onChange={handleChange}
                  autoComplete='off'
                />
                <label htmlFor='companyNameFloat'>Company Name</label>
              </div>
            </div>
            <br/>
            <div className='col-8 offset-2 spacer-xs mb-1'>
              <div className='form-floating'>
                <input
                  className='form-control input-lg'
                  id='jobTitleFloat'
                  type='text'
                  placeholder='Job Title'
                  name='jobTitle'
                  value={jobForm.jobTitle}
                  onChange={handleChange}
                  autoComplete='off'
                />
                <label htmlFor='jobTitleFloat'>Job Title</label>
              </div>
            </div>
            <br/>
            <div className='col-8 offset-2 spacer-xs mb-1'>
              <div className='form-floating'>
                <input
                  className='form-control input-lg'
                  id='applicationUrlFloat'
                  type='text'
                  placeholder='Application URL'
                  name='applicationUrl'
                  value={jobForm.applicationUrl}
                  onChange={handleChange}
                  autoComplete='off'
                />
                <label htmlFor='applicationUrlFloat'>Application URL</label>
              </div>
            </div>
            <br/>
            <div className='col-8 offset-2 spacer-xs mb-1'>
              <div className='form-floating'>
                <input
                  className='form-control input-lg'
                  id='referralSourceFloat'
                  type='text'
                  placeholder='Referral Source'
                  name='referralSource'
                  value={jobForm.referralSource}
                  onChange={handleChange}
                  autoComplete='off'
                />
                <label htmlFor='referralSourceFloat'>Referral Source</label>
              </div>
            </div>
            <br/>
            <div className='col-8 offset-2 spacer-xs mb-1'>
              <div className='form-floating'>
                <input
                  className='form-control input-lg'
                  id='notesFloat'
                  type='textarea'
                  placeholder='Notes'
                  name='notes'
                  value={jobForm.notes}
                  onChange={handleChange}
                  autoComplete='off'
                />
                <label htmlFor='notesFloat'>Notes</label>
              </div>
            </div>
            <br/>
            <div className='col-8 offset-2 spacer-xs mb-2'>
              <div className='form-floating'>
                <input
                  className='form-control input-lg'
                  id='applicationStatusFloat'
                  type='text'
                  placeholder='Application Status'
                  name='applicationStatus'
                  value={jobForm.applicationStatus}
                  onChange={handleChange}
                  autoComplete='off'
                />
                <label htmlFor='applicationStatusFloat'>Application Status</label>
              </div>
            </div>
            <br/><br/>
            <div className='col-8 offset-2 spacer-xs justify-content-center'>
              <input
                className='btn btn-secondary mb-3'
                type='submit'
              />
            </div>
          </div>
        </form>
        <ScrollArrow/>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    jobForm: state.mainReducer.jobForm
  }
}

export default connect(mapStateToProps, { updateJobForm, addJob })(JobForm)