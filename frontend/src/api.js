import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getArtists = () => axios.get(`${API_URL}/artists`);
export const addArtist = (data) => axios.post(`${API_URL}/artists`, data);
export const deleteArtist = (id) => axios.delete(`${API_URL}/artists/${id}`);

export const getSongs = () => axios.get(`${API_URL}/songs`);
export const addSong = (data) => axios.post(`${API_URL}/songs`, data);
export const deleteSong = (id) => axios.delete(`${API_URL}/songs/${id}`);

export const getAlbums = () => axios.get(`${API_URL}/albums`);
export const addAlbum = (data) => axios.post(`${API_URL}/albums`, data);
export const deleteAlbum = (id) => axios.delete(`${API_URL}/albums/${id}`);