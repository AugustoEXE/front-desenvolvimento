import { useState } from "react"

export const usePost = (funcFromAPI) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        const request = async () => {
            const result = await funcFromAPI();
            if (mounted) {
                setList(result.data);
            }
        };

        request();
        return () => {
            mounted = false;
        };
    }, []);

    return list
}