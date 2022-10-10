// The NavContext holds the navigation state values
import {
    JSXElementConstructor, ReactElement, ReactFragment,
    ReactPortal, useEffect, useState
} from "react";
import { useMsal } from "@azure/msal-react";
import { getProfile } from "./authConfig"
//import { msalInstance } from "./auth"
import { AuthContext } from "./context/AuthContext"

export const AuthContextProvider = (props: {
    msal: any;
    children: string | number | boolean |
    ReactElement<any, string | JSXElementConstructor<any>> |
    ReactFragment | ReactPortal | null | undefined;
}) => {

    const [userAccount, setUserAccount] = useState({})
    const [userPhoto, setUserPhoto] = useState('')
    const { accounts } = useMsal()

    useEffect(() => {
        console.log('Accounts change')
        console.log(props.msal)
        setUserAccount(accounts[0])
        getProfile(setUserPhoto, props.msal)
    }, []);

    return (
        <div>
            {userPhoto != '' &&
                <AuthContext.Provider value={{
                    account: userAccount,
                    photo: userPhoto
                }}>
                    {props.children}
                </AuthContext.Provider>
            }
        </div>
    )
}