const initialState = {
    office: []
  }
  
  const office = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_OFFICE_PENDING':
        return {
          ...state
        }
      case 'GET_OFFICE_REJECTED':
        return {
          ...state
        }
      case 'GET_OFFICE_FULFILLED':
        return {
          ...state,
          office: action.payload.data.result
        }
      case 'POST_OFFICE_PENDING':
        return {
          ...state
        }
      case 'POST_OFFICE_REJECTED':
        return {
          ...state
        }
      case 'POST_OFFICE_FULFILLED':
        return {
          ...state,
          office: action.payload.data.result
        }
      case 'DELETE_OFFICE_PENDING':
        return {
          ...state
        }
      case 'DELETE_OFFICE_REJECTED' :

        return {
          ...state
        }
      case 'DELETE_OFFICE_FULFILLED':
        return {
          ...state,
          isLoading: false,
          office: action.payload.data.result
        }
      default:
        return state
    }
  }
  
  export default office