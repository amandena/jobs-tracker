import React from 'react'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { doSearch } from '../actions/doSearch'

const searchFormSchema = Yup.object().shape({
  searchBox: Yup.string()
})

const Search = ({ doSearch }) => {

  return(
    <div className='search container'>
      <div className='spacer'/>
      <Formik
        initialValues={{
          searchBox: ''
        }}
        validationSchema={searchFormSchema}
        onSubmit={async (values, {setStatus}) => {
          const response = await doSearch(values)
          if (response && response.status >= 300) {
            setStatus({message: "Something went wrong. Please try again later."})
          }
        }}  
      >
        {({ touched, errors, status }) => (
          <Form>
            <div className='row form-group'>
              <div className='col-md-8 offset-2 spacer-xs mb-2'>
                <div className='form-floating'>
                  <Field 
                    className={`form-control input-lg ${touched.searchBox && errors.searchBox ? "is-invalid" : ""}`}
                    id='searchFloat'
                    placeholder='Search'
                    type='text'
                    name='searchBox'
                    autoComplete='off'
                  />
                  <label htmlFor='searchFloat'>Search</label>
                  <ErrorMessage name='searchBox' className='invalid-feedback' component='div'/>
                </div>
              </div>
              <br/><br/>
              {status && status.message ? <div className={`col-8 offset-2 text-center alert ${status >= 300 ? "alert-danger" : "alert-success"}`}>
                {status.message}
              </div> : null}
              <div className='col-8 offset-2 spacer-xs justify-content-center'>
                <Field 
                  id='searchSubmit'
                  className='btn btn-secondary mb-3'
                  type='submit' 
                  value='Search'
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default connect(null, { doSearch })(Search)