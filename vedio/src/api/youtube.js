import axios from 'axios';

const APIKEY = 'AIzaSyAQpXGoCMfxA2RPAQoz5Qqa5qYhpxBYsI0';

export default axios.create({
    baseURL :'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:APIKEY
    }
})