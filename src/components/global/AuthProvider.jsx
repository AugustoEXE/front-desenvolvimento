import { useContext, useState, createContext, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const useAuthSource = () => {
    const [isAuth,setAuth] = useState(localStorage.getItem('isAuth') || false)
    localStorage.setItem('isAuth',isAuth)
    return {isAuth,setAuth}
}

const AuthContext = createContext('')

export const  useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={useAuthSource()}>
            {children}
        </AuthContext.Provider>
    )
}

export const ProtectedRoute = () => {
    const navigate = useNavigate()
    const {isAuth} = useAuth()
    
    useEffect(()=>{
        console.log(isAuth)
        localStorage.setItem('isAuth',isAuth)
        
        if(isAuth==='false'){
            console.log('nao eh auth')
            navigate('/login')

        }
    },[isAuth])
    
}