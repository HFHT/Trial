import { useState, useEffect } from 'react'

interface ITheme {
    toggleTheme(): Function | void;
    children?: React.ReactNode;
  }

const Theme: any = (props: ITheme) => {
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
//    props.toggleTheme = () => {
//      setTheme(theme === "dark" ? "light" : "dark");
//    }
    return (<div className="bg-white dark:bg-slate-700">
      {props.children}
    </div>
    )
  }
  export default Theme;