import axios from "axios";

const listBooks = async (data) => {
  if (data) {
    return await axios.get("http://localhost:3000/books", { params: data });
  } else {
    return await axios.get("http://localhost:3000/books");
  }
};

const deleteBook = async (id) => {
  return await axios.get(`http://localhost:3000/book/del/${id}`);
};

const updateBook = async (id, data) => {
  return await axios.put(`http://localhost:3000/book/${id}`, { data: data });
};

const createBook = async (data) => {
  return await axios.put(`http://localhost:3000/book`, { data: data });
};

export default { listBooks, deleteBook, updateBook, createBook };
