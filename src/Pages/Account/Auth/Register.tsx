import {NavLink} from "react-router-dom";
import logo from "../../../assets/Logo1.png";

const Register = () => {
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
                        Register
                    </p>
                    <div className="w-full h-max flex gap-4">
                        <div className="w-1/2 h-max flex flex-col gap-1">
                            <p className="text-sm">First Name</p>
                            <input
                                type="text"
                                placeholder="John"
                                className="w-full h-10 rounded border border-gray-300 transition-all duration-500 outline-[#8fbdbd] outline-1 pl-2 text-sm"
                            />
                        </div>
                        <div className="w-1/2 h-max flex flex-col gap-1">
                            <p className="text-sm">Last Name</p>
                            <input
                                type="text"
                                placeholder="John"
                                className="w-full h-10 rounded border border-gray-300 transition-all duration-500 outline-[#8fbdbd] outline-1 pl-2 text-sm"
                            />
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm">Email</p>
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            className="w-full h-10 rounded border border-gray-300 transition-all duration-500 outline-[#8fbdbd] outline-1 pl-2 text-sm"
                        />
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm">Password</p>
                        <input
                            type="password"
                            placeholder="alphabets, numbers and special character"
                            className="w-full h-10 rounded border border-gray-300 transition-all duration-500 outline-[#8fbdbd] outline-1 pl-2 text-sm"
                        />
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm">Confirm Password</p>
                        <input
                            type="password"
                            placeholder="alphabets, numbers and special character"
                            className="w-full h-10 rounded border border-gray-300 transition-all duration-500 outline-[#8fbdbd] outline-1 pl-2 text-sm"
                        />
                    </div>
                    <button className="w-full h-10 bg-[#008081] rounded text-white font-semibold ">
                        REGISTER
                    </button>
                    <div className="w-full h-max flex justify-between text-sm">
                        <p>
                            Have an account?
                            <NavLink to={"/login"}>
                                <span className="text-blue-600 font-semibold cursor-pointer">
                                    Login
                                </span>
                            </NavLink>
                        </p>
                    </div>
                    <div className="text-xs">
                        All rights reserved &copy; 2024 |
                        <span className="text-blue-600 font-semibold cursor-pointer">
                            Jp Gadgets
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
