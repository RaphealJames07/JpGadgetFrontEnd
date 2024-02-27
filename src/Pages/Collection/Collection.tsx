import CollCarousel from "./CollCarousel";
import phone from "../../assets/iphone2.webp";
import {useState} from "react";

const Collection = () => {
    const [openSTC, setOpenSTC] = useState<number>(0);
    return (
        <>
            <div className="w-full h-max flex flex-col gap-7 pb-5">
                <CollCarousel />
                <div className="w-full h-max flex flex-col gap-10">
                    <p className="text-3xl font-semibold flex items-center justify-center relative h3textBg w-full">
                        All Collections
                    </p>
                    <div className="w-full h-max px-44 phone:px-5 phone:grid-cols-2 grid gap-3 grid-cols-5">
                        <div
                            className="w-max h-max flex flex-col gap-2 transition-all duration-500 relative"
                            onMouseEnter={() => setOpenSTC(1)}
                            onMouseLeave={() => setOpenSTC(0)}
                        >
                          <button className="w-max h-max px-2 text-xs py-1 bg-[#0f807f] text-white rounded absolute top-2 right-3">15 items</button>
                            <div className="w-52 h-60 cursor-pointer ">
                                <img
                                    src={phone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-10  flex items-center justify-center cursor-pointer transition-all duration-500">
                                {openSTC === 1 ? (
                                    <>
                                        <button className="w-full h-full bg-[#0f807f] hover:bg-yellow-500 transition-all text-sm text-white font-semibold rounded duration-500">
                                            SHOP THE COLLECTION
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-lg font-semibold transition-all duration-500">
                                            Mobile Phones
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div
                            className="w-max h-max flex flex-col gap-2 transition-all duration-500 relative"
                            onMouseEnter={() => setOpenSTC(2)}
                            onMouseLeave={() => setOpenSTC(0)}
                        >
                          <button className="w-max h-max px-2 text-xs py-1 bg-[#0f807f] text-white rounded absolute top-2 right-3">15 items</button>
                            <div className="w-52 h-60 cursor-pointer ">
                                <img
                                    src={phone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-10  flex items-center justify-center cursor-pointer transition-all duration-500">
                                {openSTC === 2 ? (
                                    <>
                                        <button className="w-full h-full bg-[#0f807f] hover:bg-yellow-500 transition-all text-sm text-white font-semibold rounded duration-500">
                                            SHOP THE COLLECTION
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-lg font-semibold transition-all duration-500">
                                            Tablets
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div
                            className="w-max h-max flex flex-col gap-2 transition-all duration-500 relative"
                            onMouseEnter={() => setOpenSTC(3)}
                            onMouseLeave={() => setOpenSTC(0)}
                        >
                          <button className="w-max h-max px-2 text-xs py-1 bg-[#0f807f] text-white rounded absolute top-2 right-3">15 items</button>
                            <div className="w-52 h-60 cursor-pointer ">
                                <img
                                    src={phone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-10  flex items-center justify-center cursor-pointer transition-all duration-500">
                                {openSTC === 3 ? (
                                    <>
                                        <button className="w-full h-full bg-[#0f807f] hover:bg-yellow-500 transition-all text-sm text-white font-semibold rounded duration-500">
                                            SHOP THE COLLECTION
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-lg font-semibold transition-all duration-500">
                                            Airpods
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div
                            className="w-max h-max flex flex-col gap-2 transition-all duration-500 relative"
                            onMouseEnter={() => setOpenSTC(4)}
                            onMouseLeave={() => setOpenSTC(0)}
                        >
                          <button className="w-max h-max px-2 text-xs py-1 bg-[#0f807f] text-white rounded absolute top-2 right-3">15 items</button>
                            <div className="w-52 h-60 cursor-pointer ">
                                <img
                                    src={phone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-10  flex items-center justify-center cursor-pointer transition-all duration-500">
                                {openSTC === 4 ? (
                                    <>
                                        <button className="w-full h-full bg-[#0f807f] hover:bg-yellow-500 transition-all text-sm text-white font-semibold rounded duration-500">
                                            SHOP THE COLLECTION
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-lg font-semibold transition-all duration-500">
                                            Speakers
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div
                            className="w-max h-max flex flex-col gap-2 transition-all duration-500 relative"
                            onMouseEnter={() => setOpenSTC(5)}
                            onMouseLeave={() => setOpenSTC(0)}
                        >
                          <button className="w-max h-max px-2 text-xs py-1 bg-[#0f807f] text-white rounded absolute top-2 right-3">15 items</button>
                            <div className="w-52 h-60 cursor-pointer ">
                                <img
                                    src={phone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-10  flex items-center justify-center cursor-pointer transition-all duration-500">
                                {openSTC === 5 ? (
                                    <>
                                        <button className="w-full h-full bg-[#0f807f] hover:bg-yellow-500 transition-all text-sm text-white font-semibold rounded duration-500">
                                            SHOP THE COLLECTION
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-lg font-semibold transition-all duration-500">
                                            Consoles
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div
                            className="w-max h-max flex flex-col gap-2 transition-all duration-500 relative"
                            onMouseEnter={() => setOpenSTC(6)}
                            onMouseLeave={() => setOpenSTC(0)}
                        >
                          <button className="w-max h-max px-2 text-xs py-1 bg-[#0f807f] text-white rounded absolute top-2 right-3">15 items</button>
                            <div className="w-52 h-60 cursor-pointer ">
                                <img
                                    src={phone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-10  flex items-center justify-center cursor-pointer transition-all duration-500">
                                {openSTC === 6 ? (
                                    <>
                                        <button className="w-full h-full bg-[#0f807f] hover:bg-yellow-500 transition-all text-sm text-white font-semibold rounded duration-500">
                                            SHOP THE COLLECTION
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-lg font-semibold transition-all duration-500">
                                            Smart Watches
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collection;
