import axios from "axios";

const listBooks = async (data) => {
  return await axios.get("http://localhost:3000/books", { params: data });
};

const deleteBook = async (id) => {
  return await axios.get(`http://localhost:3000/book/del/${id}`);
};

const updateBook = async (id, data) => {
  return await axios.put(`http://localhost:3000/book/${id}`, { data: data });
};

const createBook = async (id, data) => {
  return await axios.put(`http://localhost:3000/book`, { data: data });
};

export { listBooks, deleteBook, updateBook, createBook };
