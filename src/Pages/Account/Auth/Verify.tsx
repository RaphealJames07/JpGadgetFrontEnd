import {useRef, useState} from "react";
// import "./Verify.css";
import {Modal} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import {useNavigate, useParams} from "react-router";
import logo from "../../../assets/Logo1.png";

const Verify = () => {
    const nav = useNavigate();
    const inputRefs: React.RefObject<HTMLInputElement>[] = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const [modalVisible, setModalVisible] = useState(false);

    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");
    const [inputValue5, setInputValue5] = useState("");

    const focusNextInput = (currentIndex: number) => {
        const nextInputRef = inputRefs[currentIndex + 1];
        if (nextInputRef && nextInputRef.current) {
            nextInputRef.current.focus();
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        currentIndex: number
    ) => {
        const {value} = e.target as HTMLInputElement;

        if (!/^[0-9]+$/.test(value)) {
            showModal();
            return;
        }

        if (currentIndex === 0) {
            setInputValue1(value);
        } else if (currentIndex === 1) {
            setInputValue2(value);
        } else if (currentIndex === 2) {
            setInputValue3(value);
        } else if (currentIndex === 3) {
            setInputValue4(value);
        } else if (currentIndex === 4) {
            setInputValue5(value);
            setInputErr(false);
        }

        if (value && currentIndex < inputRefs.length - 1) {
            focusNextInput(currentIndex);
        }
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const handlePaste = (e: any) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData("text");

        if (/^\d{5}$/.test(pastedText)) {
            const digits = pastedText.split("");

            inputRefs.forEach((inputRef: any, index: number) => {
                if (index < digits.length) {
                    inputRef.current.value = digits[index];

                    if (index === 0) {
                        setInputValue1(digits[index]);
                    } else if (index === 1) {
                        setInputValue2(digits[index]);
                    } else if (index === 2) {
                        setInputValue3(digits[index]);
                    } else if (index === 3) {
                        setInputValue4(digits[index]);
                    } else if (index === 4) {
                        setInputValue5(digits[index]);
                        setInputErr(false);
                    }
                }
            });

            if (digits.length > 0) {
                focusNextInput(digits.length - 1);
            }
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        currentIndex: number
    ) => {
        if (e.key === "Backspace") {
            e.preventDefault();

            const prevInputRef = inputRefs[currentIndex - 1];
            const currentInputRef = inputRefs[currentIndex];

            if (prevInputRef && prevInputRef.current) {
                prevInputRef.current.focus();
            } else if (currentInputRef && currentInputRef.current) {
                currentInputRef.current.focus();
            }

            if (currentInputRef && currentInputRef.current) {
                currentInputRef.current.value = "";
            }

            switch (currentIndex) {
                case 0:
                    setInputValue1("");
                    setInputErr(true);
                    break;
                case 1:
                    setInputValue2("");
                    setInputErr(true);
                    break;
                case 2:
                    setInputValue3("");
                    setInputErr(true);
                    break;
                case 3:
                    setInputValue4("");
                    setInputErr(true);
                    break;
                case 4:
                    setInputValue5("");
                    setInputErr(true);
                    break;
                default:
                    break;
            }
        }
    };

    const otp = `${inputValue1}${inputValue2}${inputValue3}${inputValue4}${inputValue5}`;

    const [loading, setLoading] = useState<boolean>(false);
    console.log(setLoading);
    const [inputErr, setInputErr] = useState<boolean>(true);
    const {token} = useParams();
    const {email} = useParams();
    console.log(token);
    const data = {otp};
    const url = ``;
    console.log(data, url, email);

    const HandleVerify = () => {};

    const handleBackTo = () => {
        nav("/login");
    };

    const testEmail = "test@gmail.com";

    function hideEmail(testEmail: string) {
        const [username, domain] = testEmail.split("@");
        const hiddenUsername =
            username.slice(0, 2) + "*".repeat(username.length - 2);
        const maskedEmail = `${hiddenUsername}@${domain}`;
        return maskedEmail;
    }

    const maskedEmail = hideEmail(testEmail);

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
                    <h1 className="text-2xl phone:w-full phone:text-center">
                        Verify
                    </h1>
                    <p className="text-center text-sm ">
                        Enter code sent to {maskedEmail}
                    </p>
                    <div
                        style={{display: "flex", fontSize: "30px"}}
                        className="w-max h-max flex gap-2 "
                        onPaste={handlePaste}
                    >
                        {inputRefs.map((inputRef: any, index: number) => (
                            <input
                                className="text-base w-8 text-center h-9 rounded outline-none shadow-md border border-gray-200"
                                key={index}
                                type="text"
                                maxLength={1}
                                ref={inputRef}
                                onChange={(e) => handleInputChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onInput={(e: any) => {
                                    const newValue = e.target.value.replace(
                                        /\D/g,
                                        ""
                                    );
                                    e.target.value = newValue;
                                    handleInputChange(e, index);
                                }}
                            />
                        ))}
                    </div>
                    <button
                        className="bg-[#008081] w-40 h-10 rounded text-white text-base cursor-pointer border-none disabled:bg-[#7dcdcd] disabled:cursor-not-allowed"
                        onClick={() => HandleVerify}
                        disabled={inputErr}
                    >
                        {loading ? (
                            <LoadingOutlined
                                style={{
                                    fontSize: 24,
                                }}
                                spin
                            />
                        ) : (
                            "Verify"
                        )}
                    </button>
                    <p className="text-center">
                        it may take a minute to receive your code, haven
                        {"'"}t received it?{" "}
                        <span
                            style={{
                                color: "#3F51B5",
                                cursor: "pointer",
                            }}
                        >
                            Resend a new code.
                        </span>
                    </p>

                    <div className="w-full flex items-center justify-center h-[10%]">
                        <button
                            onClick={handleBackTo}
                            className="w-32 h-10 rounded-md cursor-pointer text-sm bg-none border-2 border-solid border-[#008081]"
                        >
                            Back to Login
                        </button>
                    </div>
                </div>
            </div>
            <Modal
                title="Invalid Input"
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                The code sent to your email should contain 4 digit numbers only.
                No alphabets or special characters are allowed. Please check and
                try again.
            </Modal>
        </>
    );
};

export default Verify;
