import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const sendLoginData = async (data) => {
    return await axios.post(`${VITE_API_URL}/user/login`, { params: data });
};

export { sendLoginData };
