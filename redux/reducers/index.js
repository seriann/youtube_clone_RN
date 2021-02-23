import { combineReducers } from 'redux'
import userReducer from './userReducer'
import searchReducer from './searchReducer'
import mainReducer from './mainReducer'

export default combineReducers({
  userReducer,
  searchReducer,
  mainReducer
})
