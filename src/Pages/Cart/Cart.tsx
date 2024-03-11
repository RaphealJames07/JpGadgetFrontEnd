import {MdOutlineDelete} from "react-icons/md";
import emptyCart from "../../assets/Emptycart.gif";

const Cart = () => {
    const cart = [1,2,3];
    return (
        <>
            <div className="w-full h-max px-44 phone:px-5 flex flex-col items-center justify-center py-5 gap-5">
                <p className="text-3xl font-semibold flex items-center justify-between relative h3textBg w-full">
                    Shopping Cart
                    <span className="text-xl font-normal">3 Items</span>
                </p>
                <div className="w-full h-max flex flex-col gap-5">
                    {cart.length === 0 ? (
                        <>
                            <div className="w-full h-[50vh] flex items-center justify-center flex-col gap-4">
                                <img src={emptyCart} alt="" className="w-60 h-60" />
                                <p className="text-xl">Your Cart is empty</p>
                                <button className="w-max h-max px-4 py-2 bg-[#008081] rounded text-white">SHOP NOW</button>
                            </div>
                        </>
                    ) : (
                        <>
                            {" "}
                            <div className="w-full h-max flex flex-col gap-4">
                                <div className="w-full h-14 bg-slate-200 phone:px-2 flex items-center px-6 phone:text-sm">
                                    <div className="w-[50%] phone:w-[65%] h-max flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5"
                                        />
                                        <p>Product</p>
                                    </div>
                                    <div className="w-[50%] phone:w-[35%] h-max flex justify-between">
                                        <p className="w-[30%] phone:hidden h-max">
                                            Unit Price
                                        </p>
                                        <p className="w-[30%] phone:hidden h-max">
                                            Quantity
                                        </p>
                                        <p className="w-[30%] phone:hidden h-max">
                                            Total Price
                                        </p>
                                        <span className="w-[10%] h-max phone:hidden flex items-center opacity-0">
                                            <MdOutlineDelete className="w-1 h-1" />
                                        </span>
                                    </div>
                                </div>
                                <p className="text-xs">
                                    You have selected 3 items to buy now
                                </p>
                                <div className="w-full h-max flex phone:p-1 flex-col gap-2 p-4 bg-slate-100">
                                    <div className="w-full h-32 phone:h-max flex phone:flex-col phone:gap-2 bg-white px-2 phone:px-1 phone:py-1">
                                        <div className="w-[50%] phone:w-full h-full flex gap-3 phone:gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5"
                                            />
                                            <div className="w-max h-full flex items-center gap-3">
                                                <div className="w-32 phone:w-24 h-28 phone:h-24 bg-pink-300 rounded">
                                                    <img src="" alt="" />
                                                </div>
                                                <div className="flex flex-col gap-2 phone:gap-1 justify-center">
                                                    <p className="font-semibold phone:text-sm text-lg flex gap-1 items-center phone:truncate">
                                                        Iphone 12 Pro Max
                                                        <span className="text-sm font-normal">
                                                            (128gb)
                                                        </span>
                                                    </p>
                                                    <p className="text-sm">
                                                        UK Used
                                                    </p>
                                                    <p className="text-sm">
                                                        Red
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[50%] phone:w-full h-full phone:h-max flex items-center justify-evenly phone:justify-between">
                                            <p className="w-[30%] phone:w-max h-max ">
                                                N100,000
                                            </p>
                                            <div className="w-[30%] phone:w-max h-max flex gap-2">
                                                <div className="w-8 h-8 border rounded flex items-center justify-center cursor-pointer text-xl">
                                                    -
                                                </div>
                                                <div className="w-8 h-8 border rounded flex items-center justify-center cursor-pointer ">
                                                    2
                                                </div>
                                                <div className="w-8 h-8 border rounded flex items-center justify-center cursor-pointer text-xl">
                                                    +
                                                </div>
                                            </div>
                                            <p className="w-[30%] phone:w-max h-max ">
                                                N200,000
                                            </p>
                                            <span className="w-[10%] phone:w-max  h-max flex items-center ">
                                                <MdOutlineDelete className="w-6 h-6 text-red-500 cursor-pointer" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full h-32 phone:h-max flex phone:flex-col phone:gap-2 bg-white px-2 phone:px-1 phone:py-1">
                                        <div className="w-[50%] phone:w-full h-full flex gap-3 phone:gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5"
                                            />
                                            <div className="w-max h-full flex items-center gap-3">
                                                <div className="w-32 phone:w-24 h-28 phone:h-24 bg-pink-300 rounded">
                                                    <img src="" alt="" />
                                                </div>
                                                <div className="flex flex-col gap-2 phone:gap-1 justify-center">
                                                    <p className="font-semibold phone:text-sm text-lg flex gap-1 items-center phone:truncate">
                                                        Iphone 12 Pro Max
                                                        <span className="text-sm font-normal">
                                                            (128gb)
                                                        </span>
                                                    </p>
                                                    <p className="text-sm">
                                                        UK Used
                                                    </p>
                                                    <p className="text-sm">
                                                        Red
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[50%] phone:w-full h-full phone:h-max flex items-center justify-evenly phone:justify-between">
                                            <p className="w-[30%] phone:w-max h-max ">
                                                N100,000
                                            </p>
                                            <div className="w-[30%] phone:w-max h-max flex gap-2">
                                                <div className="w-8 h-8 border rounded flex items-center justify-center cursor-pointer text-xl">
                                                    -
                                                </div>
                                                <div className="w-8 h-8 border rounded flex items-center justify-center cursor-pointer ">
                                                    2
                                                </div>
                                                <div className="w-8 h-8 border rounded flex items-center justify-center cursor-pointer text-xl">
                                                    +
                                                </div>
                                            </div>
                                            <p className="w-[30%] phone:w-max h-max ">
                                                N200,000
                                            </p>
                                            <span className="w-[10%] phone:w-max  h-max flex items-center ">
                                                <MdOutlineDelete className="w-6 h-6 text-red-500 cursor-pointer" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full h-32 phone:h-max flex phone:flex-col phone:gap-2 bg-white px-2 phone:px-1 phone:py-1">
                                        <div className="w-[50%] phone:w-full h-full flex gap-3 phone:gap-2 items-center">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5"
                                            />
                                            <div className="w-max h-full flex items-center gap-3">
                                                <div className="w-32 phone:w-24 h-28 phone:h-24 bg-pink-300 rounded">
                                                    <img src="" alt="" />
                                                </div>
                                                <div className="flex flex-col gap-2 phone:gap-1 justify-center">
                                                    <p className="font-semibold phone:text-sm text-lg flex gap-1 items-center phone:truncate">
                                                        Iphone 12 Pro Max
                                                        <span className="text-sm font-normal">
                                                            (128gb)
                                                        </span>
                                                    </p>
                                                    <p className="text-sm">
                                                        UK Used
                                                    </p>
                                                    <p className="text-sm">
                                                        Red
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[50%] phone:w-full h-full phone:h-max flex items-center justify-evenly phone:justify-between">
                                            <p className="w-[30%] phone:w-max h-max ">
                                                N100,000
                                            </p>
                                            <div className="w-[30%] phone:w-max h-max flex gap-2">
                                                <div className="w-8 h-8 border rounded flex items-center justify-center cursor-pointer text-xl">
                                                    -
                                                </div>
                                                <div className="w-8 h-8 border rounded flex items-center justify-center cursor-pointer ">
                                                    2
                                                </div>
                                                <div className="w-8 h-8 border rounded flex items-center justify-center cursor-pointer text-xl">
                                                    +
                                                </div>
                                            </div>
                                            <p className="w-[30%] phone:w-max h-max ">
                                                N200,000
                                            </p>
                                            <span className="w-[10%] phone:w-max  h-max flex items-center ">
                                                <MdOutlineDelete className="w-6 h-6 text-red-500 cursor-pointer" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-14 bg-slate-200 flex items-center justify-end px-4">
                                <p className="text-xl font-semibold">
                                    Sub Total:{" "}
                                    <span className="font-normal">
                                        N300,000
                                    </span>
                                </p>
                            </div>
                            <div className="w-full h-max flex items-center justify-end px-36 phone:px-5">
                                <div className="w-80 h-max flex flex-col gap-2  shadow-lg rounded-md py-10 px-5">
                                    <div className="w-full h-max flex flex-col justify-around">
                                        <p className="flex justify-between">
                                            Sub Total <span>N300,000</span>
                                        </p>
                                        <p className="flex justify-between items-center">
                                            Discount{" "}
                                            <span>
                                                <input
                                                    type="text"
                                                    placeholder="coupon code"
                                                    className="h-9 w-28 rounded-lg text-sm px-2 border-y border-x outline-none"
                                                />
                                            </span>
                                        </p>
                                        <p className="flex justify-between text-[#008081] text-2xl">
                                            Total{" "}
                                            <span className="">N300,000</span>
                                        </p>
                                    </div>
                                    <div className="h-max flex flex-col gap-2 ">
                                        <p className="text-sm">
                                            Shipping fee to be included at
                                            checkout
                                        </p>
                                        <button className="w-68 h-10 bg-[#008081] text-white rounded-md">
                                            Checkout
                                        </button>
                                        <button className="w-68 h-10 border-2 text-[#008081] border-[#008081] rounded-md">
                                            Continue Shopping
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
