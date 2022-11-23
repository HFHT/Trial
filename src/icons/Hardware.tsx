interface ILogo {
    classes?: string;
}

export const Hardware = (props: ILogo) => {
    const iconClass: string = props.classes ? props.classes : '';
    return (
        <>
            <svg className={`${iconClass} fill-current`} fill="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 125.000000 125.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,125.000000) scale(0.100000,-0.100000)">
                    <path d="M467 1009 l-117 -80 2 -322 3 -322 28 -3 c20 -3 50 12 111 52 50 33 95 56 111 56 15 0 41 7 58 15 22 10 73 15 157 17 l125 3 0 320 0 320 -140 3 c-77 1 -144 7 -149 12 -25 25 -73 7 -189 -71z m166 44 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z m292 -25 c3 -13 4 -147 3 -298 l-3 -275 -125 0 -125 0 -3 285 c-1 157 0 290 3 297 3 10 37 13 124 13 117 0 121 -1 126 -22z m-277 -35 c3 -20 -1 -23 -32 -23 -28 0 -36 4 -36 18 0 26 10 33 40 30 17 -2 26 -10 28 -25z m-90 -295 l-3 -291 -55 -38 c-30 -21 -61 -39 -68 -39 -10 0 -12 62 -10 292 l3 291 55 38 c30 21 61 39 68 39 10 0 12 -62 10 -292z m90 185 l3 -53 -35 0 -36 0 0 48 c0 56 5 64 40 60 23 -3 25 -8 28 -55z m-248 -278 c0 -183 -4 -285 -10 -285 -6 0 -10 102 -10 285 0 183 4 285 10 285 6 0 10 -102 10 -285z m248 137 l3 -53 -33 3 c-30 3 -33 6 -36 42 -5 54 3 68 35 64 26 -3 28 -6 31 -56z m-3 -137 c0 -49 -1 -50 -30 -50 -28 0 -30 3 -33 39 -5 54 3 68 35 64 26 -3 28 -6 28 -53z m3 -132 c-3 -46 -4 -48 -33 -48 -29 0 -30 2 -33 48 l-3 47 36 0 36 0 -3 -47z"/>
                    <path d="M764 936 c-15 -40 21 -80 54 -60 37 24 21 74 -25 74 -13 0 -26 -6 -29 -14z m46 -26 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"/>
                    <path d="M764 776 c-15 -40 21 -80 54 -60 37 24 21 74 -25 74 -13 0 -26 -6 -29 -14z m46 -26 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"/>
                    <path d="M767 623 c-12 -12 -7 -50 8 -63 12 -10 21 -10 40 -2 25 12 30 27 19 56 -6 16 -54 22 -67 9z m43 -33 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"/>
                    <path d="M464 836 c-10 -26 0 -61 19 -64 21 -4 31 19 23 53 -7 27 -33 34 -42 11z"/>
                    <path d="M462 653 c3 -40 32 -59 44 -29 11 28 -5 66 -27 66 -17 0 -20 -5 -17 -37z"/>
                    <path d="M462 493 c3 -43 32 -58 43 -24 9 31 -3 61 -26 61 -17 0 -20 -6 -17 -37z"/>
                </g>
            </svg>
        </>)
}