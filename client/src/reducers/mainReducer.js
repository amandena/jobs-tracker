const initialSearchState = {
  searchBox: ''
}

const initialJobState = {
  date: '',
  companyName: '',
  jobTitle: '',
  applicationUrl: '',
  referralSource: '',
  notes: '',
  applicationStatus: ''
}

export default function mainReducer(state = {
  searchForm: initialSearchState,
  jobForm: initialJobState
}, action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_FORM':
      return {...state, searchForm: action.payload}

    default:
      return state
  }
}