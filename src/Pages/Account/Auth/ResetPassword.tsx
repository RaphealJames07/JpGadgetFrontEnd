import {NavLink} from "react-router-dom";
import logo from "../../../assets/Logo1.png";

const ResetPassword = () => {
    return (
        <>
            <div className="w-full h-screen bg-sky-50 flex flex-col items-center justify-center gap-4">
                <div className="w-max h-max flex flex-col gap-2 items-center">
                    <img src={logo} alt="" className="w-max h-16" />
                    <p className="text-2xl font-semibold text-[#008081]">
                        Welcome To Jp Gadgets
                    </p>
                </div>
                <div className="w-96 h-max bg-[#fff] rounded-md shadow-md border border-gray-300 flex flex-col gap-4 items-center p-4">
                    <p className="text-xl font-semibold text-[#008081] mb-2">
                        Reset Password
                    </p>

                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm">New Password</p>
                        <input
                            type="password"
                            placeholder="alphabets, numbers and special character"
                            className="w-full h-10 rounded border border-gray-300 transition-all duration-500 outline-[#8fbdbd] outline-1 pl-2 text-sm"
                        />
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm">Confirm New Password</p>
                        <input
                            type="password"
                            placeholder="alphabets, numbers and special character"
                            className="w-full h-10 rounded border border-gray-300 transition-all duration-500 outline-[#8fbdbd] outline-1 pl-2 text-sm"
                        />
                    </div>

                    <button className="w-full h-10 bg-[#008081] rounded text-white font-semibold ">
                        SUBMIT
                    </button>
                    <div className="w-full h-max flex justify-center text-sm">
                        <NavLink to={"/register"}>
                            <span className="text-blue-600 font-semibold cursor-pointer">
                                Login
                            </span>
                        </NavLink>
                    </div>
                    <div className="text-xs">
                        All rights reserved &copy; 2024 |{" "}
                        <span className="text-blue-600 font-semibold cursor-pointer">
                            Jp Gadgets{" "}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
