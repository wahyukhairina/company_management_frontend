import axios from 'axios'

export const getCompany = () => {
  return {
    type: 'GET_COMPANY',
    payload: axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/company`
    })
  }
}

export const postCompany = (data) => {
  return {
    type: 'POST_COMPANY',
    payload: axios.post(`${process.env.REACT_APP_API_URL}/company`, data)
  }
}

export const deleteCompany = (id) => {
  return {
    type: 'DELETE_COMPANY',
    payload: axios.delete(`${process.env.REACT_APP_API_URL}/company/${id}`)
  }
}