import axios from 'axios'

const API_KEY= "AIzaSyDcC_2lHAxWdJ6LLjO_fKvHAi1nopVhsgI"


class Youtube {
  constructor(search, maxNum = 15){
    this.API = axios.create({
      baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxNum}&q=${search}&type=video&key=${API_KEY}`
    })
  }

  getVideos () {
    return this.API.get()
                   .then(res => res.data)
                   .catch(err => {
                     console.log(err);
                     return err
                   })
  }

}


export { Youtube }
