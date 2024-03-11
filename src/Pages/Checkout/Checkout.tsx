import {TbShoppingCartCode} from "react-icons/tb";
import HeaderOne from "../../Components/HeaderOne";
import pod from "../../assets/podcoins.gif";
import koraPay from "../../assets/korapay.svg";
import {NavLink} from "react-router-dom";

interface StructureProps {
    // Define props interface
    showAuth: boolean;

    setShowAuth: React.Dispatch<React.SetStateAction<boolean>>;
    isUser: boolean;
}
const Checkout: React.FC<StructureProps> = ({
    setShowAuth,
    showAuth,
    isUser,
}) => {
    return (
        <>
            <HeaderOne
                setShowAuth={setShowAuth}
                showAuth={showAuth}
                isUser={isUser}
            />
            <div className="w-full h-max flex flex-col relative mb-0 phone:mb-24">
                <div className="w-full h-14 shadow px-44 phone:px-5 flex items-center justify-between">
                    <p className="text-xl font-semibold">Checkout</p>
                    <NavLink to={"/cart"}>
                        <span>
                            <TbShoppingCartCode className="w-6 h-6 cursor-pointer" />
                        </span>
                    </NavLink>
                </div>
                <div className="w-full h-max flex phone:flex-col-reverse">
                    <div className="w-[60%] phone:w-full phone:pt-5 min-h-[90vh] phone:min-h-max h-max flex flex-col gap-5 pl-44 phone:pl-5 border-r border-r-gray-300 pr-10 phone:pr-5 pt-10 ">
                        <div className="w-full h-max border flex flex-col gap-3 border-gray-300 rounded p-4">
                            <div className="w-full h-max flex justify-between items-center">
                                <p className="text-lg font-semibold">
                                    Delivery Address
                                </p>
                            </div>
                            <div className="w-full h-max overflow-x-auto">
                                <div className="w-max h-max flex gap-5 p-2">
                                    <div className="w-60 min-h-28 h-max bg-slate-200 rounded flex flex-col gap-2 p-2">
                                        <div className="w-full h-max flex justify-between items-center">
                                            <p>Address 1</p>
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                                className="w-5 h-5 cursor-pointer"
                                            />
                                        </div>
                                        <p className="w-full h-full text-sm">
                                            No 12 Somewhere In Lekki B Close
                                            Lekki Phase 1, Lekki Lagos Nigeria
                                        </p>
                                    </div>
                                    <div className="w-60 min-h-28 h-max bg-slate-200 rounded flex flex-col gap-2 p-2">
                                        <div className="w-full h-max flex justify-between items-center">
                                            <p>Address 1</p>
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                                className="w-5 h-5 cursor-pointer"
                                            />
                                        </div>
                                        <p className="w-full h-full text-sm">
                                            No 12 Somewhere In Lekki B Close
                                            Lekki Phase 1, Lekki Lagos Nigeria
                                        </p>
                                    </div>
                                    <div className="w-60 min-h-28 h-max bg-white rounded flex items-center justify-center border-dashed border-2 cursor-pointer">
                                        <p>Add Custom Address +</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-max border flex flex-col gap-3 border-gray-300 rounded p-4">
                            <div className="w-full h-max flex justify-between items-center">
                                <p className="text-lg font-semibold">
                                    Payment Method
                                </p>
                            </div>
                            <div className="w-full h-max overflow-x-auto">
                                <div className="w-max h-max flex gap-5 p-2">
                                    <div className="w-60 min-h-28 h-max bg-slate-200 rounded flex flex-col gap-2 p-2">
                                        <div className="w-full h-max flex justify-between items-center">
                                            <p>Mode 1</p>
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                                className="w-5 h-5 cursor-pointer"
                                            />
                                        </div>
                                        <div className="w-full h-max flex flex-col items-center justify-center gap-2">
                                            <p className=" text-sm">Kora Pay</p>
                                            <img
                                                src={koraPay}
                                                alt=""
                                                className=" h-8"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-60 min-h-28 h-max bg-slate-200 rounded flex flex-col gap-2 p-2">
                                        <div className="w-full h-max flex justify-between items-center">
                                            <p>Mode 2</p>
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                                className="w-5 h-5 cursor-pointer"
                                            />
                                        </div>
                                        <div className="w-full h-max flex flex-col items-center justify-center gap-2">
                                            <p className=" text-sm">
                                                Pay on Delivery
                                            </p>
                                            <img
                                                src={pod}
                                                alt=""
                                                className="w-10 h-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-14 phone:hidden">
                            <button className="w-full h-12 bg-[#008081] text-white rounded font-semibold">
                                PAY NOW
                            </button>
                        </div>
                    </div>
                    <div className="w-[40%] phone:w-full h-full flex flex-col gap-5 phone:pr-5 pr-44 bg-[#f5f5f5] pt-10 pl-10 phone:pl-5 pb-5">
                        <div className="w-full h-max flex items-center justify-between">
                            <p className="text-xl">Order Summary</p>
                            <p className="font-semibold">3 order(s)</p>
                        </div>
                        <div className="w-full h-max flex flex-col gap-2">
                            <div className="w-full h-max bg-white flex justify-between items-center p-2 rounded">
                                <div className="w-max h-max flex gap-2 items-center">
                                    <div className="w-20 h-20 bg-pink-400 relative">
                                        <img src="" alt="" />
                                        <span className="absolute -top-2 -right-3 w-6 h-6 rounded-full flex items-center justify-center bg-black text-white ">
                                            1
                                        </span>
                                    </div>
                                    <p className="w-max h-max flex flex-col text-sm">
                                        Iphone 12 Pro Max{" "}
                                        <span className="text-xs">128GB</span>
                                    </p>
                                </div>
                                <p>N100,000</p>
                            </div>
                            <div className="w-full h-max bg-white flex justify-between items-center p-2 rounded">
                                <div className="w-max h-max flex gap-2 items-center">
                                    <div className="w-20 h-20 bg-pink-400 relative">
                                        <img src="" alt="" />
                                        <span className="absolute -top-2 -right-3 w-6 h-6 rounded-full flex items-center justify-center bg-black text-white ">
                                            1
                                        </span>
                                    </div>
                                    <p className="w-max h-max flex flex-col text-sm">
                                        Iphone 12 Pro Max{" "}
                                        <span className="text-xs">128GB</span>
                                    </p>
                                </div>
                                <p>N100,000</p>
                            </div>
                            <div className="w-full h-max bg-white flex justify-between items-center p-2 rounded">
                                <div className="w-max h-max flex gap-2 items-center">
                                    <div className="w-20 h-20 bg-pink-400 relative">
                                        <img src="" alt="" />
                                        <span className="absolute -top-2 -right-3 w-6 h-6 rounded-full flex items-center justify-center bg-black text-white ">
                                            1
                                        </span>
                                    </div>
                                    <p className="w-max h-max flex flex-col text-sm">
                                        Iphone 12 Pro Max{" "}
                                        <span className="text-xs">128GB</span>
                                    </p>
                                </div>
                                <p>N100,000</p>
                            </div>
                        </div>
                        <div className="w-full h-max flex flex-col gap-3 bg-slate-200 p-2">
                            <div className="w-full h-max flex items-center justify-between text-sm">
                                <p>Sub Total</p>
                                <p>N100,000</p>
                            </div>
                            <div className="w-full h-max flex items-center justify-between text-sm">
                                <p>Delivery Fee</p>
                                <p>N7,000</p>
                            </div>
                            <div className="w-full h-max flex items-center justify-between font-semibold text-lg">
                                <p>Total</p>
                                <p>N107,000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="w-full h-20 hidden phone:flex items-center justify-center bg-[#008081] text-white rounded font-semibold fixed left-0 bottom-0">
                    PAY NOW
                </button>
            </div>
        </>
    );
};

export default Checkout;
