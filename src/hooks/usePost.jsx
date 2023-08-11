import { useEffect } from "react"

export const usePost = (funcFromAPI) => {
    
        const request = async () => {
            const result = await funcFromAPI();
        };
        return request()

}
    