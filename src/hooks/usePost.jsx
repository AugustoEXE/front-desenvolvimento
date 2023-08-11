import { useEffect } from "react"

export const usePost = (funcFromAPI) => {
    useEffect(() =>{
        let mounted = true

        const request = async () => {
            const result = await funcFromAPI();
            return mounted ? result.data : null
    
        };
        request()
        return () => mounted = false
    }, [])
    
}