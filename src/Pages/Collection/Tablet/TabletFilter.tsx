import {Slider} from "antd";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {BiReset} from "react-icons/bi";

const TabletFilter = () => {
    return (
        <>
            <div className="w-[23%] phone:hidden h-max flex flex-col bg-gray-100 px-2 gap-4 text-sm">
                <div className="w-full h-16 flex items-center justify-between border-b border-b-gray-400">
                    <span className="w-max h-max flex items-center gap-1 cursor-pointer bg-[#128686] text-white rounded p-2">
                        <AiOutlineMenuUnfold className="w-5 h-5" /> Filters
                    </span>
                    <span className="w-max h-max flex items-center gap-1 cursor-pointer bg-[#128686] text-white rounded px-2 py-2">
                        <BiReset className="w-5 h-5" /> Reset Filters
                    </span>
                </div>
                <div className="w-full h-max flex flex-col gap-2">
                    <div className="px-5 py-2 rounded w-max bg-[#128686] text-white h-max flex items-center justify-center">
                        PRICES
                    </div>
                    <div className="w-full h-max flex flex-col gap-2">
                        <Slider range defaultValue={[20, 50]} />
                        <div className="w-full h-max flex justify-between">
                            <div className="px-4 py-2 border-2 border-[#128686] flex items-center justify-center">
                                10,000
                            </div>
                            <div className="px-4 py-2 border-2 border-[#128686] flex items-center justify-center">
                                10,000
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max flex flex-col gap-4">
                    <div className="w-max h-max px-4 py-2 bg-[#128686] text-white rounded flex items-center justify-center">
                        COLOR
                    </div>
                    <div className="flex items-center gap-4">
                        <input
                            type="radio"
                            className="w-6 h-6 cursor-pointer"
                        />
                        <input
                            type="radio"
                            className="w-6 h-6 cursor-pointer"
                        />
                        <input
                            type="radio"
                            className="w-6 h-6 cursor-pointer"
                        />
                        <input
                            type="radio"
                            className="w-6 h-6 cursor-pointer"
                        />
                        <input
                            type="radio"
                            className="w-6 h-6 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="w-full h-max flex flex-col gap-4">
                    <div className="w-max px-4 py-2 flex items-center justify-center h-max bg-[#128686] text-white rounded">
                        SHOP BY BRANDS
                    </div>
                    <input
                        type="search"
                        placeholder="Search brands"
                        className="w-full h-10 rounded border-pry border pl-3 outline-none text-sm"
                    />
                    <div className="w-full h-max flex flex-col">
                        <div className="w-full h-12  cursor-pointer text-pry flex items-center gap-4">
                            <input type="checkbox" className="w-6 h-6" />
                            <p className="w-full h-full flex items-center justify-between">
                                Samsung{" "}
                                <span className="w-max flex items-center">
                                    21
                                </span>
                            </p>
                        </div>
                        <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                            <input type="checkbox" className="w-6 h-6" />
                            <p className="w-full h-full flex items-center justify-between">
                                Samsung{" "}
                                <span className="w-max flex items-center">
                                    21
                                </span>
                            </p>
                        </div>
                        <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                            <input type="checkbox" className="w-6 h-6" />
                            <p className="w-full h-full flex items-center justify-between">
                                Samsung{" "}
                                <span className="w-max flex items-center">
                                    21
                                </span>
                            </p>
                        </div>
                        <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                            <input type="checkbox" className="w-6 h-6" />
                            <p className="w-full h-full flex items-center justify-between">
                                Samsung{" "}
                                <span className="w-max flex items-center">
                                    21
                                </span>
                            </p>
                        </div>
                        <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                            <input type="checkbox" className="w-6 h-6" />
                            <p className="w-full h-full flex items-center justify-between">
                                Samsung{" "}
                                <span className="w-max flex items-center">
                                    21
                                </span>
                            </p>
                        </div>
                        <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                            <input type="checkbox" className="w-6 h-6" />
                            <p className="w-full h-full flex items-center justify-between">
                                Samsung{" "}
                                <span className="w-max flex items-center">
                                    21
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabletFilter;
