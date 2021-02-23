import { SET_MAIN_CONTENT } from '../constants'

const initialState = {
  data: []
}
export default (state = initialState, {type, payload})=>{
 switch (type) {
  case SET_MAIN_CONTENT:
    return {...state, data: payload}
  default:
    return state
 }
}
