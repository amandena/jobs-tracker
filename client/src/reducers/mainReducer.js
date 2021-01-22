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
  jobForm: initialJobState,
  jobs: []
}, action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_FORM':
      return {...state, searchForm: action.payload}

    case 'UPDATE_JOB_FORM': 
      return {...state, jobForm: action.payload}

    case 'ADD_JOB':
      return {...state, jobs: state.jobs.concat(action.payload)}

    default:
      return state
  }
}