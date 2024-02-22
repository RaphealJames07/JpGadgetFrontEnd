import img1 from "../assets/visa.svg";
import img2 from "../assets/mastercard.svg";
import img3 from "../assets/googlepay.png";
import img4 from "../assets/applePay.svg";

const Footer = () => {
    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-56 bg-gray-200">
                    <div className="newsletterBg px-60 flex items-center justify-between">
                        <div className="w-max h-max flex flex-col justify-center gap-3">
                            <p className="text-4xl font-bold text-white">
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
                <div className="w-full h-80 px-60 pt-14 flex justify-between">
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
                            <p>Personal Info</p>
                            <p>Orders</p>
                            <p>Credit Slips</p>
                            <p>Addresses</p>
                            <p>My Wishlists</p>
                        </div>
                    </div>
                    <div className="w-max h-max flex flex-col gap-3">
                        <p className="text-lg font-semibold">Product</p>
                        <div className="w-max h-max flex flex-col gap-2 text-[rgb(120,120,120)]">
                            <p>Price Update</p>
                            <p>Popular</p>
                            <p>Deal of the Day</p>
                            <p>New Product</p>
                            <p>Best Sellers</p>
                            <p>Shop</p>
                        </div>
                    </div>
                    <div className="w-max h-max flex flex-col gap-3">
                        <p className="text-lg font-semibold">Our Company</p>
                        <div className="w-max h-max flex flex-col gap-2 text-[rgb(120,120,120)]">
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Terms And Conditions</p>
                            <p>Blogs and News</p>
                            <p>FAQs</p>
                            <p>Services</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-12 flex justify-between items-center bg-[#118686] px-60 text-white">
                    <p>&copy; 2024, All Rights Reserved. JP Gadgets&reg;</p>
                    <p className="cursor-pointer hover:text-blue-400 transition-all duration-500">
                        Coco Tech&trade;
                    </p>
                    <div className="flex gap-2">
                        <div className="w-10 cursor-pointer h-6 bg-white">
                            <img
                                src={img1}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-10 cursor-pointer h-6 bg-white">
                            <img
                                src={img2}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-10 cursor-pointer h-6 bg-white">
                            <img
                                src={img3}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="w-10 cursor-pointer h-6 bg-white">
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
