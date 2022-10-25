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
import Badge from './components/Badge'
import { Printer } from "./icons/Printer"
export const msalInstance = new PublicClientApplication(msalConfig);

// SignInButton Component returns a button that invokes a popup login when clicked
function SignInButton() {
  const { instance } = useMsal();

  return (
    <button className="badge" onClick={() => signInClickHandler(instance)}>
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
function badgeClick(e: Event) {
  console.log(e)
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

const Theme: any = (props: any) => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (<div className="bg-white dark:bg-slate-700">
    <button className="bg-green-200 dark:bg-red-200 p-4 rounded-3xl" onClick={handleThemeSwitch}>
      Dark mode
    </button>
    {props.children}
  </div>
  )
}
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Theme >
      <MsalProvider instance={msalInstance}>
        <AuthenticatedTemplate>
          <AuthContextProvider msal={msalInstance}>
            <AuthProfile msal={msalInstance}>
              <SignOutButton />
              <div className="badgeGroup">
              <Badge icon={<Printer />} label='Barcodes' content='1' onClick={(e:React.MouseEvent<HTMLButtonElement>) => handleClick(e)}/>
              </div>
            </AuthProfile>
          </AuthContextProvider>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <p>This will only render if a user is not signed-in.</p>
          <SignInButton />
        </UnauthenticatedTemplate>
      </MsalProvider>
    </Theme>
  </StrictMode>
)
