import { useState, useEffect, useContext, SetStateAction } from 'react'
import { Printer, Logo, Moon, Logout } from "./icons"
import { Badge, Drawer } from './components'
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal} from "@azure/msal-react";
import { AuthContext } from './context/AuthContext';
import { Main } from './pages';

export default function App(props: any) {
  const { account, photo, theme, setTheme } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const { instance } = useMsal();
  console.log(theme);
  const handleThemeSwitch = () => {
    setTheme && setTheme(theme === "dark" ? "light" : "dark");
  }
  const handleClick = (e: any) => {
    console.log(e);
  }
  const handleFocus = (p: any) => {
    console.log(p);
  }
  const handleBlur = (p: any) => {
    console.log(p);
  }
  const toggleAccount = () => {
    console.log('account');
  }
  function badgeClick(e: Event) {
    console.log(e)
  }
  const openAccount = (e: any) => {
    setIsOpen(true)
    console.log(e);
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

  return (
    <div className="flex flex-col h-screen justify-between bg-white dark:bg-slate-800 p-1 overflow-x-hidden">
      <header className="h-10 flex flex-row justify-between mb-1">
        <div className="flexRow">
          <Logo classes='hover:scale-100' />
          <h4 className="text-3xl  text-slate-900 dark:text-slate-200 sm:inline hidden">Inventory</h4>
        </div>
        <div className="flexRow">
          <Badge icon={<Printer classes='icon-badge icon-hover icon-dm' />} label='Barcodes' content='1' onClick={(e) => handleClick(e)} onFocus={(e) => handleFocus(e)} onBlur={(e) => handleBlur(e)} color='blue' />
          <Badge icon={<Printer classes='icon-badge icon-hover icon-dm' />} label='Print' content='12' onClick={(e) => handleClick(e)} color='red' />
        </div>
        <button onClick={(e) => openAccount(e)}>
          <img src={photo} className="rounded-full h-12 w-12"></img>
        </button>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} width="fit" height="fit" >
          <div className='border-b border-gray-300 dark:border-slate-800 p-3 max-w-sm w-full mx-auto'>
            <div className='flex space-x-3'>
              <img src={photo} className="rounded-full h-12 w-12"></img>
              <div className='flex-1 space-y-2'>
                <div className=' text-slate-900 dark:text-slate-200 font-medium h-4 w-3/4 text-[0.875rem]'>
                  {account.name}
                </div>
                <div className=' text-slate-900 dark:text-slate-200 h-4 text-[0.875rem]'>{account.username}</div>
              </div>
            </div>
          </div>
          <div className=' text-slate-900 dark:text-slate-200 font-medium border-b border-gray-300 dark:border-slate-800 pb-1 '>
            <button onClick={(e) => handleThemeSwitch()} className='text-[0.875rem]'><Moon />Dark Mode</button>
          </div>
          <div className=' text-slate-900 dark:text-slate-200 font-medium  '>
            <button onClick={() => signOutClickHandler(instance)} className='text-[0.875rem]'><Logout />Sign Out</button>
          </div>
        </Drawer>
      </header>
      <main className="flex flex-row myApp:flex-col mb-auto min-h-[calc(100vh-70px)] overflow-y-auto">
        <Main />
      </main>
      <footer className="dark:text-white font-normal text-xs text-center flex-footer">
        Copyright Habitat for Humanity Tucson 2022
      </footer>
    </div>
  )
}
