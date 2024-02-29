import {CiCircleInfo} from "react-icons/ci";
import iphone from "../assets/iphone.png";
import {RiDeleteBinLine} from "react-icons/ri";
// import {NavLink} from "react-router-dom";

const SideCart = () => {
    return (
        <>
            <div className="w-full h-[90%] py-2 rounded flex flex-col justify-between">
                <div className="h-10 bg-[#fff3cd] text-[rgb(133,100,4)] flex gap-2 items-center pl-4">
                    <CiCircleInfo className="w-6 h-6" />
                    <p>Spend $16.00 more and get free shipping!</p>
                </div>
                <div className="w-full h-[90%] bg-lime-100">
                    <div className="w-full h-[24rem] overflow-y-auto flex flex-col gap-2 p-2 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-primary-color scrollbar-track-gray-300 scrollbar scrollbar-w-[0.3rem]">
                        <div className="w-full h-32 bg-gray-50 flex gap-2">
                            <div className="w-36 h-full border border-gray-300 bg-gray-200 flex items-center justify-center">
                                <img
                                    src={iphone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-full flex flex-col justify-between border border-gray-300 rounded p-2 text-[rgb(104,104,104)]">
                                <p className="w-full flex justify-between text-black font-semibold">
                                    Iphone 11 Pro Max{" "}
                                    <span>
                                        <RiDeleteBinLine className="w-5 h-5 cursor-pointer hover:text-red-500" />
                                    </span>
                                </p>
                                <p className="text-xs">Color: Blue</p>
                                <p className="text-xs">1 X $500</p>
                                <div className="w-max h-max flex border border-gray-300 rounded">
                                    <div className="w-8 h-8 cursor-pointer text-2xl flex items-center justify-center border-r border-r-gray-300 ">
                                        -
                                    </div>
                                    <div className="w-8 h-8 border-r border-r-gray-300 flex items-center justify-center">
                                        1
                                    </div>
                                    <div className="w-8 h-8 cursor-pointer text-2xl flex items-center justify-center">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-32 bg-gray-50 flex gap-2">
                            <div className="w-36 h-full border border-gray-300 bg-gray-200 flex items-center justify-center">
                                <img
                                    src={iphone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-full flex flex-col justify-between border border-gray-300 rounded p-2 text-[rgb(104,104,104)]">
                                <p className="w-full flex justify-between text-black font-semibold">
                                    Iphone 11 Pro Max{" "}
                                    <span>
                                        <RiDeleteBinLine className="w-5 h-5 cursor-pointer hover:text-red-500" />
                                    </span>
                                </p>
                                <p className="text-xs">Color: Blue</p>
                                <p className="text-xs">1 X $500</p>
                                <div className="w-max h-max flex border border-gray-300 rounded">
                                    <div className="w-8 h-8 cursor-pointer text-2xl flex items-center justify-center border-r border-r-gray-300 ">
                                        -
                                    </div>
                                    <div className="w-8 h-8 border-r border-r-gray-300 flex items-center justify-center">
                                        1
                                    </div>
                                    <div className="w-8 h-8 cursor-pointer text-2xl flex items-center justify-center">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-32 bg-gray-50 flex gap-2">
                            <div className="w-36 h-full border border-gray-300 bg-gray-200 flex items-center justify-center">
                                <img
                                    src={iphone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-full flex flex-col justify-between border border-gray-300 rounded p-2 text-[rgb(104,104,104)]">
                                <p className="w-full flex justify-between text-black font-semibold">
                                    Iphone 11 Pro Max{" "}
                                    <span>
                                        <RiDeleteBinLine className="w-5 h-5 cursor-pointer hover:text-red-500" />
                                    </span>
                                </p>
                                <p className="text-xs">Color: Blue</p>
                                <p className="text-xs">1 X $500</p>
                                <div className="w-max h-max flex border border-gray-300 rounded">
                                    <div className="w-8 h-8 cursor-pointer text-2xl flex items-center justify-center border-r border-r-gray-300 ">
                                        -
                                    </div>
                                    <div className="w-8 h-8 border-r border-r-gray-300 flex items-center justify-center">
                                        1
                                    </div>
                                    <div className="w-8 h-8 cursor-pointer text-2xl flex items-center justify-center">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-32 bg-gray-50 flex gap-2">
                            <div className="w-36 h-full border border-gray-300 bg-gray-200 flex items-center justify-center">
                                <img
                                    src={iphone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-full flex flex-col justify-between border border-gray-300 rounded p-2 text-[rgb(104,104,104)]">
                                <p className="w-full flex justify-between text-black font-semibold">
                                    Iphone 11 Pro Max{" "}
                                    <span>
                                        <RiDeleteBinLine className="w-5 h-5 cursor-pointer hover:text-red-500" />
                                    </span>
                                </p>
                                <p className="text-xs">Color: Blue</p>
                                <p className="text-xs">1 X $500</p>
                                <div className="w-max h-max flex border border-gray-300 rounded">
                                    <div className="w-8 h-8 cursor-pointer text-2xl flex items-center justify-center border-r border-r-gray-300 ">
                                        -
                                    </div>
                                    <div className="w-8 h-8 border-r border-r-gray-300 flex items-center justify-center">
                                        1
                                    </div>
                                    <div className="w-8 h-8 cursor-pointer text-2xl flex items-center justify-center">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-28 bg-red-50 p-2 flex flex-col justify-between">
                        <p className="w-full flex justify-between text-lg font-semibold">
                            Total <span className="">$64.00</span>
                        </p>
                        <p className="text-xs">
                            taxes and shipping fees calculated at checkout!
                        </p>
                        <div className="w-full h-10 flex items-center justify-between ">
                            <button className="w-[48%] h-full py-2 bg-black rounded font-medium text-white" >
                                YOUR CART
                            </button>
                            <button className="w-[48%] h-full py-2 bg-[#ffec00] font-medium">
                                CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideCart;
