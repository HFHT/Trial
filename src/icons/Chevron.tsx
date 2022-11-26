interface IChevron {
    classes?: string;
    enabled?: boolean;
}

export const Chevron = (props: IChevron) => {
    const iconClass: string = props.classes ? props.classes : '';
    const expand: boolean = props.enabled ? props.enabled : false;
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${iconClass} icon-menu`} viewBox="0 0 16 16">
                {expand ?
                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    :
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                }
            </svg>
        </>)
}