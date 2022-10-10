import { useState, useEffect, useContext } from 'react'
//import { useMsal } from "@azure/msal-react";
import App from './App'
import { AuthContext } from './context/AuthContext';

function WelcomeUser(props: any) {
    console.log(props.account, props.photo)
    const username = props.account.username;

    return (
        <div>
            <p>Welcome, {username}</p>
            <img src={props.photo}></img>
        </div>
    )
}

export default function AuthProfile(props:any) {
    const authProfile = useContext(AuthContext)
    const [userAccount, setUserAccount] = useState({})
    const [userPhoto, setUserPhoto] = useState('')
//    const { accounts } = useMsal()


    useEffect(() => {
        console.log('Accounts change')
        console.log(props.msal)
        setUserAccount(authProfile.account)
        setUserPhoto(authProfile.photo)
//        getProfile(setUserPhoto, msalInstance)
    }, []);

    return (
        <div>
            {props.children}
            <WelcomeUser account={userAccount} photo={userPhoto} />
            <App />
        </div>
    )
}
