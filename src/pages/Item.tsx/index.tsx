import { Input, Product, Select, Toast } from "../../components";

interface IItem {
    setter: Function;
  }

export function Item(props: IItem) {

    return (
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 overflow-y-auto h-full w-full z-20">
                <div className="relative text-dm top-20 mx-auto p-5 border w-96 lg:w-2/3 shadow-lg rounded-md bg-white dark:bg-gray-700">
                    <div className="flex pb-2">
                        <div className="basis-11/12">
                            <div className="h-9">Edit Inventory Item</div>
                        </div>
                        <div className="flex-footer self-start">
                            <button className="btn-save" type="button" onClick={(e)=>props.setter(false)}>
                                Cancel
                            </button>
                            <button className="btn-save" type="button">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                        <Input type='text' value='' title='Item Name' required setter={(e: string) => console.log(e)} />
                        <Input type='text' value='' title='Item Description' setter={(e: string) => console.log(e)} />
                        <div className="grid grid-cols-2 xl:grid-cols-3 mb-2">
                            <Input type='number' value='' title='Warn Level' required min={0} setter={(e: string) => console.log(e)} />
                            <Input type='number' value='' title='Alert Level' required min={0} setter={(e: string) => console.log(e)} />
                            <Select value='' title='Subcategory' required setter={(e: string) => console.log(e)}>
                                <option value="0">--Select</option>
                                <option value="US">Appliances</option>
                                <option value="CA">Building Materials</option>
                                <option value="FR">Doors & Windows</option>
                                <option value="DE">Electrical</option>
                            </Select>
                        </div>
                    </div>
                    <div className="border rounded-md p-2">
                        <div className="h-9">Associated Products</div>
                        <div className="grid grid-cols-2 xl:grid-cols-4 gap-1">
                            <Product
                                setter={(e: any) => console.log(e)}
                                product={{
                                    mfg: 'Manuf', upc: '222222',
                                    img: 'https://images.thdstatic.com/productImages/eb67cc0f-990b-4c67-8719-9b96e27df582/svn/framing-studs-058448-64_400.jpg'
                                }}
                            />
                        </div>
                    </div>
                    <Toast id={1} message="Hi there!" position="center" duration={5000} type="info" />
                </div>
            </div>
        </>
    )

}