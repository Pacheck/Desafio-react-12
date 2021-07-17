import axios from 'axios';

const API = (media) => axios.create({
    baseURL: `https://api.themoviedb.org/3/${media}/popular?api_key=cb885258165379dc7088a315eb854018&language=en-US`
});

export default API;