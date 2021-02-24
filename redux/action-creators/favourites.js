import { SET_FAVS, ADD_FAV, REMOVE_FAV } from '../constants'
import API from '../../api/usersApi'

const setFavourites = (data) => ({ type: SET_FAVS, payload: data })

const addFav = (data) => ({ type: ADD_FAV, payload: data })

const removeFav = (data) => ({ type: REMOVE_FAV, payload: data })

export const fetchFavourites = (userId) => (dispatch) => {
  API.get(`/user/${userId}/show/favVideos`)
     .then(({ data })=> dispatch(setFavourites(data)))
     .catch(err=>err)
}

export const addFavourite = (userId,videoId,img,title,channel) => (dispatch) => {
  API.post(`/user/${userId}/add/favVideos`,{
    videoId,
    img,
    title,
    channel
  })
    .then(({ data })=> {
      if(typeof data === 'string') return;
      console.log("data",data);
      dispatch(addFav(data))
    })
    .catch(err=> err)
}

export const removeFavourite = (userId,videoId,img,title,channel) => (dispatch) => {
  API.put(`/user/${userId}/rem/favVideos`,{
    videoId,
    img,
    title,
    channel
  })
    .then(({ data })=> {
      if(typeof data === 'string') return;
      dispatch(removeFav(data))
    })
    .catch(err=> err)
}
