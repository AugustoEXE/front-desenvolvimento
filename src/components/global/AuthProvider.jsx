import { useContext, useState, createContext, useRef } from "react"


const useAuthSource = () => {
    const [isAuth,setAuth] = useState(false)
    return {isAuth,setAuth}
}

const AuthContext = createContext('')

export const  useAuth= () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={useAuthSource()}>
            {children}
        </AuthContext.Provider>
    )
}
