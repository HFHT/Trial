import { useState, useEffect } from 'react'
import { useMsal } from "@azure/msal-react";
import { getProfile } from "./authConfig"
import { msalInstance } from "./auth"
import App from './App'

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

export default function AuthProfile() {
    const [userAccount, setUserAccount] = useState({})
    const [userPhoto, setUserPhoto] = useState('')
    const { accounts } = useMsal()

    useEffect(() => {
        console.log('Accounts change')
        setUserAccount(accounts[0])
        getProfile(setUserPhoto, msalInstance)
    }, []);

    return (
        <div>
            <WelcomeUser account={userAccount} photo={userPhoto} />
            <App />
        </div>
    )
}
