import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value="Test Value">{children}</AuthContext.Provider>
    );
}