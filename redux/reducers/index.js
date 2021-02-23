import { combineReducers } from 'redux'
import userReducer from './userReducer'
import searchReducer from './searchReducer'
import mainReducer from './mainReducer'
import favouriteReducer from './favouriteReducer'

export default combineReducers({
  userReducer,
  searchReducer,
  mainReducer,
  favouriteReducer
})
