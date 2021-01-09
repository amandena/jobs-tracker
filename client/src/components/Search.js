import React from 'react'
import { connect } from 'react-redux'

const Search = ({ searchForm, updateSearchForm }) => {
  const handleChange = e => {
    const { name, value } = e.target
    const updatedFormInfo = {
      ...searchForm,
      [name]: value
    }
    updateSearchForm(updatedFormInfo)
  }

  return(
    <div className='search container'>
      <div className="spacer"/>
      <form>
        <div className="row form-group">
          <div className="col-8 offset-2 input-group spacer-xs">
            <input 
              className="form-control input-lg"
              type='text'
              name='searchBox'
              // value={}
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

export default connect(mapStateToProps, { updateSearchForm })(Search)