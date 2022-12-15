import { ReactNode, RefObject, useEffect, useRef } from "react";
import { ToastIcons } from "../../icons";

type ToastPositionType = "topLeft" | "topCenter" | "topRight" | "center" | "bottomRight" | "bottomCenter" | "bottomLeft";
type RequiredToastProps = Required<ToastProps>
interface ToastProps {
    id: number;
    type?: "success" | "info" | "warning" | "error";
    message?: ReactNode;
    duration?: number;
    position?: ToastPositionType;
    icon?: ReactNode | boolean;
}
const positionClasses: Record<ToastPositionType, string> = {
    topRight: "top-0 right-1",
    topCenter: "top-0 right-1/2 translate-x-1/2",
    topLeft: "top-0 left-1",
    center: "top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2",
    bottomLeft: "bottom-0 left-1",
    bottomCenter: "bottom-0 right-1/2 translate-x-1/2",
    bottomRight: "bottom-0 right-1",
}
const animationVariables: Record<ToastPositionType, string> = {
    topRight: "translateX(2000px)",
    topCenter: "translateY(-1300px)",
    topLeft: "translateX(-2000px)",
    center: "translateY(1300px)",
    bottomLeft: "translateX(-2000px)",
    bottomCenter: "translateY(1300px)",
    bottomRight: "translateX(2000px)",
};
const wrapperClasses: Record<RequiredToastProps["type"], string> = {
    info: "bg-blue-100 dark:bg-blue-800 dark:text-blue-100",
    success: "bg-green-100 dark:bg-green-800 dark:text-green-100",
    warning: "bg-orange-100 dark:bg-orange-800 dark:text-orange-100",
    error: "bg-red-100 dark:bg-red-700 dark:text-red-100",
};
const iconClasses: Record<RequiredToastProps["type"], string> = {
    info: "dark:bg-blue-100 bg-blue-500 text-white dark:text-blue-500",
    success: "dark:bg-green-100 bg-green-500 text-white dark:text-green-500",
    warning: "dark:bg-orange-100 bg-orange-500 text-white dark:text-orange-500",
    error: "dark:bg-red-100 bg-red-500 text-white dark:text-red-500",
};

const remove = (toastId: number, ref: RefObject<HTMLDivElement>) => {
    console.log(toastId, ref)
    ref?.current?.classList.add("animate-toastOut");
    ref?.current?.remove()

    //remove element after animation is done
    ref?.current?.addEventListener("animationend", () => {
        // lets remove it
        console.log('close the toast')
        ref?.current?.remove()
        //setToasts((toasts) => toasts.filter((toast) => toast.id !== toastId));
    });
};

export function Toast({ id, type = "info", message = "---", duration = 5000, position = "topCenter", icon = "" }: ToastProps) {
    icon = icon === "" ? ToastIcons(type) : icon;
    duration = typeof duration === "string" ? +duration : duration;
    const wrapperRef = useRef<HTMLDivElement>(null);
    const dismissRef = useRef<ReturnType<typeof setTimeout>>();
    useEffect(() => {
        if (duration) {
            console.log(dismissRef)
            dismissRef.current = setTimeout(() => {
                remove(id, wrapperRef);
            }, duration);
        }

        return () => {
            clearTimeout(dismissRef.current);
        };
    }, [])

    return (
        <div className={`animate-toatIn ${positionClasses[position]} fixed w-screen max-w-xs`}>
        <div style={{ ["--elm-translate" as any]: animationVariables[position] }} className={`${wrapperClasses[type]} flex justify-between items-center overflow-hidden rounded-md shadow-lg my-3 relative`} ref={wrapperRef} role={"alert"}>
            {!!duration && (
                <div className="absolute bottom-0 right-0 left-0 w-full h-1 bg-neutral-100 dark:bg-neutral-500">
                    <span className="absolute bg-neutral-200 left-0 top-0 bottom-0 h-full" />
                </div>
            )}
            {icon && (
                <div className={`${iconClasses[type]} flex p-3`}>
                    <div className="inline-flex justify-center items-center w-6 h-6">
                        <span className="sr-only">{type}</span>
                        {icon}
                    </div>
                </div>
            )}
            <div className="text-sm font-semibold flex-grow p-3">{message}</div>
            <button aria-label="Close" onClick={() => { remove(id, wrapperRef); }} className={"w-4 h-4 mx-3 items-center justify-center text-gray-400 dark:text-gray-200 hover:text-gray-900 rounded-md focus:ring-2 focus:ring-gray-300 inline-flex dark:hover:text-white"}>
                <span className="sr-only"></span>
                {ToastIcons('close')}
            </button>
        </div>
        </div>
    )
}