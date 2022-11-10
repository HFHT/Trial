import { useState, useEffect, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  MsalProvider, AuthenticatedTemplate,
  UnauthenticatedTemplate, useMsal
} from "@azure/msal-react";

import { PublicClientApplication } from "@azure/msal-browser"
import AuthProfile from './authProfile'
import { msalConfig } from "./authConfig"
import { AuthContextProvider } from './authContext';

import App from './App';
//import Theme from './components/Theme';
export const msalInstance = new PublicClientApplication(msalConfig);

// SignInButton Component returns a button that invokes a popup login when clicked
function SignInButton() {
  const { instance } = useMsal();

  return (
    <button className="inline-block mb-1 tracking-wide font-semibold rounded-full px-2 absolute" onClick={() => signInClickHandler(instance)}>
      Sign In
    </button>
  );
}
async function signInClickHandler(instance: any) {
  console.log(instance)
  try {
    await instance.loginPopup().then(
      () => console.log(instance)
    )
  } catch (error) {
    console.log(error)
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>

      <MsalProvider instance={msalInstance}>
        <AuthenticatedTemplate>
          <AuthContextProvider msal={msalInstance}>
            <App />
          </AuthContextProvider>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <p>This will only render if a user is not signed-in.</p>
          <SignInButton />
        </UnauthenticatedTemplate>
      </MsalProvider>

  </StrictMode>
)
