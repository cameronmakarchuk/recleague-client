import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getAllLeagues = () => {
    return axios.get(`${API_URL}/leagues`);
};

export const getSearchResults = () => {
    return axios.get(`${API_URL}/leagues/city/:city`);
};

