import { createContext } from "react";

interface IAuthContext {
    account: {},
    photo: string
}

const defaultState = {
    account: {},
    photo: ''
}

export const AuthContext = createContext<IAuthContext>(defaultState)