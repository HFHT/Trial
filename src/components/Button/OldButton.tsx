
interface IButton {
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    onClick?(e: HTMLButtonElement | null): Function | void;
    variant?: string;
    color?: string;
    size?: string;
    content?: string;
    disabled?: boolean;
    first?: boolean;
    middle?: boolean;
    last?: boolean;
    href?: string;
    children?: React.ReactNode;
  }
  
  const defaultProps = {
    first: undefined,
    last: undefined
  }
  
  export const OldButton = (buttonProps: IButton) => {
    buttonProps = { ...defaultProps, ...buttonProps }
  
    const variants: any = {
      text: 'bg-transparent text-blue-400 font-semibold py-2 px-4 border hover:border-blue-200/[.08] border-transparent  hover:bg-blue-400/[.08]',
      contained: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4',
      outlined: 'bg-transparent hover:bg-blue-700 text-blue-400 font-semibold hover:text-white py-2 px-4 border-t border-b border-blue-500 hover:border-transparent',
      pill: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'
    }
    const variant: string = buttonProps.variant ? buttonProps.variant : 'text';
  
    const colors: any = {
      red: 'bg-red-700',
      blue: 'bg-blue-700',
      green: 'bg-green-700',
      none: ''
    }
    const color: string = buttonProps.color ? buttonProps.color : 'none';
    const disabled: string = buttonProps.disabled ? 'opacity-30 cursor-not-allowed' : '';
  
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      buttonProps.onClick && buttonProps.onClick(e.currentTarget.closest('button'));
    }
  
    let roundClasses = buttonProps.variant === 'pill' ? 'rounded-full' : 'rounded'
    buttonProps.first && (roundClasses = buttonProps.variant === 'pill' ? 'rounded-l-full border-l' : 'rounded-l border-l');
    buttonProps.last && (roundClasses = buttonProps.variant === 'pill' ? 'rounded-r-full border-r' : 'rounded-r border-r');
    buttonProps.middle && (roundClasses = 'border-r border-l');
  
    return (
      <>
        <button className={`${roundClasses} ${variants[variant]} ${colors[color]} ${disabled} inline-flex items-center justify-center relative box-border outline-0 m-0 cursor-pointer select-none align-middle appearance-none text-[0.875rem] tracking-tight uppercase min-w-px64 transition-all  hover:no-underline`} disabled={buttonProps.disabled} onClick={(e) => handleClick(e)}>
          {buttonProps.startIcon &&
            <div className="mr-1">
              <svg width="32px" height="32px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="icon-btn icon-dm icon-hover">
                {buttonProps.startIcon}
              </svg>
            </div>
          }
          <div>{buttonProps.children}</div>
          {buttonProps.endIcon &&
            <div className="ml-1">
              <svg width="32px" height="32px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="icon-btn icon-dm icon-hover">
                {buttonProps.endIcon}
              </svg>
            </div>
          }
        </button>
      </>
    )
  }
  