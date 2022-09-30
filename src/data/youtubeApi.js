import axios from "axios"

const KEY = "AIzaSyBUxIRuMVWrCsGHAX1-0vDvHz1Serw_5ZA"
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type:"video",
        maxResults: 5,
        key: KEY,
    },
})
