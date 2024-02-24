// import logos from "../assets/Logo3.svg";
import {CiSearch} from "react-icons/ci";
import {PiShoppingCartThin} from "react-icons/pi";
import {IoMenuOutline} from "react-icons/io5";
import {Drawer} from "antd";
import {useState} from "react";
import {FaCaretDown, FaCaretUp, FaUserAlt} from "react-icons/fa";
import {IoMdSearch} from "react-icons/io";
// import "./owl.css";
import Carousel from "./Carousel";
import SideCart from "./SideCart";
import {RiLogoutCircleLine} from "react-icons/ri";
import {NavLink} from "react-router-dom";
import logo from "../assets/logo3.svg";
interface Props {
    setShowAuth: React.Dispatch<React.SetStateAction<boolean>>;
    showAuth: boolean;
}

const HeaderTwo: React.FC<Props> = ({showAuth, setShowAuth}) => {
    const [openSideBar, setOpenSideBar] = useState<boolean>(false);
    const [collectionDrop, setCollectionDrop] = useState<boolean>(false);
    const [moreDrop, setMoreDrop] = useState<boolean>(false);
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [openCart, setOpenCart] = useState<boolean>(false);
    const [sideCollectionDrop, setSideCollectionDrop] =
        useState<boolean>(false);
    const [sideMoreDrop, setSideMoreDrop] = useState<boolean>(false);
    const [sidePfp, setSidepfp] = useState<boolean>(false);
    const user = false;

    const handleOpenLogin = () => {
        setShowAuth(!showAuth);
        setOpenSideBar(false);
    };

    return (
        <>
            <div className="w-full h-20 bg-white shadow px-44 phone:px-5 flex justify-between z-50">
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
                    <NavLink to={"/"}>
                        <div className="w-max h-max cursor-pointer hover:text-[#008081] transition-all duration-400">
                            Home
                        </div>
                    </NavLink>
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
                            className={`absolute p-4 top-6 left-0 z-10 flex flex-col gap-3 w-48 h-max shadow bg-white toggle-dropdown ${
                                collectionDrop ? " active" : ""
                            }`}
                        >
                            <NavLink to={"/collections"}>
                                <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                    Phones
                                </div>
                            </NavLink>
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
                    <NavLink to={"/shop"}>
                        <div className="w-max h-max cursor-pointer hover:text-[#008081] transition-all duration-400">
                            Shop
                        </div>
                    </NavLink>
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
                            className={`absolute p-4 top-6 left-0 z-10 flex flex-col gap-3 w-48 h-max shadow bg-white toggle-dropdown ${
                                moreDrop ? " active" : ""
                            }`}
                        >
                            <NavLink to={"/about-us"}>
                                <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                    About Us
                                </div>
                            </NavLink>
                            <NavLink to={"/contact-us"}>
                                <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                    Contact Us
                                </div>
                            </NavLink>
                            <NavLink to={"/blog"}>
                                <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                    Blog
                                </div>
                            </NavLink>
                            <NavLink to={"/frequently-asked"}>
                                <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                    FAQs
                                </div>
                            </NavLink>
                            <NavLink to={"/services"}>
                                <div className="w-full h-8 cursor-pointer text-black hover:text-[#008081] flex items-center">
                                    Services
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="w-max flex items-center gap-8 phone:gap-4">
                    <div className="w-12 h-12 phone:h-10 phone:w-10 cursor-pointer rounded-full bg-white shadow-lg flex items-center justify-center relative z-20">
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
                width={350}
                title={"CART"}
            >
                <div className="w-full h-[90vh] p-3">
                    <Carousel />
                    <SideCart />
                </div>
            </Drawer>
            <Drawer
                open={openSideBar}
                onClose={() => setOpenSideBar(false)}
                placement="left"
                maskClosable={true}
                width={300}
                title={"MENU"}
            >
                <div className="w-full h-full p-4 flex flex-col justify-between">
                    <div className="w-full h-max flex flex-col gap-2">
                        <div className="w-full h-max flex justify-between items-center cursor-pointer">
                            <NavLink to={"/"}>
                                <div className="w-full h-10 flex items-center">
                                    Home
                                </div>
                            </NavLink>
                        </div>
                        <div className="w-full h-max flex flex-col justify-between items-center cursor-pointer">
                            <div
                                className="w-full h-10 flex items-center justify-between "
                                onClick={() =>
                                    setSideCollectionDrop(!sideCollectionDrop)
                                }
                            >
                                <p>Collection</p>
                                <FaCaretDown
                                    className={`w-5 h-5 transition-all duration-700 ${
                                        sideCollectionDrop
                                            ? "transform -rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>
                            <div
                                className={`w-full ${
                                    sideCollectionDrop
                                        ? "max-h-80 overflow-hidden transition-max-h duration-700 ease-in-out"
                                        : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                } flex flex-col gap-2 text-sm`}
                            >
                                <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                    Phones
                                </div>
                                <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                    Tablets
                                </div>
                                <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                    Laptops
                                </div>
                                <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                    Airpods
                                </div>
                                <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                    Speakers
                                </div>
                                <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                    Consoles
                                </div>
                                <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                    Smart Watches
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-max flex justify-between items-center cursor-pointer">
                            <NavLink to={"/shop"}>
                                <div className="w-full h-10 flex items-center">
                                    Shop
                                </div>
                            </NavLink>
                        </div>
                        <div className="w-full h-max flex flex-col justify-between items-center cursor-pointer">
                            <div
                                className="w-full h-10 flex items-center justify-between "
                                onClick={() => setSideMoreDrop(!sideMoreDrop)}
                            >
                                <p>More</p>
                                <FaCaretDown
                                    className={`w-5 h-5 transition-all duration-700 ${
                                        sideMoreDrop
                                            ? "transform -rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>
                            <div
                                className={`w-full ${
                                    sideMoreDrop
                                        ? "max-h-72 overflow-hidden transition-max-h duration-700 ease-in-out"
                                        : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                } flex flex-col gap-2 text-sm`}
                            >
                                <NavLink to={"/about-us"}>
                                    <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                        About Us
                                    </div>
                                </NavLink>
                                <NavLink to={"/contact-us"}>
                                    <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                        Contact Us
                                    </div>
                                </NavLink>
                                <NavLink to={"/blog"}>
                                    <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                        Blogs
                                    </div>
                                </NavLink>
                                <NavLink to={"/frequently-asked"}>
                                    <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                        FAQs
                                    </div>
                                </NavLink>
                                <NavLink to={"/services"}>
                                    <div className="w-full h-10 cursor-pointer hover:bg-slate-100 transition-all duration-500 flex items-center px-2 rounded">
                                        Services
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-10 flex items-center justify-between ">
                        {user ? (
                            <>
                                <div className="w-max h-max relative">
                                    <div
                                        className="w-max flex items-center gap-2 cursor-pointer bg-slate-100 p-2 rounded-full"
                                        onClick={() => setSidepfp(!sidePfp)}
                                    >
                                        <span>
                                            <FaUserAlt className="w-5 h-5" />
                                        </span>
                                        <p>John</p>
                                        <span>
                                            <FaCaretUp className="w-5 h-5" />
                                        </span>
                                    </div>
                                    <div
                                        className={`w-48 h-max rounded border shadow-md border-gray-300 text-black absolute left-0 bottom-12 toggle-dropdown ${
                                            sidePfp ? " active" : ""
                                        }`}
                                    >
                                        <div className="w-full h-10 flex items-center pl-2 cursor-pointer border-b">
                                            Profile
                                        </div>
                                        <div className="w-full h-10 flex items-center pl-2 cursor-pointer border-b">
                                            My Orders
                                        </div>
                                        <div className="w-full h-10 flex items-center pl-2 cursor-pointer border-b">
                                            Payment Methods
                                        </div>
                                        <div className="w-full h-10 flex items-center pl-2 cursor-pointer">
                                            WishList
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <RiLogoutCircleLine className="w-5 h-5" />
                                    Logout
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    className="w-max h-max flex items-center bg-slate-100 px-4 py-2 rounded-full cursor-pointer"
                                    onClick={handleOpenLogin}
                                >
                                    <p>Login</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default HeaderTwo;
