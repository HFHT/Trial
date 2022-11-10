interface ILogo {
    classes?: string;
}

export const Electrical = (props: ILogo) => {
    const iconClass: string = props.classes ? props.classes : '';
    return (
        <>
            <svg className={`${iconClass} fill-current`} fill="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 125.000000 125.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,125.000000) scale(0.100000,-0.100000)">
                    <path d="M502 1078 c-8 -8 -12 -45 -12 -109 l0 -98 -42 -3 c-36 -3 -44 -7 -46 -26 -2 -13 4 -39 13 -58 9 -18 20 -72 26 -119 12 -114 23 -133 76 -148 l43 -11 0 -131 c0 -89 4 -135 12 -143 13 -13 76 -16 95 -4 9 5 13 50 15 142 l3 133 32 11 c61 21 70 40 92 208 4 32 15 66 24 76 9 10 17 23 17 29 0 20 -37 43 -68 43 l-32 0 0 94 c0 110 -4 126 -34 126 -39 0 -46 -18 -46 -123 l0 -98 -47 3 -48 3 -5 105 c-5 103 -5 105 -30 108 -14 2 -31 -3 -38 -10z m218 -119 c0 -46 -4 -79 -10 -79 -6 0 -10 35 -10 86 0 54 4 83 10 79 6 -3 10 -42 10 -86z m60 -181 c-1 -44 -31 -202 -41 -214 -17 -21 -221 -20 -239 1 -9 11 -39 172 -40 218 0 4 72 7 160 7 121 0 160 -3 160 -12z m-135 -393 c0 -117 -1 -120 -22 -123 -23 -3 -23 -2 -23 123 0 125 0 126 23 123 21 -3 22 -6 22 -123z" />
                </g>
            </svg>
        </>)
}