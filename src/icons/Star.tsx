interface IStar {
    classes?: string;
    select?: Boolean;
    title?: string;
}

export const Star = (props: IStar): JSX.Element => {
    let selectColor = 'fill-green-600 dark:fill-yellow-300'
    let color = 'fill-slate-600 dark:fill-slate-100'
    let starClass: string = props.classes ? props.classes : '';
    props.select ? (starClass = selectColor + ' ' + starClass) : (starClass = color + ' ' + starClass)
    return (
        <>
            <div className={`${starClass} star-hover`} title={props.title}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" className={`star-menu `}>
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
            </div>
        </>
    )
}
export default Star;

