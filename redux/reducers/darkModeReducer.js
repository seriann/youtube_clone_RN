import { DARK_MODE } from '../constants'

const initialState = {
  dark: false
}

export default (state = initialState, { type, payload })=>{
  switch (type) {
    case DARK_MODE:
      return {...state, dark: payload}
    default:
     return state
  }
}
