import axios from 'axios'

export const getOffice = (id) => {
  console.log('id action', id)
  return {
    type: 'GET_OFFICE',
    payload: axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/office/${id}`
    })
  }
}

export const postOffice = (data) => {
  return {
    type: 'POST_OFFICE',
    payload: axios.post(`${process.env.REACT_APP_API_URL}/office`, data)
  }
}

export const deleteOffice = (id) => {
  return {
    type: 'DELETE_OFFICE',
    payload: axios.delete(`${process.env.REACT_APP_API_URL}/office/${id}`)
  }
}