
interface IBadge {
    icon: JSX.Element;
    onClick?(e: HTMLButtonElement | null): Function | void;
    onFocus?(e: HTMLButtonElement | null): Function | void;
    onBlur?(e: HTMLButtonElement | null): Function | void;
    label?: string;
    labelClass?: string;
    color?: string;
    content?: string;
    contentClass?: string;
  }
  
  export function Badge(badgeProps: IBadge) {
  
    const colors: any = {
      red: 'bg-red-700',
      blue: 'bg-blue-700',
      green: 'bg-green-700'
    }
  
    const color: string = badgeProps.color ? badgeProps.color : 'green';
  
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      badgeProps.onClick && badgeProps.onClick(e.currentTarget.closest('button'));
    }
  
    const handleFocus = (e: React.MouseEvent<HTMLButtonElement>) => {
      badgeProps.onFocus && badgeProps.onFocus(e.currentTarget.closest('button'));
    }
  
    const handleBlur = (e: React.MouseEvent<HTMLButtonElement>) => {
      badgeProps.onBlur && badgeProps.onBlur(e.currentTarget.closest('button'));
    }
  
    !colors[color] && console.warn('Badge: invalid color provided')
  
    return (
      <div>
        <button className='hover:bg-gray-500/[.12] dark:hover:bg-black/[.18] transition-colors' onClick={(e) => handleClick(e)} onMouseEnter={(e) => handleFocus(e)} onMouseLeave={(e) => handleBlur(e)}>
          <div className="relative inline-flex align-middle shrink-0 outline-0 border-spacing-0 m-0 text-center grow-0 basis-auto text-[1.5rem] p-2 rounded-[50%] overflow-visible hover:bg-gray-500/[.18] dark:hover:bg-black/[.18] transition-colors">
            {badgeProps.icon}
            {badgeProps.content && <span className={`${colors[color]} absolute flex flex-row flex-wrap place-content-center items-center text-xs px-[6px] h-[20px] box-border min-w-px20 rounded-[10px] z-[1] text-white top-0 right-[-5px]`}>{badgeProps.content}</span>}
          </div>
          <span className={`${badgeProps.labelClass} align-sub md:inline hidden ml-1 text-sm text-slate-900 dark:text-slate-200 font-normal`}>{badgeProps.label}</span>
        </button>
      </div>
    )
  }