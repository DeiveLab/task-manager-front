import React, { useContext, createContext, useState, useCallback } from 'react';

import api from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        const token = localStorage.getItem('@TaskManager:token');
        const user = localStorage.getItem('@TaskManager:user');

        if (token && user) {
            return {
                token,
                user: JSON.parse(user)
            };
        }

        return {};
    });

    const signIn = useCallback(async ({ email, password }) => {

        const response = await api.post('/users/login', {
            email,
            password
        });

        const { token, user } = response.data;

        localStorage.setItem('@TaskManager:token', token);
        localStorage.setItem('@TaskManager:user', JSON.stringify(user));

        setData({
            token,
            user
        });

    }, []);

    const signOut = useCallback(() => {

        localStorage.removeItem('@TaskManager:token');
        localStorage.removeItem('@TaskManager:user');

        setData({});
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth }