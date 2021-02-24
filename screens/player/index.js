import React,{ useState, useEffect } from 'react'
import Player from './partials/PlayerComponent'
import { Youtube } from '../../api/youtubeApi'
import { addFavourite, removeFavourite } from '../../redux/action-creators/favourites'
import { useDispatch, useSelector } from 'react-redux'

const PlayerScreen = ({ route, navigation}) => {

const dispatch = useDispatch()
const userId = useSelector((state)=> state.userReducer.user._id)
const favourites = useSelector((state)=> state.favouriteReducer.favourites)

const { videoId, title, channel, image, liked } = route.params
const [relatedVideos, setRelatedVideos] = useState([])
const [isLiked, setIsLiked] = useState(false)
const [dislike, setDislike] = useState(false)

useEffect(()=>{
  let subscribed = true
  if(liked){          //el parametro liked sirve para no tener que recorrer el array
    setIsLiked(true)  //de favoritos si venimos de la screen favourites
  }
   else if(!liked){
     favourites.map(el=>{
     if(el.videoId === videoId) setIsLiked(true)
  })
}
  if(subscribed){
    const y = new Youtube(null, videoId)  //trae los videos relacionados
    y.getRelatedVideos()
     .then(res=> setRelatedVideos(res.items))
     .catch(err=>console.log(err))
  }
  return () => subscribed = false
},[])

const handleFav = (userId, videoId, image, title, channel) => {
  dispatch(addFavourite(userId,videoId,image,title,channel))
  setIsLiked(true)
}

const handleDislike = (userId, videoId, image, title, channel) => {
  dispatch(removeFavourite(userId,videoId,image,title,channel))
  setIsLiked(false)
  setDislike(true)
}

const handleNavigate = (id,title,channel,image) => {
  navigation.push('player',{videoId:id,title:title,channel:channel,image:image})
}

//const videoUrl = `https://rest-api-sockets.herokuapp.com/playVideo?=${videoId}`
const videoUrl = `http://www.youtube.com/embed/${videoId}`

    return <Player
            handleDislike={handleDislike}
            dislike={dislike}
            isLiked={isLiked}
            handleFav={handleFav}
            userId={userId}
            videoId={videoId}
            relatedVideos={relatedVideos}
            videoUrl={videoUrl}
            title={title}
            image={image}
            channel={channel}
            handleNavigate={handleNavigate}
           />
}

export default PlayerScreen
