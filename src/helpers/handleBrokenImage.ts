import { XCircle } from "../assets"

export const handleBrokenImage = (element: any) => {
        console.log(element)
        element.target.src = XCircle
        element.target.classList.add('svgBroken')
        element.target.title = 'Broken link to image!'
    }