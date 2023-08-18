import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const VITE_API_URL = import.meta.env.VITE_API_URL;

const listBooks = async (data) => {
  if (data) {
    return await axios.get(`${API_URL}/books`, { params: data });
  } else {
    return await axios.get(`${API_URL}/books`);
  }
};

const deleteBook = async (id) => {
  return await axios.delete(`${API_URL}/book/del/${id}`);
};

const updateBook = async (id, data) => {
  return await axios.put(`${API_URL}/book/${id}`, { data });
};

const createBook = async (data) => {
  console.log(data);
  return await axios.post(`${API_URL}/book`, data);
};

export default { listBooks, deleteBook, updateBook, createBook };
