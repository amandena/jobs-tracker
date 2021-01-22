export function addJob(formData) {
  return (dispatch) => {
    dispatch({type: 'ADD_JOB', payload: formData})
  }
}