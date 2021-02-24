import { combineReducers } from 'redux'
import userReducer from './userReducer'
import searchReducer from './searchReducer'
import mainReducer from './mainReducer'
import favouriteReducer from './favouriteReducer'
import darkModeReducer from './darkModeReducer'

export default combineReducers({
  userReducer,
  searchReducer,
  mainReducer,
  favouriteReducer,
  darkModeReducer
})
