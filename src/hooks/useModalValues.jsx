import { createContext, useContext } from "react"




const ModalContext = createContext({})

export const ModalProvider = ({children, value})=>{
  return(
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}


export const useModalValues = () => useContext(ModalContext)
