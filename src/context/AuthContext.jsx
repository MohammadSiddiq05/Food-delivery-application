import { createContext, useContext, useReducer, useState } from "react";
import reducer from '../reducer/AuthReducer'

const registerValues = {
    name: "",
    email: "",
    phoneNumber: ""
}
const AuthContext = createContext(registerValues);

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, registerValues)
    // console.log(state)
    return (
        <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuthContext = () => {
    return useContext(AuthContext)
}
