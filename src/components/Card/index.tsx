
import { Palett, Printer, ShopCart, Star, Truck } from "../../icons";
import { PlusCircle } from "../../assets"
import { Chevron } from "../../icons/Chevron";
import { useState } from "react";
import { handleBrokenImage } from "../../helpers/handleBrokenImage";
import { Item } from "../../pages/Item.tsx";

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
  const [expanded, setExpanded] = useState(false);
  const [edit, setEdit] = useState(false);
  const [thisItem, setThisItem] = useState('');

  let image = cardProps.img ? cardProps.img : PlusCircle;
  let svgClass = cardProps.img ? '' : 'svgBroken';
  let svgTitle = cardProps.img ? (cardProps.title ? cardProps.title : '') : 'Please add picture'

  const handleItem = (e:any) => {
    console.log('item close')
    setEdit(false);
  }

  return (
    <>
      <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="grid grid-cols-1 gap-1">
          <div className="flex items-center pb-2 text-dm">
            <div className="basis-11/12 grid grid-cols-1 ga-1">
              <div className="h-9 leading-none">Item Name is really long</div>
              <div className="text-xs">In Stock: 0 | Framing</div>
            </div>
            <div className="flex-footer self-start">
              <Star select={cardProps.select} />
            </div>
          </div>
          <div className="svgBox">
            <img src={image} onError={(e) => handleBrokenImage(e)} className={`${svgClass} object-cover h-40 w-full`} title={svgTitle} onClick={(e) => setEdit(true)} />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <div className="flex items-center pt-4 text-dm">
              <div className="basis-11/12 flex">
                <Printer classes="icon-badge icon-menu" title='Print this barcode.' />
                <ShopCart classes="icon-badge icon-menu" title='Add to shopping cart.' />
                <Truck classes="icon-badge icon-menu" title='Add to shipment.' />
                <Palett classes="icon-badge icon-menu" title='Add to pallet.' />
              </div>
              <div className="flex-footer self-start">
                <button onClick={(e) => setExpanded(!expanded)}>
                  <Chevron enabled={expanded} />
                </button>
              </div>
            </div>
            <div className={`${expanded ? 'inline-block' : 'hidden'} pb-1`}>
              <div className="flex items-center pt-1 text-dm text-xs border-t border-gray-300 dark:border-slate-700 border-solid pb-1">
                <div className="basis-6/12">Carters Court</div>
                <div className="basis-4/12">Stock: 110</div>
                <div className="basis-3/12">Aisle: A1</div>
                <div className="basis-3/12">Bay: 11</div>
              </div>
              <div className="flex items-center pt-1 text-dm text-xs border-t border-gray-300 dark:border-slate-700 border-solid pb-1">
                <div className="basis-6/12">Office</div>
                <div className="basis-4/12">Stock: 0</div>
                <div className="basis-3/12">Aisle: A2</div>
                <div className="basis-3/12">Bay: 12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {edit && <Item setter={(e:any)=>handleItem(e)} />}
    </>
  );
}
