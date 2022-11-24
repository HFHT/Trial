
import { Star } from "../../icons";
import { PlusCircle, XCircle } from "../../assets"

interface ICard {
  img?: string | null;
  select?: Boolean;
  title?: string | null;
  icon?: JSX.Element;
  onClick?(e: HTMLButtonElement | null): Function | void;
  onFocus?(e: HTMLButtonElement | null): Function | void;
  onBlur?(e: HTMLButtonElement | null): Function | void;
  children?: React.ReactNode;
  //  subMenu?: Array<subMenus>;
  subMenu?: Array<string>;
  onSubClick?(e: string | null): Function | void;
  label?: string;
  labelClass?: string;
  contentClass?: string;
}

export function Card(cardProps: ICard) {
  let image = cardProps.img ? cardProps.img : PlusCircle;
  let svgClass = cardProps.img ? '' : 'svgBroken';
  let svgTitle = cardProps.img ? (cardProps.title ? cardProps.title : '') : 'Please add picture'

  const handleBrokenImage = (element: any) => {
    console.log(element)
    element.target.src = XCircle
    element.target.classList.add('svgBroken')
    element.target.title = 'Broken link to image!'
  }

  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="grid grid-cols-1 gap-1">
        <div>Top Row <Star select={cardProps.select} /></div>
        <div className="svgBox"><img src={image} onError={(e) => handleBrokenImage(e)} className={svgClass} title={svgTitle} /></div>
        <div>Bottom Row
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-400 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-400 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-400 rounded"></div>
                <div className="h-4 bg-gray-400 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
