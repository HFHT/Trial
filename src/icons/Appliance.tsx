interface ILogo {
    classes?: string;
}

export const Appliance = (props: ILogo) => {
    const iconClass: string = props.classes ? props.classes : '';
    return (
        <>
            <svg className={`${iconClass}`} fill="currentColor"  version="1.0" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 125.000000 125.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,125.000000) scale(0.100000,-0.100000)">
                    <path d="M347 1163 c-4 -3 -7 -217 -7 -473 0 -384 2 -470 14 -479 9 -8 108 -11 342 -9 l329 3 3 483 2 482 -338 0 c-186 0 -342 -3 -345 -7z m271 -175 c2 -143 2 -148 -18 -148 -19 0 -20 -6 -20 -90 0 -84 1 -90 20 -90 19 0 21 -5 18 -67 l-3 -68 -117 -3 -118 -3 0 304 c0 167 3 307 7 311 4 3 57 5 117 4 l111 -3 3 -147z m380 -155 l-3 -308 -165 0 -165 0 -3 295 c-1 162 0 300 3 307 3 10 46 13 170 13 l165 0 -2 -307z m-404 -378 l-6 -25 87 0 87 0 -6 25 -7 26 123 -3 123 -3 0 -115 0 -115 -305 0 -305 0 -3 104 c-1 58 0 111 2 118 4 10 33 13 111 13 l105 0 -6 -25z" />
                    <path d="M404 837 c-3 -8 -3 -56 -2 -108 l3 -94 78 -3 77 -3 0 111 0 110 -75 0 c-54 0 -77 -4 -81 -13z m122 -163 c-3 -9 -20 -14 -46 -14 -39 0 -40 0 -40 37 0 33 1 35 14 18 13 -18 13 -18 24 1 10 17 11 17 12 2 0 -25 16 -22 25 5 7 21 8 21 12 -6 3 -16 2 -35 -1 -43z" />
                    <path d="M674 827 c-10 -27 1 -160 14 -165 9 -3 12 19 12 87 0 56 -4 91 -10 91 -6 0 -13 -6 -16 -13z" />
                </g>
            </svg>
        </>)
}