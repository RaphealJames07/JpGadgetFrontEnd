import {useState} from "react";
import {FaCaretDown} from "react-icons/fa";

const Faq = () => {
    const [faq1, setFaq1] = useState<boolean>(false);
    const [faq2, setFaq2] = useState<boolean>(false);
    const [faq3, setFaq3] = useState<boolean>(false);
    const [faq4, setFaq4] = useState<boolean>(false);
    const [faq5, setFaq5] = useState<boolean>(false);

    const show1Faq = () => {
        setFaq1(!faq1);
    };
    const show2Faq = () => {
        setFaq2(!faq2);
    };
    const show3Faq = () => {
        setFaq3(!faq3);
    };
    const show4Faq = () => {
        setFaq4(!faq4);
    };
    const show5Faq = () => {
        setFaq5(!faq5);
    };

    return (
        <>
            <div className="w-full h-max flex flex-col gap-5 py-5">
                <p className="text-3xl font-semibold flex items-center justify-center relative h3textBg w-full">
                    FAQs
                </p>
                <div className="w-full h-max flex flex-col px-44 phone:px-5">
                    <div className="w-full h-max flex flex-col border border-gray-300 ">
                        <div
                            className="w-full h-12 bg-slate-100 flex items-center justify-between px-5 cursor-pointer text-[#108383]"
                            onClick={show1Faq}
                        >
                            <p>1. How Long Is Lorem Ipsum</p>
                            <FaCaretDown
                                className={`transition-all duration-300 ${
                                    faq1 ? "-rotate-180" : ""
                                }`}
                            />
                        </div>
                        <div
                            className={`w-full ${
                                faq1
                                    ? "max-h-40 phone:max-h-80 overflow-hidden transition-max-h duration-700 ease-in-out p-5"
                                    : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out opacity-0 "
                            } flex flex-col gap-3 `}
                        >
                            <p>
                                1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptas, quasi? Aliquam,
                                dolor ut a quis, reiciendis nesciunt recusandae
                                eligendi quia facilis consequuntur error
                                excepturi quo at. Necessitatibus, quisquam
                                tempora. Odit.
                            </p>
                            <p>
                                1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptas, quasi? Aliquam,
                                dolor ut a quis, reiciendis nesciunt recusandae
                                eligendi quia facilis consequuntur error
                                excepturi quo at. Necessitatibus, quisquam
                                tempora. Odit.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col border border-gray-300 ">
                        <div
                            className="w-full h-12 bg-slate-100 flex items-center justify-between px-5 cursor-pointer text-[#108383]"
                            onClick={show2Faq}
                        >
                            <p>1. How Long Is Lorem Ipsum</p>
                            <FaCaretDown
                                className={`transition-all duration-300 ${
                                    faq2 ? "-rotate-180" : ""
                                }`}
                            />
                        </div>
                        <div
                            className={`w-full ${
                                faq2
                                    ? "max-h-40 phone:max-h-80 overflow-hidden transition-max-h duration-700 ease-in-out p-5"
                                    : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out opacity-0 "
                            } flex flex-col gap-3 `}
                        >
                            <p>
                                1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptas, quasi? Aliquam,
                                dolor ut a quis, reiciendis nesciunt recusandae
                                eligendi quia facilis consequuntur error
                                excepturi quo at. Necessitatibus, quisquam
                                tempora. Odit.
                            </p>
                            <p>
                                1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptas, quasi? Aliquam,
                                dolor ut a quis, reiciendis nesciunt recusandae
                                eligendi quia facilis consequuntur error
                                excepturi quo at. Necessitatibus, quisquam
                                tempora. Odit.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col border border-gray-300 ">
                        <div
                            className="w-full h-12 bg-slate-100 flex items-center justify-between px-5 cursor-pointer text-[#108383]"
                            onClick={show3Faq}
                        >
                            <p>1. How Long Is Lorem Ipsum</p>
                            <FaCaretDown
                                className={`transition-all duration-300 ${
                                    faq3 ? "-rotate-180" : ""
                                }`}
                            />
                        </div>
                        <div
                            className={`w-full ${
                                faq3
                                    ? "max-h-40 phone:max-h-80 overflow-hidden transition-max-h duration-700 ease-in-out p-5"
                                    : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out opacity-0 "
                            } flex flex-col gap-3 `}
                        >
                            <p>
                                1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptas, quasi? Aliquam,
                                dolor ut a quis, reiciendis nesciunt recusandae
                                eligendi quia facilis consequuntur error
                                excepturi quo at. Necessitatibus, quisquam
                                tempora. Odit.
                            </p>
                            <p>
                                1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptas, quasi? Aliquam,
                                dolor ut a quis, reiciendis nesciunt recusandae
                                eligendi quia facilis consequuntur error
                                excepturi quo at. Necessitatibus, quisquam
                                tempora. Odit.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col border border-gray-300 ">
                        <div
                            className="w-full h-12 bg-slate-100 flex items-center justify-between px-5 cursor-pointer text-[#108383]"
                            onClick={show4Faq}
                        >
                            <p>1. How Long Is Lorem Ipsum</p>
                            <FaCaretDown
                                className={`transition-all duration-300 ${
                                    faq4 ? "-rotate-180" : ""
                                }`}
                            />
                        </div>
                        <div
                            className={`w-full ${
                                faq4
                                    ? "max-h-40 phone:max-h-80 overflow-hidden transition-max-h duration-700 ease-in-out p-5"
                                    : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out opacity-0 "
                            } flex flex-col gap-3 `}
                        >
                            <p>
                                1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptas, quasi? Aliquam,
                                dolor ut a quis, reiciendis nesciunt recusandae
                                eligendi quia facilis consequuntur error
                                excepturi quo at. Necessitatibus, quisquam
                                tempora. Odit.
                            </p>
                            <p>
                                1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptas, quasi? Aliquam,
                                dolor ut a quis, reiciendis nesciunt recusandae
                                eligendi quia facilis consequuntur error
                                excepturi quo at. Necessitatibus, quisquam
                                tempora. Odit.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col border border-gray-300 ">
                        <div
                            className="w-full h-12 bg-slate-100 flex items-center justify-between px-5 cursor-pointer text-[#108383]"
                            onClick={show5Faq}
                        >
                            <p>1. How Long Is Lorem Ipsum</p>
                            <FaCaretDown
                                className={`transition-all duration-300 ${
                                    faq5 ? "-rotate-180" : ""
                                }`}
                            />
                        </div>
                        <div
                            className={`w-full ${
                                faq5
                                    ? "max-h-40 phone:max-h-80 overflow-hidden transition-max-h duration-700 ease-in-out p-5"
                                    : "max-h-0 overflow-hidden transition-max-h duration-700 ease-in-out opacity-0 "
                            } flex flex-col gap-3 `}
                        >
                            <p>
                                1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptas, quasi? Aliquam,
                                dolor ut a quis, reiciendis nesciunt recusandae
                                eligendi quia facilis consequuntur error
                                excepturi quo at. Necessitatibus, quisquam
                                tempora. Odit.
                            </p>
                            <p>
                                1. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptas, quasi? Aliquam,
                                dolor ut a quis, reiciendis nesciunt recusandae
                                eligendi quia facilis consequuntur error
                                excepturi quo at. Necessitatibus, quisquam
                                tempora. Odit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;
