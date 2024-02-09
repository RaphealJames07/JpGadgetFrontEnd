import {useState} from "react";
import image1 from "../assets/Hero2Bg1.webp";
import image2 from "../assets/Hero2Bg2.webp";
import image3 from "../assets/Hero2Bg3.webp";

const SubHero = () => {
    const [hoverA, setHoverA] = useState(false);
    const [hoverB, setHoverB] = useState(false);
    const [hoverC, setHoverC] = useState(false);

    return (
        <>
            <div className="w-full h-80 phone:h-96 p-5 phone:p-3">
                <div className="w-full h-full flex phone:flex-col gap-5">
                    <div
                        className="w-1/3 h-full phone:w-full bg-[#a9d2ab] rounded-md relative"
                        onMouseEnter={() => setHoverA(true)}
                        onMouseLeave={() => setHoverA(false)}
                    >
                        <img
                            src={image1}
                            alt=""
                            className={`w-full h-full ${
                                hoverA
                                    ? " scale-[1.03] transition-all duration-500 ease-in-out"
                                    : " scale-100 transition-all duration-500 ease-in-out"
                            }
                             object-cover rounded-md`}
                        />
                        <div className="w-max h-max absolute left-8 top-10 flex flex-col gap-3">
                            <p className="text-2xl phone:text-xl font-normal tracking-widest">
                                AUDIO
                            </p>
                            <p className="text-5xl phone:text-2xl font-bold">
                                Speaker
                            </p>
                            <p className="w-[60%] text-sm phone:hidden">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <p className="underline underline-offset-4 cursor-pointer">
                                SHOP NOW
                            </p>
                        </div>
                    </div>
                    <div
                        className="w-1/3 h-full phone:w-full bg-[#cac0ef] rounded-md relative"
                        onMouseEnter={() => setHoverB(true)}
                        onMouseLeave={() => setHoverB(false)}
                    >
                        <img
                            src={image2}
                            alt=""
                            className={`w-full h-full ${
                                hoverB
                                    ? " scale-[1.03] transition-all duration-500 ease-in-out"
                                    : " scale-100 transition-all duration-500 ease-in-out"
                            }
                           object-cover rounded-md`}
                        />
                        <div className="w-max h-max absolute left-8 top-10 flex flex-col gap-3">
                            <p className="text-2xl phone:text-xl font-normal tracking-widest">
                                AUDIO
                            </p>
                            <p className="text-5xl phone:text-2xl font-bold">
                                Speaker
                            </p>
                            <p className="w-[60%] text-sm phone:hidden">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <p className="underline underline-offset-4 cursor-pointer">
                                SHOP NOW
                            </p>
                        </div>
                    </div>
                    <div
                        className="w-1/3 h-full phone:w-full bg-[#ff915a] rounded-md relative"
                        onMouseEnter={() => setHoverC(true)}
                        onMouseLeave={() => setHoverC(false)}
                    >
                        <img
                            src={image3}
                            alt=""
                            className={`w-full h-full ${
                                hoverC
                                    ? " scale-[1.03] transition-all duration-500 ease-in-out"
                                    : " scale-100 transition-all duration-500 ease-in-out"
                            }
                           object-cover rounded-md`}
                        />
                        <div className="w-max h-max absolute left-8 top-10 flex flex-col gap-3">
                            <p className="text-2xl phone:text-xl font-normal tracking-widest">
                                AUDIO
                            </p>
                            <p className="text-5xl phone:text-2xl font-bold">
                                Speaker
                            </p>
                            <p className="w-[60%] text-sm phone:hidden">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                            <p className="underline underline-offset-4 cursor-pointer">
                                SHOP NOW
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubHero;
