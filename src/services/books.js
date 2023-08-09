import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const listBooks = async (data) => {
  if (data) {
    return await axios.get(`${VITE_API_URL}/books`, { params: data });
  } else {
    return await axios.get(`${VITE_API_URL}/books`);
  }
};

const deleteBook = async (id) => {
  return await axios.get(`${VITE_API_URL}/book/del/${id}`);
};

const updateBook = async (id, data) => {
  return await axios.put(`${VITE_API_URL}/book/${id}`, { data: data });
};

const createBook = async (data) => {
  return await axios.put(`${VITE_API_URL}/book`, { data: data });
};

export default { listBooks, deleteBook, updateBook, createBook };
