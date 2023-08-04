import { useContext, useState, createContext } from "react"


const useToken = () => {
    const [token, setToken] = useState('token!!!!')
    return { token, setToken }
}

const AuthContext = createContext('')

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={useToken()}>
            {children}
        </AuthContext.Provider>
    )
}