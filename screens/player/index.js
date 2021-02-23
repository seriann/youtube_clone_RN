import React,{ useState, useEffect } from 'react'
import Player from './partials/PlayerComponent'
import { Youtube } from '../../api/youtubeApi'

const PlayerScreen = ({ route, navigation}) => {

const { videoId, title, channel } = route.params
const [relatedVideos, setRelatedVideos] = useState([])

useEffect(()=>{
  let subscribed = true
  if(subscribed){
    const y = new Youtube(null, videoId)
    y.getRelatedVideos()
     .then(res=> setRelatedVideos(res.items))
     .catch(err=>console.log(err))
  }
  return () => subscribed = false
},[])

const handleNavigate = () => {
  navigation.push('player',{videoId,title,channel})
}

//const videoUrl = `https://rest-api-sockets.herokuapp.com/playVideo?=${videoId}`
const videoUrl = `http://www.youtube.com/embed/${videoId}`
console.log("ID",videoId);
    return <Player
            relatedVideos={relatedVideos}
            videoUrl={videoUrl}
            title={title}
            channel={channel}
            handleNavigate={handleNavigate}
           />
}

export default PlayerScreen
