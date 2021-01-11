const initialSearchState = {
  searchBox: ''
}

export default function mainReducer(state = {
  searchForm: initialSearchState
}, action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_FORM':
      return {...state, searchForm: action.payload}
      
    default:
      return state
  }
}