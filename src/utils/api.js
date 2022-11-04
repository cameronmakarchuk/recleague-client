import axios from 'axios';

export const API_URL = 'http://localhost:8080';

export const getAllLeagues = () => axios.get(`${API_URL}/leagues`);

export const getSearchResults = (location, sport) => axios.get(`${API_URL}/leagues/?location=${location}&sport=${sport}`);

export const getLeagueById = (leagueId) => axios.get(`${API_URL}/leagues/${leagueId}`);

export const createNewUser = (newUser) => axios.post(`${API_URL}/users`, newUser);

export const createNewLeague = (newLeague) => axios.post(`${API_URL}/leagues`, newLeague);

export const loginUser = (loginDetails) => axios.post(`${API_URL}/auth/login`, loginDetails);

export const getProfileData = (authorization) => axios.get(`${API_URL}/auth/profile`, authorization);

export const getLeaguesByUserId = (userId) => axios.get(`${API_URL}/leagues/user/${userId}`);