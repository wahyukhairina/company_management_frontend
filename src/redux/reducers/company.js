const initialState = {
    company: []
  }
  
  const category = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_COMPANY_PENDING':
        return {
          ...state
        }
      case 'GET_COMPANY_REJECTED':
        return {
          ...state
        }
      case 'GET_COMPANY_FULFILLED':
        return {
          ...state,
          category: action.payload.data
        }
      case 'POST_COMPANY_PENDING':
        return {
          ...state
        }
      case 'POST_COMPANY_REJECTED':
        return {
          ...state
        }
      case 'POST_COMPANY_FULFILLED':
        return {
          ...state,
          category: action.payload.data.result
        }
      case 'DELETE_COMPANY_PENDING':
        return {
          ...state
        }
      case 'DELETE_COMPANY_REJECTED' :

        return {
          ...state
        }
      case 'DELETE_COMPANY_FULFILLED':
        return {
          ...state,
          isLoading: false,
          category: action.payload.data.result
        }
      default:
        return state
    }
  }
  
  export default category