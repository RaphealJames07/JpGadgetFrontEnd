import {FaTrash} from "react-icons/fa";
import Iphone from "../../../assets/iphone12.png";

const Wishlists = () => {
    return (
        <>
            <div className="w-full h-max py-10 px-44 phone:px-5 flex flex-col gap-8">
                <p className="text-3xl font-semibold flex items-center justify-between relative h3textBg w-full">
                    Wishlists
                    <span>14 items</span>
                </p>
                <div className="w-full h-max overflow-y-auto">
                    <div className="w-full h-max flex flex-col gap-5">
                        <div className="w-full h-40 flex items-center justify-between py-5 px-5 bg-gray-100">
                            <div className="w-[15%] phone:w-[25%] h-full bg-white">
                                <img
                                    src={Iphone}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="w-[85%] phone:w-[75%] h-full flex items-center justify-between px-2">
                                <div className="w-max h-full  flex flex-col justify-center gap-5">
                                    <h1 className="text-xl">
                                        Iphone 12 5G 128GB
                                    </h1>
                                    <p className="text-lg">N505,000</p>
                                </div>
                                <div className="w-max h-full  flex  phone:flex-col-reverse items- phone:items-end gap-4 px-2">
                                    <button className=" bg-[#118686] w-32 phone:w-max phone:px-3 rounded text-white h-10">
                                        Add to cart
                                    </button>
                                    <span className="bg-red-200 w-10 phone:w-max phone:px-2 h-10 flex justify-center items-center cursor-pointer">
                                        <FaTrash className="text-xl text-red-600" />
                                    </span>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
                <p>
                    <span className="text-red-500">*Note: </span>Items in your
                    wishlist can increase or decrease in price
                </p>
            </div>
        </>
    );
};

export default Wishlists;
