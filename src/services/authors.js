import axios from "axios";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const listAuthors = async () => {
  return await axios.get(`${VITE_API_URL}/authors`);
};

const createAuthors = async (data) => {
  return await axios.post(`${VITE_API_URL}/author`,  data );
};

const updateAuthors = async (id,data) => {
  return await axios.put(`${VITE_API_URL}/author/${id}`, data );
};

const deleteAuthors = async (id) => {
  return await axios.delete(`${VITE_API_URL}/author/${id}`);
};

export { listAuthors, createAuthors, updateAuthors, deleteAuthors };
