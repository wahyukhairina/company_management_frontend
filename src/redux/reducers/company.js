const initialState = {
    company: [],
    detail : []
  }
  
  const company = (state = initialState, action) => {
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
          company: action.payload.data.result
        }
        case 'GET_COMPANY_DETAILS_PENDING':
          return {
            ...state
          }
        case 'GET_COMPANY_DETAILS_REJECTED':
          return {
            ...state
          }
        case 'GET_COMPANY_DETAILS_FULFILLED':
          return {
            ...state,
            detail: action.payload.data[0]
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
          company: action.payload.data.result
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
          company: action.payload.data.result
        }
      default:
        return state
    }
  }
  
  export default company