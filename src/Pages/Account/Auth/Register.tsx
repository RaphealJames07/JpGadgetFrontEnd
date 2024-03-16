import {NavLink} from "react-router-dom";
import logo from "../../../assets/Logo1.png";
import {useState} from "react";
import axios from "axios";
import {IoEye, IoEyeOff} from "react-icons/io5";
import {toast} from "react-hot-toast";
import {SpinnerCircular} from "spinners-react";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [showPwd, setShowPwd] = useState<boolean>(false);
    const [showCPwd, setShowCPwd] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [trackErr, setTrackErr] = useState<string>("");
    const navigate = useNavigate();

    const handleRegister = (e: any) => {
        e.preventDefault();
        if (!firstName) {
            toast.error("First name is required!");
            setTrackErr("firstName");
        } else if (!lastName) {
            toast.error("Last name is required!");
            setTrackErr("lastName");
        } else if (!email) {
            toast.error("email is required");
            setTrackErr("email");
        } else if (!email.includes("@")) {
            toast.error("email must include @");
            setTrackErr("email");
        } else if (!password) {
            toast.error("password is required");
            setTrackErr("password");
        } else if (!confirmPassword) {
            toast.error("Confirm password is required");
            setTrackErr("confirmPassword");
        } else if (password !== confirmPassword) {
            toast.error("Password does not match");
            setTrackErr("confirmPassword");
        } else if (password.length < 7) {
            toast.error("Your Password should be at least 8 characters long");
            setTrackErr("confirmPassword");
        } else {
            setLoading(true);
            const loadingId = toast.loading("Registering...");
            const url = "https://jp-gadget.onrender.com/api/v1/user/sign-up";
            const data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            };
            axios
                .post(url, data)
                .then((response) => {
                    console.log(response);
                    setLoading(false);
                    toast.dismiss(loadingId);
                    toast.success(response?.data?.message);
                    localStorage.setItem(
                        "jpGadgetVerifyToken",
                        response?.data?.data?.token
                    );
                    localStorage.setItem(
                        "jpGadgetVerifyEmail",
                        response?.data?.data?.email
                    );
                    setTimeout(() => {
                        handleSendEmail();
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error);
                    toast.dismiss(loadingId);
                    toast.error(error?.response?.data?.message);
                    setLoading(false);
                });
        }
    };

    const handleSendEmail = () => {
        const loadingId = toast.loading("Sending mail...");
        const url = "https://jp-gadget.onrender.com/api/v1/user/sign-up-mail";
        const verifyEmail = localStorage.getItem("jpGadgetVerifyEmail")
        const verifyToken = localStorage.getItem("jpGadgetVerifyToken")
        const data = {
            email: email,
        };
        axios
            .post(url, data)
            .then((response) => {
                console.log(response);
                toast.dismiss(loadingId);
                toast.success(
                    `${response?.data?.message}, check your mail for verification`,
                    {duration: 5000}
                );
                setTimeout(() => {
                    navigate(`/verify/${verifyEmail}/${verifyToken}`);
                }, 5000);
            })
            .catch((error) => {
                console.log(error);
                toast.dismiss(loadingId);
                toast.error(error?.response?.data?.message);
            });
    };

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
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                    setTrackErr("");
                                }}
                                type="text"
                                placeholder="John"
                                className={`w-full h-10 rounded border-2  ${
                                    trackErr === "firstName"
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } transition-all duration-500 outline-[#8fbdbd] outline-1 pl-2 text-sm`}
                            />
                        </div>
                        <div className="w-1/2 h-max flex flex-col gap-1">
                            <p className="text-sm">Last Name</p>
                            <input
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                    setTrackErr("");
                                }}
                                type="text"
                                placeholder="John"
                                className={`w-full h-10 rounded border-2  ${
                                    trackErr === "lastName"
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } transition-all duration-500 outline-[#8fbdbd] outline-1 pl-2 text-sm`}
                            />
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm">Email</p>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setTrackErr("");
                            }}
                            type="email"
                            placeholder="example@mail.com"
                            className={`w-full h-10 rounded border-2  ${
                                trackErr === "email"
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } transition-all duration-500 outline-[#8fbdbd] outline-1 pl-2 text-sm`}
                        />
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm">Password</p>
                        <div
                            className={`w-full h-10 rounded border-2  ${
                                trackErr === "password"
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } transition-all duration-500 outline-[#8fbdbd] outline-1  text-sm flex items-center`}
                        >
                            <input
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setTrackErr("");
                                }}
                                type={`${showPwd ? "test" : "password"}`}
                                placeholder="alphabets, numbers and special character"
                                className="w-[90%] h-full border-none outline-none pl-2"
                            />
                            {showPwd ? (
                                <IoEye
                                    className="cursor-pointer w-5 h-5 flex items-center justify-center"
                                    onClick={() => setShowPwd(!showPwd)}
                                />
                            ) : (
                                <IoEyeOff
                                    className="cursor-pointer w-5 h-5 flex items-center justify-center"
                                    onClick={() => setShowPwd(!showPwd)}
                                />
                            )}
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col gap-1">
                        <p className="text-sm">Confirm Password</p>
                        <div
                            className={`w-full h-10 rounded border-2  ${
                                trackErr === "confirmPassword"
                                    ? "border-red-500"
                                    : "border-gray-300"
                            } transition-all duration-500 outline-[#8fbdbd] outline-1  text-sm flex items-center`}
                        >
                            <input
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setTrackErr("");
                                }}
                                type={`${showCPwd ? "test" : "password"}`}
                                placeholder="alphabets, numbers and special character"
                                className="w-[90%] h-full border-none outline-none pl-2"
                            />
                            {showCPwd ? (
                                <IoEye
                                    className="cursor-pointer w-5 h-5 flex items-center justify-center"
                                    onClick={() => setShowCPwd(!showCPwd)}
                                />
                            ) : (
                                <IoEyeOff
                                    className="cursor-pointer w-5 h-5 flex items-center justify-center"
                                    onClick={() => setShowCPwd(!showCPwd)}
                                />
                            )}
                        </div>
                    </div>
                    <button
                        className="w-full h-10 bg-[#008081] rounded text-white font-semibold disabled:bg-[#669c9c] disabled:cursor-not-allowed flex items-center justify-center"
                        disabled={loading}
                        onClick={handleRegister}
                    >
                        {loading ? (
                            <SpinnerCircular size={25} color="white" />
                        ) : (
                            "REGISTER"
                        )}
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
