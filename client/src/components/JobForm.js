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

const jobFormInputs = [
  {key: 'date', value: 'Date'},
  {key: 'companyName', value: 'Company Name'},
  {key: 'jobTitle', value: 'Job Title'},
  {key: 'applicationUrl', value: 'Application URL'},
  {key: 'referralSource', value: 'Referral Source'},
  {key: 'notes', value: 'Notes'},
  {key: 'applicationStatus', value: 'Application Status'}
]

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
                {jobFormInputs.map(input => {
                  return <div className='form-floating mb-1' key={input.key}>
                    <Field 
                      className={`form-control input-lg ${touched.input && errors.input ? "is-invalid" : ""}`}
                      id={input}
                      placeholder={input.value}
                      type='text'
                      name={input.key}
                      autoComplete='off'
                    />
                    <label htmlFor={input}>{input.value}</label>
                    <ErrorMessage name={input.key} className='invalid-feedback' component='div'/>
                  </div>
                })}
              </div>
              <br/><br/>
              <div className='col-8 offset-2 spacer-xs justify-content-center'>
                <input
                  className='btn btn-secondary mb-3'
                  type='submit'
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