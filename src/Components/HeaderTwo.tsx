import logo from "../assets/Logo3.svg";
import {CiSearch} from "react-icons/ci";
import {PiShoppingCartThin} from "react-icons/pi";
import {IoMenuOutline} from "react-icons/io5";
import {Drawer} from "antd";
import {useState} from "react";
import {FaCaretDown} from "react-icons/fa";
import {IoMdSearch} from "react-icons/io";
import "./owl.css";
import Carousel from "./Carousel";
import SideCart from "./SideCart";

const HeaderTwo = () => {
    const [openSideBar, setOpenSideBar] = useState<boolean>(false);
    const [collectionDrop, setCollectionDrop] = useState<boolean>(false);
    const [moreDrop, setMoreDrop] = useState<boolean>(false);
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [openCart, setOpenCart] = useState<boolean>(false);

    return (
        <>
            <div className="w-full h-28 bg-white shadow px-44 phone:px-5 flex justify-between">
                <div
                    className="w-max h-full hidden phone:flex items-center"
                    onClick={() => setOpenSideBar(true)}
                >
                    <IoMenuOutline className="w-8 h-8" />
                </div>
                <div className="w-max h-full flex items-center">
                    <img src={logo} alt="" className="w-60 phone:w-36" />
                </div>
                <div className="w-[24rem] h-full flex items-center justify-between text-[#232323] phone:hidden">
                    <div className="w-max h-max cursor-pointer hover:text-[#008081] transition-all duration-400">
                        Home
                    </div>
                    <div
                        className="w-max h-max cursor-pointer hover:text-[#008081] transition-all duration-400 flex items-center gap-2 relative"
                        onMouseEnter={() => setCollectionDrop(!collectionDrop)}
                        onMouseLeave={() => setCollectionDrop(!collectionDrop)}
                    >
                        Collection{" "}
                        <FaCaretDown
                            className={`transition-all duration-300 ${
                                collectionDrop ? "-rotate-180" : ""
                            }`}
                        />
                        <div
                            className={`absolute p-4 top-6 left-0 flex flex-col gap-3 w-48 h-max shadow bg-white toggle-dropdown ${
                                collectionDrop ? " active" : ""
                            }`}
                        >
                            <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                Phones
                            </div>
                            <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                Tablets
                            </div>
                            <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                Airpods
                            </div>
                            <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                Speakers
                            </div>
                            <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                Consoles
                            </div>
                            <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                Smart Watch
                            </div>
                        </div>
                    </div>
                    <div className="w-max h-max cursor-pointer hover:text-[#008081] transition-all duration-400">
                        Shop
                    </div>
                    <div
                        className="w-max h-max cursor-pointer hover:text-[#008081] transition-all duration-400 flex items-center gap-2 relative"
                        onMouseEnter={() => setMoreDrop(!moreDrop)}
                        onMouseLeave={() => setMoreDrop(!moreDrop)}
                    >
                        More{" "}
                        <FaCaretDown
                            className={`transition-all duration-300 ${
                                moreDrop ? "-rotate-180" : ""
                            }`}
                        />
                        <div
                            className={`absolute p-4 top-6 left-0 flex flex-col gap-3 w-48 h-max shadow bg-white toggle-dropdown ${
                                moreDrop ? " active" : ""
                            }`}
                        >
                            <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                About Us
                            </div>
                            <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                Contact Us
                            </div>
                            <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                Blog
                            </div>
                            <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                FAQs
                            </div>
                            <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                Services
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-max flex items-center gap-8 phone:gap-4">
                    <div className="w-12 h-12 phone:h-10 phone:w-10 cursor-pointer rounded-full bg-white shadow-lg flex items-center justify-center relative">
                        <CiSearch
                            className="w-full h-full p-3"
                            onClick={() => setShowSearch(!showSearch)}
                        />
                        <div
                            className={`w-max h-max rounded bg-white shadow-md border border-gray-300 text-black absolute right-[-22px] top-14 toggle-dropdown ${
                                showSearch ? " active" : ""
                            }`}
                        >
                            <div className="w-60 h-10 flex justify-between rounded">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="w-full h-full outline-none rounded-l text-sm pl-3"
                                />
                                <div className="h-full w-10 bg-black text-white flex items-center justify-center rounded-r">
                                    <IoMdSearch className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-12 h-12 phone:h-10 phone:w-10 cursor-pointer rounded-full bg-white shadow-lg flex items-center justify-center"
                        onClick={() => setOpenCart(true)}
                    >
                        <PiShoppingCartThin className="w-5 h-5" />
                    </div>
                </div>
            </div>
            <Drawer
                open={openCart}
                onClose={() => setOpenCart(false)}
                placement="right"
                maskClosable={true}
                width={400}
                title={"CART"}
            >
                <div className="w-full h-[90vh] p-3">
                    <Carousel />
                    <SideCart/>
                </div>
            </Drawer>
            <Drawer
                open={openSideBar}
                onClose={() => setOpenSideBar(false)}
                placement="left"
                maskClosable={true}
                width={300}
            >
                <div className="w-full h-max">
                    <div className="w-full h-max flex flex-col gap-2">
                        <div className="w-full h-max flex justify-between items-center">
                            <div className="w-full h-10 flex items-center">
                                Home
                            </div>
                        </div>
                        <div className="w-full h-max flex justify-between items-center">
                            <div className="w-full h-10 flex items-center">
                                Collection
                            </div>
                            <div className="w-full h-max flex flex-col"></div>
                        </div>
                        <div className="w-full h-max flex justify-between items-center"></div>
                        <div className="w-full h-max flex justify-between items-center"></div>
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default HeaderTwo;
