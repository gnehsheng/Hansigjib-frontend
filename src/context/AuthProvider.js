import { createContext, useState } from "react";

<<<<<<< HEAD
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
=======
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({result: false});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
>>>>>>> wxuanh
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;