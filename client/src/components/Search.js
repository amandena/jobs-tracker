import React from 'react'

const Search = () => {
  return(
    <div className='search container'>
      <div className="spacer"/>
      <form>
        <div className="row form-group">
          <div className="col-8 offset-2 input-group spacer-xs">
            <input 
              className="form-control input-lg"
              type='text'
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

export default Search