import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

const getCurrentUserData = async (data) => {
    return await axios.get(`${VITE_API_URL}/user/login`,  data );
};

export { sendLoginData };
