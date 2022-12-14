interface ILogo {
    classes?: string;
}

export const Lumber = (props: ILogo) => {
    const iconClass: string = props.classes ? props.classes : '';
    return (
        <>
            <svg className={`${iconClass}`} fill="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 125.000000 125.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,125.000000) scale(0.100000,-0.100000)">
                    <path d="M240 1060 c0 -16 -4 -30 -10 -30 -13 0 -13 -146 0 -202 8 -40 15 -74 40 -213 51 -279 56 -295 77 -262 5 7 10 -3 13 -28 l5 -40 380 0 380 0 3 150 c2 138 1 153 -19 190 -19 35 -93 108 -417 413 l-56 52 -198 0 -198 0 0 -30z m440 -51 c173 -160 370 -352 370 -360 0 -13 -667 -12 -675 1 -10 17 -95 362 -95 387 l0 23 173 0 172 -1 55 -50z m-360 -262 c0 -5 -4 -5 -10 -2 -5 3 -10 14 -10 23 0 15 2 15 10 2 5 -8 10 -19 10 -23z m19 -92 l0 -20 -9 20 c-5 11 -9 27 -9 35 -1 13 0 13 9 0 5 -8 9 -24 9 -35z m21 -97 c0 -76 -5 -72 -14 10 -5 44 -4 62 3 57 6 -3 11 -34 11 -67z m-40 19 c0 -5 -4 -5 -10 -2 -5 3 -10 14 -10 23 0 15 2 15 10 2 5 -8 10 -19 10 -23z m243 -4 c-13 -2 -35 -2 -50 0 -16 2 -5 4 22 4 28 0 40 -2 28 -4z m161 -4 c-14 -23 -133 -69 -177 -69 -43 0 -129 22 -157 39 -29 19 -1 22 56 5 71 -20 155 -15 210 14 43 23 79 29 68 11z m106 -7 c-14 -9 -41 -32 -61 -49 -63 -57 -122 -77 -224 -78 -102 0 -168 17 -162 43 2 10 10 15 18 13 117 -32 139 -34 192 -22 30 6 92 34 138 61 46 27 93 49 104 49 18 0 18 -2 -5 -17z m270 8 c0 -5 -18 -10 -39 -10 -22 0 -43 5 -46 10 -4 6 12 10 39 10 25 0 46 -4 46 -10z m-149 -22 l34 -13 -62 -6 c-58 -6 -67 -10 -117 -57 -35 -33 -63 -52 -78 -51 -22 0 -22 1 -4 12 10 7 39 29 65 50 34 28 115 77 127 77 1 0 16 -6 35 -12z m21 -53 c3 -3 -23 -35 -57 -70 -65 -68 -87 -76 -155 -55 l-25 7 25 11 c14 5 43 29 65 52 22 23 49 46 60 50 23 10 79 13 87 5z m-612 -47 c-1 -35 -3 -40 -11 -25 -10 17 -5 67 6 67 3 0 5 -19 5 -42z m745 -9 c0 -11 -13 -13 -56 -11 -54 4 -59 2 -98 -33 -22 -20 -43 -45 -46 -56 -4 -13 -15 -19 -33 -18 -15 0 -20 3 -12 6 8 3 42 33 75 68 l60 64 55 -3 c39 -2 55 -7 55 -17z m-5 -56 c8 -4 -11 -10 -43 -13 -40 -5 -66 -15 -82 -30 -40 -38 -41 -14 -2 25 32 32 40 35 74 30 21 -4 45 -9 53 -12z m-330 -53 c17 -6 2 -8 -50 -8 -50 0 -68 2 -55 8 25 11 72 11 105 0z m335 0 c4 -6 -12 -10 -42 -10 -35 0 -44 3 -33 10 20 13 67 13 75 0z" />
                </g>
            </svg>
        </>)
}