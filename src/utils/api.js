import axios from 'axios';

export const G_MAPS_EMBED_API_KEY = 'AIzaSyC72XFtnzES-erwicBGL1G4g6ipjh1M5TY'
export const G_MAPS_EMBED_URL = 'https://www.google.com/maps/embed/v1/place'
export const G_MAPS_STATIC_URL = 'https://maps.googleapis.com/maps/api/staticmap'

export const API_URL = 'http://localhost:8080';

export const getAllLeagues = () => axios.get(`${API_URL}/leagues`);

export const getSearchResults = (location, sport) => axios.get(`${API_URL}/leagues/?location=${location}&sport=${sport}`);

export const getLeagueById = (leagueId) => axios.get(`${API_URL}/leagues/${leagueId}`);

export const createNewUser = (newUser) => axios.post(`${API_URL}/users`, newUser);

export const createNewLeague = (newLeague) => axios.post(`${API_URL}/leagues`, newLeague);

export const loginUser = (loginDetails) => axios.post(`${API_URL}/auth/login`, loginDetails);

export const getProfileData = (authorization) => axios.get(`${API_URL}/auth/profile`, authorization);

export const getLeaguesByUserId = (userId) => axios.get(`${API_URL}/leagues/user/${userId}`);

export const postJoinLeague = (details) => axios.post(`${API_URL}/league-details`, details);

export const getLeaguesJoinedByUser = (userId) => axios.get(`${API_URL}/league-details/leagues/${userId}`);

export const getUsersInLeague = (leagueId) => axios.get(`${API_URL}/league-details/users/${leagueId}`);