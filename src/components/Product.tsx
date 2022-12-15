import { useState } from "react";
import { handleBrokenImage } from "../helpers/handleBrokenImage";
import { Database, Star } from "../icons";
import { Edit } from "../icons/Edit";
import { Input } from "./Input";

interface IProd {
    classes?: string;
    select?: boolean;
    setter: Function;
    product: {
        mfg: string;
        upc: string;
        brand?: string;
        img?: string;
        url?: string;
    }
}

export const Product = (props: IProd): JSX.Element => {
    const [thisProduct, setThisProduct] = useState(props.product);
    const [edit, setEdit] = useState(false);
    const hide = 'hidden';

    const handleSave = () => {
        props.setter(thisProduct);
        setEdit(!edit);
    }

    return (
        <>
            <div className="border rounded-md p-1">
                <div className="relative">
                    <img src={thisProduct.img} onError={(e) => handleBrokenImage(e)} className={`relative object-cover h-40 w-full`} title="Title" />
                    <button className="btn-edit absolute inline-flex top-1 left-1 bg-gray-300" type="button">
                        Default
                        <Star classes="relative ml-1" title="Set as default product" />
                    </button>
                    <div className="grid grid-cols-2 gap-x-1 absolute bottom-1 left-1">
                        <button className="btn-edit inline-flex bg-gray-300" type="button" onClick={(e)=>setEdit(!edit)}>
                            {!edit ? 'Edit' : 'Cancel'}
                            <Edit classes="relative ml-1" title="Edit this product" />
                        </button>
                        <button className={`${!edit && hide} btn-edit inline-flex bg-gray-300`} type="button" onClick={(e)=>handleSave()}>
                            Save
                            <Database classes="relative ml-1" title="Edit this product" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-1 pt-1">
                    <Input type='text' disabled={!edit} value={thisProduct.mfg} title='MFG' required setter={(e: string) => setThisProduct({...thisProduct, mfg: e})} />
                    <Input type='text' disabled={!edit} value={thisProduct.brand ? thisProduct.brand : ''} title='Brand' required setter={(e: string) => setThisProduct({...thisProduct, brand: e})} />
                    <Input type='text' disabled={!edit} value={thisProduct.upc} title='UPC' required setter={(e: string) => setThisProduct({...thisProduct, upc: e})} />
                </div>
            </div>
        </>
    )
}


