import axios from "axios"

const KEY = "AIzaSyDgwxRBp1-ZSC1GI-qrDlRvRZHcyWfxIPE"
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        type:"video",
        maxResults: 5,
        key: KEY,
    },
})
