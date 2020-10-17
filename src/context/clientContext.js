import { createContext, useContext } from 'react';

//Auth Context
export const ClientContext = createContext({
    token: '',
    setToken: (data) => { }
});

//Use Auth Context
export function useClientContext() {
    return useContext(ClientContext);
}