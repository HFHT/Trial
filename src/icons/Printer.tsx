interface ILogo {
    classes?: string | null;
  }

export const Printer = (props: ILogo) => {
    const iconClass:string = props.classes ? props.classes : '';
//    const iconClass:string = props.classes ? props.classes : 'icon-badge icon-hover';
    return (
        <>
            <svg width="16px" height="16px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className={`${iconClass}`}>
                <path d="M420,128.1V16H92V128.1A80.1,80.1,0,0,0,16,208V400H84V368H48V208a48.054,48.054,0,0,1,48-48H416a48.054,48.054,0,0,1,48,48V368H420v32h76V208A80.1,80.1,0,0,0,420,128.1Zm-32-.1H124V48H388Z" className="ci-primary" />
                <rect width="16" height="16" x="396" y="200" className="ci-primary" />
                <path d="M116,264H76v32h40V496H388V296h40V264H116ZM356,464H148V296H356Z" className="ci-primary" />
            </svg>
        </>
    )
}