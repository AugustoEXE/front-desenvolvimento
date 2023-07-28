import { useEffect, useMemo, useState } from "react";


const useMediaQuery = () => {
    //const [matches, setMatches] = useState(false);

    const [size, setSize] = useState(58)

    const iconSize = useMemo(() => {
        if (size < 600) return 30
        else if (size < 1200) return 58
        else return 70
    }, [size])

    useEffect(() => {
        const w = window.innerWidth
        setSize(w)

        const listener = () => setSize(window.innerWidth);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [size])

    // useEffect(() => {
    //     console.log(window.innerWidth)
    //     const media = window.matchMedia(query);
    //     if (media.matches !== matches) {
    //         setMatches(media.matches);
    //     }
    //     const listener = () => setMatches(media.matches);
    //     window.addEventListener("resize", listener);
    //     return () => window.removeEventListener("resize", listener);
    // }, [matches, query]);

    // return matches;

    return iconSize
};

export default useMediaQuery;