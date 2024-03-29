import { createContext, useContext, useState } from "react";

const useBookSource = () => {
    const [selected,setSelected] = useState({})
    return {selected,setSelected}
}

const BookContext = createContext()

export const useBook = () => {
    return useContext(BookContext)
}

export const BookProvider = ({children}) => {
    return(
        <BookContext.Provider value={useBookSource()}>
            {children}
        </BookContext.Provider>
    )
}