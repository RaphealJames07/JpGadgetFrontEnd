import {AiOutlineMenuUnfold, AiOutlineSearch} from "react-icons/ai";
import {FaHeart, FaStar} from "react-icons/fa";
import {FaArrowLeftLong} from "react-icons/fa6";
import {HiViewGrid} from "react-icons/hi";
import {MdViewList} from "react-icons/md";
import {BiReset} from "react-icons/bi";
import {Drawer, Pagination, Slider} from "antd";
import airpod from "../../assets/airpods1.png";
import {useState} from "react";

const Shop = () => {
    const [openFilter, setOpenFilter] = useState(false);
    const [isRow, setIsRow] = useState(true);
    const [isColumn, setIsColumn] = useState(false);
    const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let line1
    let line2
    let line3
    let line4
    const screenWidth = window.innerWidth

    if(screenWidth <= 700) {
      line1 = testData.slice(0,2)
      line2 = testData.slice(2,4)
      line3 = testData.slice(4,6)
      line4 = testData.slice(6,8)
    }else{
      line1 = testData.slice(0,3)
      line2 = testData.slice(3,6)
      line3 = testData.slice(6,9)
      line4 = testData.slice(9)
    }

    const handleIsRow = () => {
        setIsRow(true);
        setIsColumn(false);
    };
    const handleIsColumn = () => {
        setIsRow(false);
        setIsColumn(true);
    };

    return (
        <>
            <div className="w-full h-max mb-2">
                <div className="w-full h-max bg-[#128686] flex flex-col items-center gap-3 py-8 px-44 phone:px-5">
                    <div className="w-full h-12 bg-white rounded flex text-sm">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-[80%] phone:w-[57%] h-full rounded-l pl-3 outline-none"
                        />
                        <select
                            name=""
                            id=""
                            className="w-[16%] phone:w-[30%] h-full outline-none border-gray-400 border-x-2"
                        >
                            <option value="">All Products</option>
                            <option value="">Phones</option>
                            <option value="">Tablets</option>
                            <option value="">Smart Watches</option>
                            <option value="">Airpods</option>
                            <option value="">Consoles</option>
                            <option value="">Other Gadgets</option>
                        </select>
                        <div className="w-[4%] phone:w-[13%] h-full rounded-r">
                            <button className="w-full h-full flex items-center justify-center bg-black outline-none rounded-r">
                                <AiOutlineSearch className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[80%] phone:w-[85%] h-max rounded  flex phone:flex-wrap phone:justify-center text-sm phone:gap-2 p-1 phone:bg-gray-200">
                        <div className="w-1/6 phone:rounded phone:w-max phone:px-2 h-10 bg-white rounded-l flex items-center justify-center cursor-pointer hover:bg-gray-100 border-r border-r-gray-500 phone:border-none phone:shadow">
                            Phones
                        </div>
                        <div className="w-1/6 phone:rounded phone:w-max phone:px-2 h-10 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100 border-r border-r-gray-500 phone:border-none phone:shadow">
                            Tablets
                        </div>
                        <div className="w-1/6 phone:rounded phone:w-max phone:px-2 h-10 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100 border-r border-r-gray-500 phone:border-none phone:shadow">
                            Smart Watches
                        </div>
                        <div className="w-1/6 phone:rounded phone:w-max phone:px-2 h-10 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100 border-r border-r-gray-500 phone:border-none phone:shadow">
                            Airpods
                        </div>
                        <div className="w-1/6 phone:rounded phone:w-max phone:px-2 h-10 bg-white flex items-center justify-center cursor-pointer hover:bg-gray-100 border-r border-r-gray-500 phone:border-none phone:shadow">
                            Consoles
                        </div>
                        <div className="w-1/6 phone:rounded phone:w-max phone:px-2 h-10 bg-white rounded-r flex items-center justify-center cursor-pointer hover:bg-gray-100">
                            Other Gadgets
                        </div>
                    </div>
                </div>
                <div className="w-full h-max">
                    <div className="w-full h-12 flex items-center px-44 phone:px-5 gap-2">
                        <FaArrowLeftLong />
                        <p>Home / Shop </p>
                    </div>
                    <div className="w-full h-12 flex items-center justify-between px-44 phone:px-5 bg-gray-100">
                        <div className="text-xl font-semibold phone:text-base">
                            <p className="phone:hidden">All Products</p>
                            <p
                                className="rounded hidden phone:block w-max h-max px-4 py-2 bg-gray-200 items-center justify-center cursor-pointer"
                                onClick={() => setOpenFilter(true)}
                            >
                                Filter
                            </p>
                        </div>
                        <div className="w-max flex items-center gap-8 phone:gap-4 phone:text-sm">
                            <div className="w-max flex items-center gap-2">
                                <p>Sort By</p>
                                <select
                                    name=""
                                    id=""
                                    className="w-max h-8 border border-gray-200 rounded pl-2"
                                >
                                    <option value="">Featured</option>
                                    <option value="">Popularity</option>
                                    <option value="">Rating</option>
                                    <option value="">Newest Arrival</option>
                                    <option value="">Price: Low to High</option>
                                    <option value="">Price: High to Low</option>
                                </select>
                            </div>
                            <div className="w-max h-10 flex items-center gap-4">
                                <HiViewGrid
                                    className={`w-6 h-6 phone:w-6 phone:h-6 transition-all duration-500 ${
                                        isRow
                                            ? "text-[#128686]"
                                            : "text-gray-500"
                                    } cursor-pointer`}
                                    onClick={handleIsRow}
                                />
                                <MdViewList
                                    className={`w-6 h-6 phone:w-6 phone:h-6 transition-all duration-500 ${
                                        isColumn
                                            ? "text-[#128686]"
                                            : "text-gray-500"
                                    } cursor-pointer`}
                                    onClick={handleIsColumn}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max">
                    <div className="w-full h-max px-44 phone:px-3 py-5 flex justify-between">
                        <div className="w-[23%] phone:hidden h-max flex flex-col bg-gray-100 px-2 gap-4 text-sm">
                            <div className="w-full h-16 flex items-center justify-between border-b border-b-gray-400">
                                <span className="w-max h-max flex items-center gap-1 cursor-pointer bg-[#128686] text-white rounded p-2">
                                    <AiOutlineMenuUnfold className="w-5 h-5" />{" "}
                                    Filters
                                </span>
                                <span className="w-max h-max flex items-center gap-1 cursor-pointer bg-[#128686] text-white rounded px-2 py-2">
                                    <BiReset className="w-5 h-5" /> Reset
                                    Filters
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
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
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
                        <div className="w-[75%] phone:w-[100%] h-max flex flex-col bg-gray-100 py-1 px-2">
                            <div className="w-full h-max flex flex-col gap-5">
                                <div
                                    className={`${
                                        isColumn
                                            ? "w-full h-max flex flex-col gap-4"
                                            : "w-full h-max flex gap-4"
                                    }`}
                                >
                                    {line1.map((index) => (
                                        <div
                                            className={`${
                                                isColumn
                                                    ? "w-full rounded-l-lg rounded-r-lg  h-40 flex border border-gray-200"
                                                    : "w-[32%] phone:w-[50%] rounded-lg h-80 phone:h-72 border border-gray-200"
                                            }`}
                                            key={index}
                                        >
                                            <div
                                                className={`${
                                                    isColumn
                                                        ? "w-full h-full rounded-l-lg   phone:px-0 flex items-center justify-center bg-white"
                                                        : "w-full h-[50%] rounded-lg rounded-b-none phone:px-0 flex items-center justify-center bg-white"
                                                }`}
                                            >
                                                <img
                                                    src={airpod}
                                                    alt=""
                                                    className={` ${
                                                        isColumn
                                                            ? "w-full rounded-l-lg  h-full object-contain"
                                                            : "w-full rounded-lg rounded-b-none h-full object-contain"
                                                    } `}
                                                />
                                            </div>
                                            <div
                                                className={`${
                                                    isColumn
                                                        ? "w-full rounded-r-lg h-full  bg-gray-50 flex flex-col phone:justify-between phone:py-2 py-4 px-3 phone:px-1 phone:text-sm gap-2"
                                                        : "w-full rounded-lg h-[50%] rounded-t-none bg-gray-50 flex flex-col phone:justify-between phone:py-2 py-4 px-3 phone:px-1 phone:text-sm gap-2"
                                                } `}
                                            >
                                                <p className="text-pry font-bold">
                                                    Apple Airpod Pro
                                                </p>
                                                <p className="flex justify-between pr-5 phone:text-base">
                                                    N65,000{" "}
                                                    <span className="text-sm line-through">
                                                        N80,000
                                                    </span>
                                                </p>
                                                <p className="flex justify-between items-center phone:text-xs">
                                                    <span className="flex items-center gap-1">
                                                        <FaStar className="text-orange-400 w-4 h-4" />
                                                        3.0
                                                    </span>{" "}
                                                    (15 reviews){" "}
                                                    <span>
                                                        <FaHeart className="h-6 w-6 phone:h-4 phone:w-4 cursor-pointer text-red-500" />
                                                    </span>
                                                </p>
                                                <button className="w-full h-max bg-[#128686] py-2 rounded text-white">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className={`${
                                        isColumn
                                            ? "w-full h-max flex flex-col gap-4"
                                            : "w-full h-max flex gap-4"
                                    }`}
                                >
                                    {line2.map((index) => (
                                        <div
                                            className={`${
                                                isColumn
                                                    ? "w-full rounded-l-lg rounded-r-lg  h-40 flex border border-gray-200"
                                                    : "w-[32%] phone:w-[50%] rounded-lg h-80 phone:h-72 border border-gray-200"
                                            }`}
                                            key={index}
                                        >
                                            <div
                                                className={`${
                                                    isColumn
                                                        ? "w-full h-full rounded-l-lg   phone:px-0 flex items-center justify-center bg-white"
                                                        : "w-full h-[50%] rounded-lg rounded-b-none phone:px-0 flex items-center justify-center bg-white"
                                                }`}
                                            >
                                                <img
                                                    src={airpod}
                                                    alt=""
                                                    className={` ${
                                                        isColumn
                                                            ? "w-full rounded-l-lg  h-full object-contain"
                                                            : "w-full rounded-lg rounded-b-none h-full object-contain"
                                                    } `}
                                                />
                                            </div>
                                            <div
                                                className={`${
                                                    isColumn
                                                        ? "w-full rounded-r-lg h-full  bg-gray-50 flex flex-col phone:justify-between phone:py-2 py-4 px-3 phone:px-1 phone:text-sm gap-2"
                                                        : "w-full rounded-lg h-[50%] rounded-t-none bg-gray-50 flex flex-col phone:justify-between phone:py-2 py-4 px-3 phone:px-1 phone:text-sm gap-2"
                                                } `}
                                            >
                                                <p className="text-pry font-bold">
                                                    Apple Airpod Pro
                                                </p>
                                                <p className="flex justify-between pr-5 phone:text-base">
                                                    N65,000{" "}
                                                    <span className="text-sm line-through">
                                                        N80,000
                                                    </span>
                                                </p>
                                                <p className="flex justify-between items-center phone:text-xs">
                                                    <span className="flex items-center gap-1">
                                                        <FaStar className="text-orange-400 w-4 h-4" />
                                                        3.0
                                                    </span>{" "}
                                                    (15 reviews){" "}
                                                    <span>
                                                        <FaHeart className="h-6 w-6 phone:h-4 phone:w-4 cursor-pointer text-red-500" />
                                                    </span>
                                                </p>
                                                <button className="w-full h-max bg-[#128686] py-2 rounded text-white">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className={`${
                                        isColumn
                                            ? "w-full h-max flex flex-col gap-4"
                                            : "w-full h-max flex gap-4"
                                    }`}
                                >
                                    {line3.map((index) => (
                                        <div
                                            className={`${
                                                isColumn
                                                    ? "w-full rounded-l-lg rounded-r-lg  h-40 flex border border-gray-200"
                                                    : "w-[32%] phone:w-[50%] rounded-lg h-80 phone:h-72 border border-gray-200"
                                            }`}
                                            key={index}
                                        >
                                            <div
                                                className={`${
                                                    isColumn
                                                        ? "w-full h-full rounded-l-lg   phone:px-0 flex items-center justify-center bg-white"
                                                        : "w-full h-[50%] rounded-lg rounded-b-none phone:px-0 flex items-center justify-center bg-white"
                                                }`}
                                            >
                                                <img
                                                    src={airpod}
                                                    alt=""
                                                    className={` ${
                                                        isColumn
                                                            ? "w-full rounded-l-lg  h-full object-contain"
                                                            : "w-full rounded-lg rounded-b-none h-full object-contain"
                                                    } `}
                                                />
                                            </div>
                                            <div
                                                className={`${
                                                    isColumn
                                                        ? "w-full rounded-r-lg h-full  bg-gray-50 flex flex-col phone:justify-between phone:py-2 py-4 px-3 phone:px-1 phone:text-sm gap-2"
                                                        : "w-full rounded-lg h-[50%] rounded-t-none bg-gray-50 flex flex-col phone:justify-between phone:py-2 py-4 px-3 phone:px-1 phone:text-sm gap-2"
                                                } `}
                                            >
                                                <p className="text-pry font-bold">
                                                    Apple Airpod Pro
                                                </p>
                                                <p className="flex justify-between pr-5 phone:text-base">
                                                    N65,000{" "}
                                                    <span className="text-sm line-through">
                                                        N80,000
                                                    </span>
                                                </p>
                                                <p className="flex justify-between items-center phone:text-xs">
                                                    <span className="flex items-center gap-1">
                                                        <FaStar className="text-orange-400 w-4 h-4" />
                                                        3.0
                                                    </span>{" "}
                                                    (15 reviews){" "}
                                                    <span>
                                                        <FaHeart className="h-6 w-6 phone:h-4 phone:w-4 cursor-pointer text-red-500" />
                                                    </span>
                                                </p>
                                                <button className="w-full h-max bg-[#128686] py-2 rounded text-white">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className={`${
                                        isColumn
                                            ? "w-full h-max flex flex-col gap-4"
                                            : "w-full h-max flex gap-4"
                                    }`}
                                >
                                    {line4.map((index) => (
                                        <div
                                            className={`${
                                                isColumn
                                                    ? "w-full rounded-l-lg rounded-r-lg  h-40 flex border border-gray-200"
                                                    : "w-[32%] phone:w-[50%] rounded-lg h-80 phone:h-72 border border-gray-200"
                                            }`}
                                            key={index}
                                        >
                                            <div
                                                className={`${
                                                    isColumn
                                                        ? "w-full h-full rounded-l-lg   phone:px-0 flex items-center justify-center bg-white"
                                                        : "w-full h-[50%] rounded-lg rounded-b-none phone:px-0 flex items-center justify-center bg-white"
                                                }`}
                                            >
                                                <img
                                                    src={airpod}
                                                    alt=""
                                                    className={` ${
                                                        isColumn
                                                            ? "w-full rounded-l-lg  h-full object-contain"
                                                            : "w-full rounded-lg rounded-b-none h-full object-contain"
                                                    } `}
                                                />
                                            </div>
                                            <div
                                                className={`${
                                                    isColumn
                                                        ? "w-full rounded-r-lg h-full  bg-gray-50 flex flex-col phone:justify-between phone:py-2 py-4 px-3 phone:px-1 phone:text-sm gap-2"
                                                        : "w-full rounded-lg h-[50%] rounded-t-none bg-gray-50 flex flex-col phone:justify-between phone:py-2 py-4 px-3 phone:px-1 phone:text-sm gap-2"
                                                } `}
                                            >
                                                <p className="text-pry font-bold">
                                                    Apple Airpod Pro
                                                </p>
                                                <p className="flex justify-between pr-5 phone:text-base">
                                                    N65,000{" "}
                                                    <span className="text-sm line-through">
                                                        N80,000
                                                    </span>
                                                </p>
                                                <p className="flex justify-between items-center phone:text-xs">
                                                    <span className="flex items-center gap-1">
                                                        <FaStar className="text-orange-400 w-4 h-4" />
                                                        3.0
                                                    </span>{" "}
                                                    (15 reviews){" "}
                                                    <span>
                                                        <FaHeart className="h-6 w-6 phone:h-4 phone:w-4 cursor-pointer text-red-500" />
                                                    </span>
                                                </p>
                                                <button className="w-full h-max bg-[#128686] py-2 rounded text-white">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full h-20 flex items-center justify-center">
                                <Pagination defaultCurrent={1} total={50} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Drawer
                title="Filter"
                placement="left"
                closable={true}
                onClose={() => setOpenFilter(false)}
                open={openFilter}
                width={300}
                footer={true}
            >
                <div className="w-full  h-max flex flex-col bg-gray-100 px-2 gap-4 text-sm">
                            <div className="w-full h-16 flex items-center justify-between border-b border-b-gray-400">
                                <span className="w-max h-max flex items-center gap-1 cursor-pointer bg-[#128686] text-white rounded p-2">
                                    <AiOutlineMenuUnfold className="w-5 h-5" />{" "}
                                    Filters
                                </span>
                                <span className="w-max h-max flex items-center gap-1 cursor-pointer bg-[#128686] text-white rounded px-2 py-2">
                                    <BiReset className="w-5 h-5" /> Reset
                                    Filters
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
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
                                        <p className="w-full h-full flex items-center justify-between">
                                            Samsung{" "}
                                            <span className="w-max flex items-center">
                                                21
                                            </span>
                                        </p>
                                    </div>
                                    <div className="w-full h-12 cursor-pointer flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            className="w-6 h-6"
                                        />
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
            </Drawer>
        </>
    );
};

export default Shop;
