import React from 'react'
import { connect } from 'react-redux'
import { updateSearchForm } from '../actions/updateSearchForm'
import { doSearch } from '../actions/doSearch'

const Search = ({ searchForm, updateSearchForm, doSearch }) => {
  const handleChange = e => {
    const { name, value } = e.target
    const updatedFormInfo = {
      ...searchForm,
      [name]: value
    }
    updateSearchForm(updatedFormInfo)
  }

  const handleSubmit = e => {
    e.preventDefault()
    doSearch(searchForm)
  }

  return(
    <div className='search container'>
      <div className='spacer'/>
      <form onSubmit={handleSubmit}>
        <div className='row form-group'>
          <div className='col-md-8 offset-2 spacer-xs mb-2'>
            <div className='form-floating'>
              <input 
                className='form-control input-lg'
                id='searchFloat'
                placeholder='Search'
                type='text'
                name='searchBox'
                value={searchForm.searchBox}
                onChange={handleChange}
                autoComplete='off'
              />
              <label htmlFor='searchFloat'>Search</label>
            </div>
          </div>
          <br/><br/>
          <div className='col-8 offset-2 spacer-xs justify-content-center'>
            <input 
              className='btn btn-secondary mb-3'
              type='submit' 
              value='Search'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchForm: state.mainReducer.searchForm
  }
}

export default connect(mapStateToProps, { updateSearchForm, doSearch })(Search)