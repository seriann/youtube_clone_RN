import { SET_MAIN_CONTENT } from '../constants'
import { Youtube } from '../../api/youtubeApi'

const setContent = (data) => ({
     type:SET_MAIN_CONTENT,
  payload: data
})

export const fetchMainVideos = () => (dispatch) => {
  const y = new Youtube("",20)
  return y.getVideos().then(res=> dispatch(setContent(res.items))).catch(err=>err)
}
