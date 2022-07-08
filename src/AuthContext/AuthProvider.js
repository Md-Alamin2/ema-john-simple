import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const allCotextts = useFirebase()
    return (
        <div>
            <AuthContext.Provider value={allCotextts}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;