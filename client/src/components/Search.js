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
      <div className="spacer"/>
      <form onSubmit={handleSubmit}>
        <div className="row form-group">
          <div className="col-8 offset-2 input-group spacer-xs">
            <input 
              className="form-control input-lg"
              type='text'
              name='searchBox'
              value={searchForm.searchBox}
              onChange={handleChange}
            />
          </div>
          <div className="col-8 offset-2 input-group spacer-xs">
            <input 
              className="btn btn-secondary"
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