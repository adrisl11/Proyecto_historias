import { useState, useContext, createContext } from "react";

import historiasData from '../bd.json'

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState(historiasData.historias)
    const [dataHistòria, setDataHistòria ] = useState()

    return (
        <GlobalContext.Provider value={{ historias, setHistorias, dataHistòria, setDataHistòria }}>
            {children}
        </GlobalContext.Provider>
    )    
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}