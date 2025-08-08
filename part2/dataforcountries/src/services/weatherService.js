import axios from "axios";

const api_key = import.meta.env.VITE_SOME_KEY;

const baseURL = 'http://api.openweathermap.org/data/2.5/weather';

const getCityWeather = (cityName) =>{
    const request = axios.get(`${baseURL}?q=${cityName}&APPID=${api_key}`).then(response => response.data);
    return request;
}

export default { getCityWeather };