import axios from "axios";
const VITE_API_URL = import.meta.env.VITE_API_URL;

const listPublisher = async () => {
  return await axios.get(`${VITE_API_URL}/publish-companies`);
};

const createPublisher = async (data) => {
  return await axios.post(`${VITE_API_URL}/publish-company`, { params: data });
};

const updatePublisher = async (data, id) => {
  return await axios.put(`${VITE_API_URL}/publish-company/${id}`, { params: data });
};

const deletePublisher = async () => {
  return await axios.delete(`${VITE_API_URL}/publish-company/${id}`);
};

export { listPublisher, createPublisher, updatePublisher, deletePublisher };
