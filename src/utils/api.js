import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getAllLeagues = () => {
    return axios.get(`${API_URL}/leagues`);
};

export const getSearchResults = (location, sport) => {
    return axios.get(`${API_URL}/leagues/?location=${location}&sport=${sport}`);
};

