import {useState} from "react";
import {FaCaretDown} from "react-icons/fa";

const HeaderOne = () => {
    const [languageDropdown, setlanguageDropdown] = useState<boolean>(false);
    const [showAuth, setShowAuth] = useState<boolean>(false);
    const [showLogin, setShowLogin] = useState<boolean>(true);
    const [showForgetPwd, setShowForgetPwd] = useState<boolean>(false);
    const [showSignUp, setShowSignUp] = useState<boolean>(false);

    const handleShowLogin = () => {
        // console.log("Login");
        setShowLogin(true);
        setShowSignUp(false);
        setShowForgetPwd(false);
    };
    const handleShowSignup = () => {
        // console.log("SIgnup");
        setShowLogin(false);
        setShowSignUp(true);
        setShowForgetPwd(false);
    };
    const handleShowForgetPwd = () => {
        // console.log("Forget");
        setShowLogin(false);
        setShowSignUp(false);
        setShowForgetPwd(true);
    };

    return (
        <>
            <div className="w-full h-10 flex items-center justify-between phone:justify-center px-44 phone:px-5 bg-[#232323]  font-light ">
                <p className="phone:hidden text-white">
                    Welcome to our online store
                </p>
                <div className="w-max h-max flex items-center gap-8 text-white">
                    <div className="relative">
                        <p
                            className="transition-all duration-300 cursor-pointer hover:text-gray-300 "
                            onClick={() => setShowAuth(!showAuth)}
                        >
                            Account
                        </p>
                        <div
                            // id="user-notification"
                            className={`absolute top-10 right-0 phone:left-[-4.5rem] w-max h-max overflow-hidden z-[9] toggle-dropdown ${
                                showAuth ? " active" : ""
                            }`}
                        >
                            <div className="customer login ishi-panel-container ">
                                <div
                                    className={`w-full h-full  ishi-panel-data ishi-panel-data-default ${
                                        showLogin ? "active" : ""
                                    }`}
                                >
                                    <div className="w-[22rem] phone:w-[18rem] h-max bg-white flex flex-col gap-4 items-center px-5 py-4 border border-gray-200 rounded shadow-md">
                                        <p className="text-2xl text-black font-normal">
                                            Login
                                        </p>
                                        <div className="w-full h-max flex flex-col gap-2">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="w-full h-10 rounded border border-gray-200 pl-3 text-black outline-[#2f904f] font-normal"
                                            />
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                className="w-full h-10 rounded border border-gray-200 pl-3 text-black outline-[#2f904f] font-normal"
                                            />
                                        </div>
                                        <p
                                            onClick={handleShowForgetPwd}
                                            className="w-full h-max flex justify-end text-sm font-normal cursor-pointer text-black"
                                        >
                                            Forgot your password?
                                        </p>
                                        <button className="w-full h-10 bg-[#2f904f] text-white font-semibold flex items-center justify-center rounded">
                                            LOGIN
                                        </button>
                                        <button
                                            className="w-full h-10 bg-[#fff] border border-gray-300 text-gray-800 font-semibold flex items-center justify-center rounded"
                                            onClick={handleShowSignup}
                                        >
                                            Create account
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className={`w-full h-full shadow-xl ishi-panel-data ishi-panel-data-default ${
                                        showForgetPwd ? "active" : ""
                                    }`}
                                    // onClick={handleShowForgetPwd}
                                >
                                    <div className="w-[22rem] phone:w-[18rem] h-max bg-white flex flex-col gap-4 items-center px-5 py-4 border border-gray-200 rounded shadow-md">
                                        <p className="text-2xl text-black font-normal">
                                            Reset Your password
                                        </p>
                                        <div className="w-full h-max flex flex-col items-center gap-2">
                                            <p className="w-[80%] flex justify-center text-center text-black text-sm font-normal">
                                                We will send you an email to
                                                reset your password
                                            </p>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="w-full h-10 rounded border border-gray-200 pl-3 text-black outline-[#2f904f] font-normal"
                                            />
                                        </div>
                                        <button className="w-full h-10 bg-[#2f904f] text-white font-semibold flex items-center justify-center rounded">
                                            SUBMIT
                                        </button>
                                        <button
                                            className="w-full h-10 bg-[#fff] border border-gray-300 text-black font-semibold flex items-center justify-center rounded"
                                            onClick={handleShowLogin}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className={`w-full h-full shadow-xl ishi-panel-data ishi-panel-data-default ${
                                        showSignUp ? "active" : ""
                                    }`}
                                    // onClick={handleShowSignup}
                                >
                                    <div className="w-[22rem] phone:w-[18rem] h-max bg-white flex flex-col gap-4 items-center px-5 py-4 border border-gray-200 rounded shadow-md">
                                        <p className="text-2xl text-black font-normal">
                                            Create Account
                                        </p>
                                        <div className="w-full h-max flex flex-col gap-2">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                className="w-full h-10 rounded border border-gray-200 pl-3 text-black outline-[#2f904f] font-normal"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                className="w-full h-10 rounded border border-gray-200 pl-3 text-black outline-[#2f904f] font-normal"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="w-full h-10 rounded border border-gray-200 pl-3 text-black outline-[#2f904f] font-normal"
                                            />
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                className="w-full h-10 rounded border border-gray-200 pl-3 text-black outline-[#2f904f] font-normal"
                                            />
                                            <input
                                                type="password"
                                                placeholder="Confirm password"
                                                className="w-full h-10 rounded border border-gray-200 pl-3 text-black outline-[#2f904f] font-normal"
                                            />
                                        </div>
                                        <button className="w-full h-10 bg-[#2f904f] text-white font-semibold flex items-center justify-center rounded">
                                            CREATE
                                        </button>
                                        <button
                                            className="w-full h-10 bg-[#fff] border border-gray-300 text-black font-semibold flex items-center justify-center rounded"
                                            onClick={handleShowLogin}
                                        >
                                            Already have an account?
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="transition-all duration-300 cursor-pointer hover:text-gray-300">
                        Wishlist
                    </p>
                    <p
                        className="transition-all duration-300 phone:hidden cursor-pointer hover:text-gray-300 flex items-center gap-2 relative"
                        onClick={() => setlanguageDropdown(!languageDropdown)}
                    >
                        English{" "}
                        <FaCaretDown
                            className={`transition-all duration-300 ${
                                languageDropdown ? "rotate-180" : ""
                            }`}
                        />
                        <span
                            className={`w-max h-max py-3 px-6 rounded flex flex-col gap-3 bg-white shadow-md text-black absolute right-[-22px] top-8 toggle-dropdown ${
                                languageDropdown ? " active" : ""
                            }`}
                        >
                            <p className="transition-all duration-300 cursor-pointer hover:text-gray-300">
                                English
                            </p>
                            <p className="transition-all duration-300 cursor-pointer hover:text-gray-300">
                                French
                            </p>
                            <p className="transition-all duration-300 cursor-pointer hover:text-gray-300">
                                Spanish
                            </p>
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default HeaderOne;
