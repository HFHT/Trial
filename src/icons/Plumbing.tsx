interface ILogo {
    classes?: string;
}

export const Plumbing = (props: ILogo) => {
    const iconClass: string = props.classes ? props.classes : '';
    return (
        <>
            <svg className={`${iconClass} fill-current`} fill="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 125.000000 125.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,125.000000) scale(0.100000,-0.100000)">
                    <path d="M327 1103 c-14 -14 -6 -53 13 -63 19 -10 20 -21 20 -316 0 -286 1 -307 20 -345 26 -51 88 -95 154 -110 91 -20 202 27 241 102 8 15 19 74 24 129 10 127 17 135 109 135 l67 0 0 100 0 100 -33 3 c-18 2 -39 -1 -46 -7 -7 -6 -33 -14 -58 -17 -61 -9 -126 -43 -160 -85 -31 -38 -58 -140 -58 -220 0 -68 -41 -94 -74 -47 -23 33 -24 566 -1 574 9 4 15 19 15 40 l0 34 -113 0 c-63 0 -117 -3 -120 -7z m185 -35 c-8 -8 -12 -64 -12 -184 l0 -172 -34 -6 c-19 -4 -46 -4 -60 0 l-26 6 0 178 c0 133 -3 180 -12 183 -7 3 25 6 71 6 66 1 82 -2 73 -11z m438 -338 l0 -69 -33 6 c-18 3 -52 0 -75 -7 -52 -13 -60 -30 -70 -149 -8 -96 -7 -95 -89 -70 -33 11 -33 11 -33 78 0 169 60 246 210 270 35 6 65 13 68 15 14 15 22 -12 22 -74z" />
                </g>
            </svg>
        </>)
}