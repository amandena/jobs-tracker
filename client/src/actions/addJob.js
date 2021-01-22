export function addJob(formData, history) {
  return (dispatch) => {
    dispatch({type: 'ADD_JOB', payload: formData})
    dispatch({type: 'CLEAR_JOB_FORM'})
    history.push('/applications-tracker')
  }
}