import { combineReducers } from 'redux'
import company from './company'
import office from './office'
import detail from './office'

export default combineReducers({
  company,
  office,
  detail
})