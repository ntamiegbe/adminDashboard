import { createContext, useReducer } from "react"
import { darkModeReducer } from "./darkModeReducer"

const initialState = {
    darkMode: true
}

export const DarkModeContext = createContext(initialState)

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(darkModeReducer, initialState)

    return (
        <DarkModeContext.Provider value={{ darkmode: state.darkMode, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    )
}