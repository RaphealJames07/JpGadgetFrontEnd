import {TbShoppingCartCode} from "react-icons/tb";
import HeaderOne from "../../Components/HeaderOne";

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
            <div className="w-full h-max flex flex-col ">
                <div className="w-full h-14 shadow px-44 phone:px-5 flex items-center justify-between">
                    <p className="text-xl font-semibold">Checkout</p>
                    <span>
                        <TbShoppingCartCode className="w-6 h-6 cursor-pointer" />
                    </span>
                </div>
                <div className="w-full h-screen flex ">
                    <div className="w-[60%] h-full flex flex-col gap-5 pl-44 border-r border-r-gray-300 pr-10 pt-10">
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
                                            />
                                        </div>
                                        <div>
                                            <p className="w-full h-full text-sm">
                                                Pay on Delivery
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-60 min-h-28 h-max bg-slate-200 rounded flex flex-col gap-2 p-2">
                                        <div className="w-full h-max flex justify-between items-center">
                                            <p>Mode 1</p>
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <p className="w-full h-full text-sm">
                                            No 12 Somewhere In Lekki B Close
                                            Lekki Phase 1, Lekki Lagos Nigeria
                                        </p>
                                    </div>
                                    <div className="w-60 min-h-28 h-max bg-slate-200 rounded flex flex-col gap-2 p-2">
                                        <div className="w-full h-max flex justify-between items-center">
                                            <p>Mode 1</p>
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <p className="w-full h-full text-sm">
                                            No 12 Somewhere In Lekki B Close
                                            Lekki Phase 1, Lekki Lagos Nigeria
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%] h-full flex flex-col pr-44 bg-[#f5f5f5]"></div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
