import {FaChevronDown} from "react-icons/fa";
import iphone from "../../../assets/iphone12.png";
import {useState} from "react";
import {NavLink} from "react-router-dom";

const MyOrders = () => {
    const [expandedItem, setExpandedItem] = useState<number | null>(null);
    const data = [1, 2, 3, 4, 5];

    return (
        <>
            <div className="w-full h-max min-h-[50vh] flex flex-col px-44 phone:px-5 py-5 gap-10">
                <p className="text-3xl font-semibold flex items-center justify-between relative h3textBg w-full">
                    Orders History
                    <span className="text-xl font-normal">14 items</span>
                </p>
                <div className="w-full h-max flex flex-col gap-3">
                    <div className="w-full phone:hidden h-12 flex gap-5 items-center bg-slate-100">
                        <div className="w-max h-10 px-4 rounded cursor-pointer text-white flex items-center justify-center bg-[#118686]">
                            All Orders
                        </div>
                        <div className="w-max h-10 px-4 rounded cursor-pointer bg-white flex items-center justify-center ">
                            Processing
                        </div>
                        <div className="w-max h-10 px-4 rounded cursor-pointer bg-white flex items-center justify-center ">
                            On Delivery
                        </div>
                        <div className="w-max h-10 px-4 rounded cursor-pointer bg-white flex items-center justify-center ">
                            Delivered
                        </div>
                        <div className="w-max h-10 px-4 rounded cursor-pointer bg-white flex items-center justify-center ">
                            Cancelled
                        </div>
                        <div className="w-max h-10 px-4 rounded cursor-pointer bg-white flex items-center justify-center ">
                            Returned
                        </div>
                    </div>
                    <div className="w-full hidden phone:flex h-12 bg-sky-50  items-center justify-between px-4">
                        <select
                            name=""
                            id=""
                            className="w-44 h-10 rounded border border-gray-300 text-sm "
                        >
                            <option value="allorders">All Orders</option>
                            <option value="allorders">Processing</option>
                            <option value="allorders">On Delivery</option>
                            <option value="allorders">Delivered</option>
                            <option value="allorders">Cancelled</option>
                            <option value="allorders">Returned</option>
                        </select>
                        <button className="w-max h-max px-4 py-1 bg-green-700 text-white rounded">
                            Send
                        </button>
                    </div>
                    <div className="w-full h-max flex flex-col bg-gray-50 gap-5 p-3">
                        {data.map((index) => (
                            <div
                                className="w-full h-max flex flex-col gap-2 border p-2 rounded border-gray-400 "
                                key={index}
                            >
                                <div className="w-full h-12 flex items-center cursor-pointer bg-gray-200 justify-between px-4 rounded border border-gray-400 font-semibold text-sm">
                                    <p className="flex flex-col">
                                        Order No: <span>12345678</span>
                                    </p>
                                    <p className="phone:hidden">
                                        Date ordered: 02-10-2022
                                    </p>
                                    <div className="w-max flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-green-500 hidden phone:flex"></div>
                                        <p className="px-2 phone:hidden text-white rounded h-max bg-green-500 w-max">
                                            Delivered
                                        </p>
                                        <span className="phone:hidden">
                                            02-10-2022
                                        </span>
                                    </div>
                                    <p className="phone:hidden">Items (2)</p>
                                    <NavLink to={"/my-orders/123"}>
                                        <div className="px-3 py-1 bg-yellow-500 rounded text-white">
                                            See Details
                                        </div>
                                    </NavLink>
                                    <FaChevronDown
                                        onClick={() =>
                                            setExpandedItem(
                                                expandedItem === index
                                                    ? null
                                                    : index
                                            )
                                        }
                                        className={`w-6 h-6 transition-all duration-700 ${
                                            expandedItem === index
                                                ? "transform -rotate-180"
                                                : ""
                                        }`}
                                    />
                                </div>

                                <div
                                    className={`w-full bg-white rounded  flex flex-col ${
                                        expandedItem === index
                                            ? "max-h-80 overflow-hidden transition-max-h gap-2 p-2 border border-gray-400 duration-700 ease-in-out"
                                            : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                    }`}
                                >
                                    <div className="w-full h-32 border border-gray-400 flex gap-4 rounded p-2">
                                        <div className="w-36 phone:w-28 rounded h-full bg-sky-100">
                                            <img
                                                src={iphone}
                                                alt=""
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="w-ma h-full flex flex-col justify-center gap-1 phone:text-sm">
                                            <p className="text-xl phone:text-base truncate">
                                                Iphone 12 Pro Max 128 GB
                                            </p>
                                            <p>Order 1455642142</p>
                                            <p className="px-2 text-white rounded text-sm h-max bg-green-500 w-max">
                                                Delivered
                                            </p>
                                            <p>12-02-2022</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-32 border border-gray-400 flex gap-4 rounded p-2">
                                        <div className="w-36 phone:w-28 rounded h-full bg-sky-100">
                                            <img
                                                src={iphone}
                                                alt=""
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="w-ma h-full flex flex-col justify-center gap-1 phone:text-sm">
                                            <p className="text-xl phone:text-base truncate">
                                                Iphone 12 Pro Max 128 GB
                                            </p>
                                            <p>Order 1455642142</p>
                                            <p className="px-2 text-white rounded text-sm h-max bg-red-500 w-max">
                                                Cancelled
                                            </p>
                                            <p>12-02-2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyOrders;
