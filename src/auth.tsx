import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  MsalProvider, AuthenticatedTemplate,
  UnauthenticatedTemplate, useMsal
} from "@azure/msal-react";

import { PublicClientApplication } from "@azure/msal-browser"
import AuthProfile from './authProfile'
import { msalConfig } from "./authConfig"
import { AuthContextProvider } from './authContext';

export const msalInstance = new PublicClientApplication(msalConfig);

// SignInButton Component returns a button that invokes a popup login when clicked
function SignInButton() {
  const { instance } = useMsal();

  return (
    <button onClick={() => signInClickHandler(instance)}>
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

// SignOutButton Component returns a button that invokes a popup logout when clicked
function SignOutButton() {
  const { instance } = useMsal();

  return (
    <button onClick={() => signOutClickHandler(instance)}>
      Sign Out
    </button>
  );
}


async function signOutClickHandler(instance: any) {
  try {
    await instance.logoutPopup().then(
      () => console.log(instance)
    ).catch((error: any) => console.log(error))
  } catch (error) {
    console.log(error)
  }
}
const theme = {
  sidebar: {
    base: 'h-full bg-inherit',
    inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-inherit py-4 px-3',
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        <AuthenticatedTemplate>
          <AuthContextProvider msal={msalInstance}>
            <AuthProfile msal={msalInstance}>
              <SignOutButton />

            </AuthProfile>
          </AuthContextProvider>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <p>This will only render if a user is not signed-in.</p>
          <SignInButton />
        </UnauthenticatedTemplate>
      </MsalProvider>
  </React.StrictMode>
)
