import { SET_FAVS, ADD_FAV, REMOVE_FAV } from '../constants'

const initialState = {
  favourites: []
}


export default (state = initialState, { type, payload}) => {
  switch(type){
    case SET_FAVS:
     return {...state, favourites: payload}
    case ADD_FAV:
     return {...state, favourites: [...state.favourites, payload]}
    case REMOVE_FAV:
     const favs = state.favourites.filter(el=> el.videoId !== payload.videoId )
      return {...state, favourites: favs}
    default:
    return state
  }
}
