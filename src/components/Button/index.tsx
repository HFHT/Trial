
interface IButton {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?(e: HTMLButtonElement | null): Function | void;
  variant?: string;
  color?: string;
  size?: string;
  content?: string;
  disabled?: boolean;
  left?: boolean;
  mid?: boolean;
  right?: boolean;
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

export const Button = (buttonProps: IButton) => {
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

  const root = 'inline-flex items-center py-2 px-4 text-sm font-medium ';
  const dm = 'text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white';
  let position: string = 'rounded-l-lg rounded-r-md border';
  buttonProps.left && (position = 'rounded-l-lg border')
  buttonProps.mid && (position = 'border-t border-b')
  buttonProps.right && (position = 'rounded-r-md border')

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
      <button type="button" className={`${root} ${dm} ${position}`} disabled={buttonProps.disabled} onClick={(e) => handleClick(e)}>
        {buttonProps.startIcon && buttonProps.startIcon}
        {buttonProps.children}
        {buttonProps.endIcon && buttonProps.endIcon}
      </button>
    </>
  )
}


