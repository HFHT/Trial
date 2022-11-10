import React from "react";

interface IDrawer {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
    header?: string | null;
    width?: string  | null;
    height?: string  | null;
}

export function Drawer({ children, isOpen, setIsOpen, header, width, height }: IDrawer) {
    const widths:any = {
        fit: 'w-fit',
        w25: 'w-1/4',
        screen: 'w-screen'
      }
    const heights:any = {
        fit: '',
        full: 'h-full'
    }
    const thisWidth = width ? width : "screen"; 
    const thisHeight = height ? height : "full"; 

    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    ` ${widths[thisWidth]} ${heights[thisHeight]} max-w-lg right-0 absolute bg-slate-200 dark:bg-slate-700 delay-400 duration-500 ease-in-out transition-all transform  ` +
                    (isOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className={`${widths[thisWidth]} relative max-w-lg pb-4 flex flex-col space-y-2 overflow-y-clip h-full`}>
                    {header && <header className="p-4 font-bold text-lg">{header}</header>}
                    {children}
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}
