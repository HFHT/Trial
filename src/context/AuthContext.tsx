import { createContext } from "react";

interface IAuthContext {
    account: any,
    photo: string,
    theme?: string,
    setTheme?: React.Dispatch<React.SetStateAction<string>> | void
}

const defaultState = {
    account: {},
    photo: '',
}

export const AuthContext = createContext<IAuthContext>(defaultState)