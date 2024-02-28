import {Pagination} from "antd";
import {FaHeart, FaStar} from "react-icons/fa";
import airpod from "../../../assets/airpods1.png";

interface shopProductsProps {
    isColumn: boolean;
}

const LaptopProducts: React.FC<shopProductsProps> = ({isColumn}) => {
    const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let line1;
    let line2;
    let line3;
    let line4;
    const screenWidth = window.innerWidth;

    if (screenWidth <= 700) {
        line1 = testData.slice(0, 2);
        line2 = testData.slice(2, 4);
        line3 = testData.slice(4, 6);
        line4 = testData.slice(6, 8);
    } else {
        line1 = testData.slice(0, 3);
        line2 = testData.slice(3, 6);
        line3 = testData.slice(6, 9);
        line4 = testData.slice(9);
    }
    return (
        <>
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
        </>
    );
};

export default LaptopProducts;
