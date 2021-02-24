import axios from 'axios'

//las api keys comentadas ya excedieron la cuota semanal (err status 403)
//si la app devuelve el err status, abria que crear otra api key en google para poder probarla
//const API_KEY= "AIzaSyDcC_2lHAxWdJ6LLjO_fKvHAi1nopVhsgI"
//const API_KEY= "AIzaSyA1y3gy9MOO08frDrD6QGxpUVdEXF6O57Y"
const API_KEY= "AIzaSyCFiUNFgrPc599sffg79wZ6LKSzyJDauok"

class Youtube {
  constructor(search, videoId, maxNum = 15){
    this.MAIN_VIDEOS = axios.create({
      baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxNum}&q=${search}&type=video&key=${API_KEY}`
    })
    this.REALTED_VIDEOS = axios.create({
      baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${API_KEY}`
    })
  }

  getVideos () {
    return this.MAIN_VIDEOS.get()
                   .then(res => res.data)
                   .catch(err => {
                     console.log(err);
                     return err
                   })
  }

  getRelatedVideos(){
    return this.REALTED_VIDEOS.get()
                              .then(res=> res.data)
                              .catch(err=> {
                                console.log(err)
                                return err
                              })
  }

}


export { Youtube }
