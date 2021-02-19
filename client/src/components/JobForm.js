import React from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { addJob } from '../actions/addJob'
import ScrollArrow from './ScrollArrow'

const jobFormSchema = Yup.object().shape({
  date: Yup.string().required('Please enter the date.'),
  companyName: Yup.string().required('Please enter the company name.'),
  jobTitle: Yup.string().required('Please enter the job title.'),
  applicationUrl: Yup.string().required('Please enter the application URL.'),
  referralSource: Yup.string().required('Please enter the referral source.'),
  notes: Yup.string().required('Please enter any notes'),
  applicationStatus: Yup.string().required('Please enter the status of your application.')
})

const JobForm = ({ addJob, history }) => {

  return (
    <div className='job-form container'>
      <div className='spacer'/>
      <h3>New Job Application</h3>
      <Formik
        initialValues={{
          date: '',
          companyName: '',
          jobTitle: '',
          applicationUrl: '',
          referralSource: '',
          notes: '',
          applicationStatus: ''
        }}
        validationSchema={jobFormSchema}
        onSubmit={async (values, {setStatus}) => {
          const response = await addJob(values, history)
          if (response && response.status >= 300) {
            setStatus({message: "Something went wrong. Please try again later."})
          }
        }}  
      >
        {({ touched, errors, status}) => (
          <Form>
            <div className='row form-group'>
              <div className='col-8 offset-2 spacer-xs mb-2'>
                <div className='form-floating'>
                  <Field 
                    className={`form-control input-lg ${touched.date && errors.date ? "is-invalid" : ""}`}
                    id='dateField'
                    placeholder='Date'
                    type='text'
                    name='date'
                    autoComplete='off'
                  />
                  <label htmlFor='dateField'>Date</label>
                  <ErrorMessage name='date' className='invalid-feedback text-start' component='div'/>
                </div>
              </div>
              <div className='col-8 offset-2 spacer-xs mb-2'>
                <div className='form-floating'>
                  <Field 
                    className={`form-control input-lg ${touched.companyName && errors.companyName ? "is-invalid" : ""}`}
                    id='companyNameField'
                    placeholder='Company Name'
                    type='text'
                    name='companyName'
                    autoComplete='off'
                  />
                  <label htmlFor='companyNameField'>Company Name</label>
                  <ErrorMessage name='companyName' className='invalid-feedback text-start' component='div'/>
                </div>
              </div>
              <div className='col-8 offset-2 spacer-xs mb-2'>
                <div className='form-floating'>
                  <Field 
                    className={`form-control input-lg ${touched.jobTitle && errors.jobTitle ? "is-invalid" : ""}`}
                    id='jobTitleField'
                    placeholder='Job Title'
                    type='text'
                    name='jobTitle'
                    autoComplete='off'
                  />
                  <label htmlFor='jobTitleField'>Job Title</label>
                  <ErrorMessage name='jobTitle' className='invalid-feedback text-start' component='div'/>
                </div>
              </div>
              <div className='col-8 offset-2 spacer-xs mb-2'>
                <div className='form-floating'>
                  <Field 
                    className={`form-control input-lg ${touched.applicationUrl && errors.applicationUrl ? "is-invalid" : ""}`}
                    id='applicationUrlField'
                    placeholder='Application URL'
                    type='text'
                    name='applicationUrl'
                    autoComplete='off'
                  />
                  <label htmlFor='applicationUrlField'>Application URL</label>
                  <ErrorMessage name='applicationUrl' className='invalid-feedback text-start' component='div'/>
                </div>
              </div>
              <div className='col-8 offset-2 spacer-xs mb-2'>
                <div className='form-floating'>
                  <Field 
                    className={`form-control input-lg ${touched.referralSource && errors.referralSource ? "is-invalid" : ""}`}
                    id='referralSourceField'
                    placeholder='Referral Source'
                    type='text'
                    name='referralSource'
                    autoComplete='off'
                  />
                  <label htmlFor='referralSourceField'>Referral Source</label>
                  <ErrorMessage name='referralSource' className='invalid-feedback text-start' component='div'/>
                </div>
              </div>
              <div className='col-8 offset-2 spacer-xs mb-2'>
                <div className='form-floating'>
                  <Field 
                    className={`form-control input-lg ${touched.notes && errors.notes ? "is-invalid" : ""}`}
                    id='notesField'
                    placeholder='Notes'
                    type='text'
                    name='notes'
                    autoComplete='off'
                  />
                  <label htmlFor='notesField'>Notes</label>
                  <ErrorMessage name='notes' className='invalid-feedback text-start' component='div'/>
                </div>
              </div>
              <div className='col-8 offset-2 spacer-xs mb-2'>
                <div className='form-floating'>
                  <Field 
                    className={`form-control input-lg ${touched.applicationStatus && errors.applicationStatus ? "is-invalid" : ""}`}
                    id='applicationStatusField'
                    placeholder='Application Status'
                    type='text'
                    name='applicationStatus'
                    autoComplete='off'
                  />
                  <label htmlFor='applicationStatusField'>Application Status</label>
                  <ErrorMessage name='applicationStatus' className='invalid-feedback text-start' component='div'/>
                </div>
              </div>
              <br/><br/>
              {status && status.message ? <div className={`col-8 offset-2 text-center alert ${status >= 300 ? "alert-danger" : "alert-success"}`}>
                {status.message}
              </div> : null}
              <div className='col-8 offset-2 spacer-xs justify-content-center'>
                <Field
                  id='jobSubmit'
                  className='btn btn-secondary mb-3'
                  type='submit'
                  value='SUBMIT'
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ScrollArrow/>
    </div>
  )
}

export default connect(null, { addJob })(JobForm)