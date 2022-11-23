interface subMenus {
  label: string;
  onClick: Function;
}

interface INav {
  icon?: JSX.Element;
  onClick?(e: HTMLButtonElement | null): Function | void;
  onFocus?(e: HTMLButtonElement | null): Function | void;
  onBlur?(e: HTMLButtonElement | null): Function | void;
  children?: React.ReactNode;
  //  subMenu?: Array<subMenus>;
  subMenu?: Array<string>;
  onSubClick?(e: string | null): Function | void;
  label?: string;
  labelClass?: string;
  contentClass?: string;
}

export function NavItem(navProps: INav) {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
    navProps.onClick && navProps.onClick(e.currentTarget.closest('button'));
  }

  const handleSubClick = (e: any) => {
    console.log(e)
    e.target.parentNode.parentNode.style.zIndex = "-10";
    e.target.parentNode.parentNode.previousSibling.classList.remove('focus');
    navProps.onSubClick && navProps.onSubClick(e.target.innerHTML);
  }

  const handleFocus = (e: any) => {
    console.log(e)
    e.currentTarget.closest('button').classList.add('focus');
    e.currentTarget.nextSibling.style.zIndex = "0";
    navProps.onFocus && navProps.onFocus(e.currentTarget.closest('button'));
  }

  const handleBlur = (e: any) => {
    console.log(e)
    //e.currentTarget.closest('button').classList.remove('focus')
    navProps.onBlur && navProps.onBlur(e.currentTarget.closest('button'));
  }

  const handleSubBlur = (e: any) => {
    console.log(e)
    e.currentTarget.previousSibling.classList.remove('focus')
    e.currentTarget.style.zIndex = "-10";
  }

  const handleNavBlur = (e: any) => {
    console.log(e)
    console.log(e.currentTarget)
    e.currentTarget.firstChild.classList.remove('focus')
    e.currentTarget.lastChild.style.zIndex = "-10";
  }

  return (
    <div onMouseLeave={(e) => handleNavBlur(e)} >
      <button className='hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors' onClick={(e) => handleClick(e)} onMouseEnter={(e) => handleFocus(e)} onMouseLeave={(e) => handleBlur(e)}>
        {navProps.icon &&
          <div className="relative inline-flex align-middle shrink-0 outline-0 border-spacing-0 m-0 text-center grow-0 basis-auto text-[1.5rem] p-2 rounded-[50%] overflow-visible hover:bg-gray-500/[.18] dark:hover:bg-black/[.18] transition-colors">
            {navProps.icon}
          </div>
        }
        <span className={`${navProps.labelClass} align-sub md:inline hidden ml-1 text-sm text-slate-900 dark:text-slate-200 font-normal`}>{navProps.label}</span>
      </button>
      {navProps.children}
      {navProps.subMenu &&
        <div className="-z-10 fixed bg-slate-800 inline-block myApp:flex " onMouseLeave={(e) => handleSubBlur(e)}>
          <ul className="bg-slate-200 text-black dark:bg-slate-700 dark:text-white min-w-[8rem] cursor-pointer" onClick={(e) => handleSubClick(e)}>
            {navProps.subMenu.map(navItem => {
              return (
                <li key={navItem} className="px-2 py-1 hover:bg-slate-300 dark:hover:bg-slate-800/40 whitespace-nowrap border-b border-gray-300 dark:border-slate-800/50">
                  {navItem}
                </li>
              )
            })
            }
          </ul>
        </div>
      }
    </div>
  )
}