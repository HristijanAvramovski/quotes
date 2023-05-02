import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/quotes',
    headers: {
        'X-Api-Key' : 'Jx4tmEV7VvfU44mfmwpVM2Nlo3QqVLlWrNfuvrKF'
    }

})
export default instance;