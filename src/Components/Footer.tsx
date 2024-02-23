import img1 from "../assets/visa.svg";
import img2 from "../assets/mastercard.svg";
import img3 from "../assets/googlepay.png";
import img4 from "../assets/applePay.svg";
import {FaCaretDown} from "react-icons/fa";
import {useState} from "react";

const Footer = () => {
    const [showCI, setShowCI] = useState<boolean>(false);
    const [showYA, setShowYA] = useState<boolean>(false);
    const [showP, setShowP] = useState<boolean>(false);
    const [showOC, setShowOC] = useState<boolean>(false);
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-56 bg-gray-200">
                    <div className="newsletterBg px-60 flex items-center justify-between phone:justify-center phone:px-5 phone:flex-col phone:gap-4">
                        <div className="w-max phone:w-full phone:items-center h-max flex flex-col justify-center gap-3 phone:gap-2">
                            <p className="text-4xl font-bold text-white phone:text-xl">
                                Sign Up For Our Newsletter{" "}
                            </p>
                            <p className="font-light text-white">
                                Subscribe our newsletter and get discount 20%
                                Off
                            </p>
                        </div>
                        <div className="w-max h-max bg-white rounded p-1 flex items-center gap-2">
                            <input
                                type="text"
                                placeholder="Your email"
                                className="w-60 h-10 bg-white rounded border-none text-sm pl-2 outline-none"
                            />
                            <button className="w-max h-max px-6 py-2 bg-yellow-300 rounded transition-all duration-500 hover:bg-green-700 hover:text-white">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-max px-5 hidden phone:flex">
                    <div className="w-full h-max py-5 flex flex-col gap-2">
                        <div className="w-full h-max">
                            <div
                                className="w-full h-8 flex justify-between items-center"
                                onClick={() => setShowCI(!showCI)}
                            >
                                <p>Contact Information</p>
                                <span>
                                    <FaCaretDown
                                        className={`w-5 h-5 transition-all duration-700 ${
                                            showCI
                                                ? "transform -rotate-180"
                                                : ""
                                        }`}
                                    />
                                </span>
                            </div>
                            <div
                                className={`w-full ${
                                    showCI
                                        ? "max-h-36 overflow-hidden transition-max-h duration-700 ease-in-out"
                                        : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                } flex flex-col gap-4 px-2 `}
                            >
                                <p className="font-semibold">
                                    Location:{" "}
                                    <span className="font-normal text-[rgb(120,120,120)]">
                                        12 Road Apapa Business Point Lagos
                                    </span>
                                </p>
                                <p className="font-semibold">
                                    Telephone:{" "}
                                    <span className="font-normal text-[rgb(120,120,120)]">
                                        +234123456789
                                    </span>
                                </p>
                                <p className="font-semibold">
                                    Email @:{" "}
                                    <span className="font-normal text-[rgb(120,120,120)]">
                                        infojpgadgets@gmail.com
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-max">
                            <div
                                className="w-full h-8 flex justify-between items-center"
                                onClick={() => setShowYA(!showYA)}
                            >
                                <p>Your Account</p>
                                <span>
                                    <FaCaretDown
                                        className={`w-5 h-5 transition-all duration-700 ${
                                            showYA
                                                ? "transform -rotate-180"
                                                : ""
                                        }`}
                                    />
                                </span>
                            </div>
                            <div
                                className={`w-full ${
                                  showYA
                                        ? "max-h-52 overflow-hidden transition-max-h duration-700 ease-in-out"
                                        : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                } flex flex-col gap-4 px-2 text-[rgb(120,120,120)]`}
                            >
                                <p className="cursor-pointer">Personal Info</p>
                                <p className="cursor-pointer">Orders</p>
                                <p className="cursor-pointer">Credit Slips</p>
                                <p className="cursor-pointer">Addresses</p>
                                <p className="cursor-pointer">My Wishlists</p>
                            </div>
                        </div>
                        <div className="w-full h-max">
                            <div
                                className="w-full h-8 flex justify-between items-center"
                                onClick={() => setShowP(!showP)}
                            >
                                <p>Product</p>
                                <span>
                                    <FaCaretDown
                                        className={`w-5 h-5 transition-all duration-700 ${
                                            showP
                                                ? "transform -rotate-180"
                                                : ""
                                        }`}
                                    />
                                </span>
                            </div>
                            <div
                                className={`w-full ${
                                    showP
                                        ? "max-h-56 overflow-hidden transition-max-h duration-700 ease-in-out"
                                        : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                } flex flex-col gap-4 px-2 `}
                            >
                                <p className="cursor-pointer">Price Update</p>
                                <p className="cursor-pointer">Popular</p>
                                <p className="cursor-pointer">
                                    Deal of the Day
                                </p>
                                <p className="cursor-pointer">New Product</p>
                                <p className="cursor-pointer">Best Sellers</p>
                                <p className="cursor-pointer">Shop</p>
                            </div>
                        </div>
                        <div className="w-full h-max">
                            <div
                                className="w-full h-8 flex justify-between items-center"
                                onClick={() => setShowOC(!showOC)}
                            >
                                <p>Our Company</p>
                                <span>
                                    <FaCaretDown
                                        className={`w-5 h-5 transition-all duration-700 ${
                                            showOC
                                                ? "transform -rotate-180"
                                                : ""
                                        }`}
                                    />
                                </span>
                            </div>
                            <div
                                className={`w-full ${
                                    showOC
                                        ? "max-h-56 overflow-hidden transition-max-h duration-700 ease-in-out"
                                        : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out "
                                } flex flex-col gap-4 px-2 `}
                            >
                                <p className="cursor-pointer">About Us</p>
                                <p className="cursor-pointer">Contact Us</p>
                                <p className="cursor-pointer">
                                    Terms And Conditions
                                </p>
                                <p>Blogs and News</p>
                                <p>FAQs</p>
                                <p>Services</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-80 px-60 pt-14 flex justify-between phone:hidden">
                    <div className="w-max h-max flex flex-col gap-3">
                        <p className="text-lg font-semibold">
                            Contact Information
                        </p>
                        <div className="w-max h-max flex flex-col gap-2">
                            <p className="font-semibold">
                                Location:{" "}
                                <span className="font-normal text-[rgb(120,120,120)]">
                                    12 Road Apapa Business Point Lagos
                                </span>
                            </p>
                            <p className="font-semibold">
                                Telephone:{" "}
                                <span className="font-normal text-[rgb(120,120,120)]">
                                    +234123456789
                                </span>
                            </p>
                            <p className="font-semibold">
                                Email @:{" "}
                                <span className="font-normal text-[rgb(120,120,120)]">
                                    infojpgadgets@gmail.com
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="w-max h-max flex flex-col gap-3">
                        <p className="text-lg font-semibold">Your Account</p>
                        <div className="w-max h-max flex flex-col gap-2 text-[rgb(120,120,120)]">
                            <p className="cursor-pointer">Personal Info</p>
                            <p className="cursor-pointer">Orders</p>
                            <p className="cursor-pointer">Credit Slips</p>
                            <p className="cursor-pointer">Addresses</p>
                            <p className="cursor-pointer">My Wishlists</p>
                        </div>
                    </div>
                    <div className="w-max h-max flex flex-col gap-3">
                        <p className="text-lg font-semibold">Product</p>
                        <div className="w-max h-max flex flex-col gap-2 text-[rgb(120,120,120)]">
                            <p className="cursor-pointer">Price Update</p>
                            <p className="cursor-pointer">Popular</p>
                            <p className="cursor-pointer">Deal of the Day</p>
                            <p className="cursor-pointer">New Product</p>
                            <p className="cursor-pointer">Best Sellers</p>
                            <p className="cursor-pointer">Shop</p>
                        </div>
                    </div>
                    <div className="w-max h-max flex flex-col gap-3">
                        <p className="text-lg font-semibold">Our Company</p>
                        <div className="w-max h-max flex flex-col gap-2 text-[rgb(120,120,120)]">
                            <p className="cursor-pointer">About Us</p>
                            <p className="cursor-pointer">Contact Us</p>
                            <p className="cursor-pointer">
                                Terms And Conditions
                            </p>
                            <p>Blogs and News</p>
                            <p>FAQs</p>
                            <p>Services</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-12 phone:h-max flex phone:flex-col phone:gap-3 phone:py-5 justify-between items-center bg-[#118686] px-60 phone:px-5 text-white">
                    <p className="">
                        &copy; 2024, All Rights Reserved. JP Gadgets&reg;
                    </p>
                    <p className="cursor-pointer hover:text-blue-400 transition-all duration-500">
                        Coco Tech&trade;
                    </p>
                    <div className="flex gap-2">
                        <div className="w-10 cursor-pointer h-6 bg-white ">
                            <img
                                src={img1}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-10 cursor-pointer h-6 bg-white ">
                            <img
                                src={img2}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-10 cursor-pointer h-6 bg-white ">
                            <img
                                src={img3}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-10 cursor-pointer h-6 bg-white ">
                            <img
                                src={img4}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
