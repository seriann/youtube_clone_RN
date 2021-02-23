import axios from 'axios'

//2 api keys por si una excede la cuota diaria (err status 403)
//const API_KEY= "AIzaSyDcC_2lHAxWdJ6LLjO_fKvHAi1nopVhsgI"
const API_KEY= "AIzaSyA1y3gy9MOO08frDrD6QGxpUVdEXF6O57Y"

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
