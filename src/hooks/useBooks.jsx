import axios from "axios"
import { useAuth } from ''
const API_URL = import.meta.env.VITE_API_URL

const useBooks = () => {
    const {token} = useAuth()

    axios.get(`${API_URL}/books`,{
        headers:{Authorization:`Bearer ${token}`}
    })
}