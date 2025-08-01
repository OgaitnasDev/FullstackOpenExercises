import axios from 'axios'
const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getCountries = () => {
    const request = axios.get(`${baseURL}/all`).then(response => response.data);
    return request;
}

export default { getCountries }