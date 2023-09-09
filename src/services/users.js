import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const loginUser = async (data) => {
  return await axios.get(`${API_URL}/user/login`, data);
};

export const getAllUsers = async () => {
  return await axios.get(`${API_URL}/user/get-all`);
};

export const createUser = async (data) => {
  return await axios.post(`${API_URL}/create/user`, data);
};

export const updateUser = async (id, data) => {
  return await axios.put(`${API_URL}/user/update/${id}`, data);
};

export const takeCurrentUser = async () => {
  return await axios.get(`${API_URL}/user/take_one`);
};

export const logoutUser = async () => {
  return await axios.get(`${API_URL}/user/clear/cookie`);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/user/delete/${id}`);
};
