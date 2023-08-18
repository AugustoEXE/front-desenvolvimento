import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const listGenres = async (data) => {
  if (data) {
    return await axios.get(`${API_URL}/genres`, { params: data });
  } else {
    return await axios.get(`${API_URL}/genres`);
  }
};

const deleteGenre = async (id) => {
  return await axios.delete(`${API_URL}/genre/${id}`);
};

const updateGenre = async (id, data) => {
  return await axios.put(`${API_URL}/genre/${id}`, data);
};

const createGenre = async (data) => {
  return await axios.post(`${API_URL}/genre`, data );
};

export { listGenres, deleteGenre, updateGenre, createGenre };
