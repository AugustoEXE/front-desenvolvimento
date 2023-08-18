import { createContext, useContext, useState } from "react";

const useUpdatedSource = () => {
    const [selected,setSelected] = useState({})
    return {selected,setSelected}
}

const UpdatedContext = createContext()

export const useUpdate = () => {
    return useContext(UpdatedContext)
}

export const UpdateProvider = ({children}) => {
    return(
        <UpdatedContext.Provider value={useUpdatedSource()}>
            {children}
        </UpdatedContext.Provider>
    )
}