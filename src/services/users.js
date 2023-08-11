import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getCurrentUserData = async (data) => {
    return await axios.get(`${API_URL}/user/login`,  data );
};


export const createUser = async (data) => {
    return await axios.post(`${API_URL}/create/user`, data)
}


