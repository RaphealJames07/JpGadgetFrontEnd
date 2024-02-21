// import React, {useState, useEffect} from "react";
// import {Fade} from "react-awesome-reveal";
// import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

// const HeroCarousel: React.FC = () => {
//     const [transformValue, setTransformValue] = useState<number>(0);
//     const [activeIndex, setActiveIndex] = useState<number>(0);

//     useEffect(() => {
//         const updateTransform = () => {
//             setTransformValue((prevTransform) =>
//                 prevTransform <= -300 ? 0 : prevTransform - 100
//             );
//         };

//         const intervalId = setInterval(updateTransform, 5000);

//         return () => clearInterval(intervalId);
//     }, [transformValue]);

//     const handlePrevClick = () => {
//         setTransformValue((prevTransform) =>
//             prevTransform >= 0 ? -300 : prevTransform + 100
//         );
//     };

//     const handleNextClick = () => {
//         setTransformValue((prevTransform) =>
//             prevTransform <= -300 ? 0 : prevTransform - 100
//         );
//     };

//     const handleDotClick = (index: number) => {
//         setActiveIndex(index);
//         setTransformValue(-index * 100);
//     };

//     return (
//         <div className="w-full h-[100%] bg-sky-100 flex justify-between items-center reassurance-list owl-carousel owl-theme owl-loaded owl-drag rounded relative">
//             <button
//                 className="w-10 h-10 phone:w-7 phone:h-7 absolute left-5 phone:left-2 top-[40%] rounded bg-[#008081] text-white z-20 flex items-center justify-center"
//                 onClick={handlePrevClick}
//             >
//                 <FaAngleLeft className="w-7 h-7 phone:w-4 phone:h-4" />
//             </button>
//             <button
//                 className="w-10 h-10 phone:w-7 phone:h-7 absolute right-5 phone:right-2 top-[40%] rounded bg-[#008081] text-white z-20 flex items-center justify-center"
//                 onClick={handleNextClick}
//             >
//                 <FaAngleRight className="w-7 h-7 phone:w-4 phone:h-4" />
//             </button>
//             <div className="w-max h-max phone:hidden flex items-center gap-3 absolute left-[50%] bottom-5 z-20">
//                 {[0, 1, 2, 3].map((index) => (
//                     <span
//                         key={index}
//                         className={`w-4 h-4 cursor-pointer rounded-full border ${
//                             activeIndex === index
//                                 ? "bg-green-900"
//                                 : "border-green-900"
//                         }`}
//                         onClick={() => handleDotClick(index)}
//                     ></span>
//                 ))}
//             </div>
//             <div className="owl-stage-outer relative overflow-hidden translate-x-0 translate-y-0 translate-z-0 w-full h-full flex items-center ">
//                 <div
//                     className="owl-stage transition-all duration-700 relative touch-manipulation w-[400vw] h-full flex "
//                     style={{
//                         transform: `translate3d(${transformValue}vw, 0vw, 0vw)`,
//                     }}
//                 >
//                     <div className="w-[100vw] flex gap-2 h-full items-center phone:mr-0 owl-item ">
//                         <div className="heroBg1 heroBg1B phone:flex-col flex items-center">
//                             <div className="w-1/2 phone:w-full h-max phone:h-full  flex justify-center ">
//                                 <div className="w-[60%] phone:w-full h-max phone:h-full flex phone:justify-end phone:items-center flex-col gap-4 phone:gap-2 phone:p-2">
//                                     <Fade
//                                         cascade
//                                         direction="left"
//                                         damping={0.1}
//                                     >
//                                         <p className="text-6xl phone:text-3xl font-bold">
//                                             Headphone
//                                         </p>
//                                         <p className="text-[#008081] text-3xl phone:text-lg font-semibold phone:font-normal">
//                                             Wireless Premium Sound
//                                         </p>
//                                         <p className="phone:hidden">
//                                             Surround sound experience, noise
//                                             reduction, Noise cancellation! Extra
//                                             base & Sound
//                                         </p>
//                                     </Fade>
//                                     <button className="w-max h-max bg-[#008081] text-white px-6 py-3 rounded">
//                                         SHOP NOW
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="w-1/2 h-max flex justify-center"></div>
//                         </div>
//                     </div>
//                     <div className="w-[100vw] flex gap-2 h-full items-center phone:mr-0 owl-item">
//                         <div className="heroBg2 heroBg2B phone:flex-col flex items-center">
//                             <div className="w-1/2 h-max flex justify-center"></div>
//                             <div className="w-1/2 phone:w-full h-max phone:h-full  flex justify-center ">
//                                 <div className="w-[60%] phone:w-full h-max phone:h-full flex phone:justify-end phone:items-center flex-col gap-4 phone:gap-2 phone:p-2">
//                                     <Fade
//                                         cascade
//                                         damping={0.1}
//                                         direction="right"
//                                     >
//                                         <p className="text-6xl phone:text-3xl font-bold">
//                                             Apple Products
//                                         </p>
//                                         <p className="text-[#008081] text-3xl phone:text-lg font-semibold phone:font-normal">
//                                             Phones and Watches and more...
//                                         </p>
//                                         <p className="phone:hidden">
//                                             Get more from the Apple Ecosystem
//                                             and exclusive deals on Apple
//                                             procudts
//                                         </p>
//                                     </Fade>
//                                     <button className="w-max h-max bg-[#008081] text-white px-6 py-3 rounded">
//                                         SHOP NOW
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-[100vw] flex gap-2 h-full items-center phone:mr-0 owl-item">
//                         <div className="heroBg3 heroBg3B phone:flex-col flex items-center">
//                             <div className="w-1/2 h-max flex justify-center"></div>
//                             <div className="w-1/2 phone:w-full h-max phone:h-full  flex justify-center ">
//                                 <div className="w-[60%] phone:w-full h-max phone:h-full flex phone:justify-end phone:items-center flex-col gap-4 phone:gap-2 phone:p-2">
//                                     <Fade
//                                         cascade
//                                         damping={0.1}
//                                         direction="right"
//                                     >
//                                         <p className="text-6xl phone:text-3xl font-bold">
//                                             Laptops
//                                         </p>
//                                         <p className="text-[#008081] text-3xl phone:text-lg font-semibold phone:font-normal">
//                                             Quality at its best.
//                                         </p>
//                                         <p className="phone:hidden">
//                                             Our laptops are built to last, with
//                                             powerful processors, high resolution
//                                             screens, and long battery life.
//                                         </p>
//                                     </Fade>
//                                     <button className="w-max h-max bg-[#008081] text-white px-6 py-3 rounded">
//                                         SHOP NOW
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-[100vw] flex gap-2 h-full items-center phone:mr-0 owl-item">
//                         <div className="heroBg4 heroBg4B phone:flex-col flex items-center">
//                             <div className="w-1/2 h-max flex justify-center"></div>
//                             <div className="w-1/2 phone:w-full h-max phone:h-full  flex justify-center ">
//                                 <div className="w-[60%] phone:w-full h-max phone:h-full flex phone:justify-end phone:items-center flex-col gap-4 phone:gap-2 phone:p-2">
//                                     <Fade
//                                         cascade
//                                         damping={0.1}
//                                         direction="right"
//                                     >
//                                         <p className="text-6xl phone:text-3xl font-bold">
//                                             Airpods
//                                         </p>
//                                         <p className="text-[#008081] text-3xl phone:text-lg font-semibold phone:font-normal">
//                                             The future of audio is here.
//                                         </p>
//                                         <p className="phone:hidden">
//                                             Experience the sound of tomorrow
//                                             today. With our newest range of
//                                             AirPods, you can enjoy 5x more music
//                                             in one day than ever before.
//                                         </p>
//                                     </Fade>
//                                     <button className="w-max h-max bg-[#008081] text-white px-6 py-3 rounded">
//                                         SHOP NOW
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroCarousel;

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Fade} from "react-awesome-reveal";

const Test = () => {
    const owlOptions = {
        loop: true,
        autoWidth: false,
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        mergeFit: true,
        stagePadding: 0,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        dots: true,
        margin: 0,
        nav: true,
        // responsive: {
        //     0: {
        //         items: 1,
        //     },
        //     600: {
        //         items: 3,
        //     },
        //     1000: {
        //         items: 1,
        //     },
        // },
    };

    return (
        <div className="relative">
            <OwlCarousel {...owlOptions} className="w-full ">
                <div className="item w-full h-[80vh] phone:h-[50vh] ">
                    <div className="w-full h-full bg-sky-200">
                        <div className="heroBg1 heroBg1B phone:flex-col flex items-center w-full">
                            <div className="w-1/2 phone:w-full h-max phone:h-full  flex justify-center ">
                                <div className="w-[60%] phone:w-full h-max phone:h-full flex phone:justify-end phone:items-center flex-col gap-4 phone:gap-2 phone:p-2">
                                    <Fade
                                        cascade
                                        direction="left"
                                        damping={0.1}
                                    >
                                        <p className="text-6xl phone:text-3xl font-bold">
                                            Headphone
                                        </p>
                                        <p className="text-[#008081] text-3xl phone:text-lg font-semibold phone:font-normal">
                                            Wireless Premium Sound
                                        </p>
                                        <p className="phone:hidden">
                                            Surround sound experience, noise
                                            reduction, Noise cancellation! Extra
                                            base & Sound
                                        </p>
                                    </Fade>
                                    <button className="w-max h-max bg-[#008081] text-white px-6 py-3 rounded">
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/2 h-max flex justify-center"></div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[80vh] phone:h-[50vh] ">
                    <div className="w-full h-full bg-red-200">
                        <div className="heroBg2 heroBg2B phone:flex-col flex items-center">
                            <div className="w-1/2 h-max flex justify-center"></div>
                            <div className="w-1/2 phone:w-full h-max phone:h-full  flex justify-center ">
                                <div className="w-[60%] phone:w-full h-max phone:h-full flex phone:justify-end phone:items-center flex-col gap-4 phone:gap-2 phone:p-2">
                                    <Fade
                                        cascade
                                        damping={0.1}
                                        direction="right"
                                    >
                                        <p className="text-6xl phone:text-3xl font-bold">
                                            Apple Products
                                        </p>
                                        <p className="text-[#008081] text-3xl phone:text-lg font-semibold phone:font-normal">
                                            Phones and Watches and more...
                                        </p>
                                        <p className="phone:hidden">
                                            Get more from the Apple Ecosystem
                                            and exclusive deals on Apple
                                            procudts
                                        </p>
                                    </Fade>
                                    <button className="w-max h-max bg-[#008081] text-white px-6 py-3 rounded">
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[80vh] phone:h-[50vh] ">
                    <div className="w-full h-full bg-green-200">
                        <div className="heroBg3 heroBg3B phone:flex-col flex items-center">
                            <div className="w-1/2 h-max flex justify-center"></div>
                            <div className="w-1/2 phone:w-full h-max phone:h-full  flex justify-center ">
                                <div className="w-[60%] phone:w-full h-max phone:h-full flex phone:justify-end phone:items-center flex-col gap-4 phone:gap-2 phone:p-2">
                                    <Fade
                                        cascade
                                        damping={0.1}
                                        direction="right"
                                    >
                                        <p className="text-6xl phone:text-3xl font-bold">
                                            Laptops
                                        </p>
                                        <p className="text-[#008081] text-3xl phone:text-lg font-semibold phone:font-normal">
                                            Quality at its best.
                                        </p>
                                        <p className="phone:hidden">
                                            Our laptops are built to last, with
                                            powerful processors, high resolution
                                            screens, and long battery life.
                                        </p>
                                    </Fade>
                                    <button className="w-max h-max bg-[#008081] text-white px-6 py-3 rounded">
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[80vh] phone:h-[50vh] ">
                    <div className="w-full h-full bg-yellow-200">
                        <div className="heroBg4 heroBg4B phone:flex-col flex items-center">
                            <div className="w-1/2 h-max flex justify-center"></div>
                            <div className="w-1/2 phone:w-full h-max phone:h-full  flex justify-center ">
                                <div className="w-[60%] phone:w-full h-max phone:h-full flex phone:justify-end phone:items-center flex-col gap-4 phone:gap-2 phone:p-2">
                                    <Fade
                                        cascade
                                        damping={0.1}
                                        direction="right"
                                    >
                                        <p className="text-6xl phone:text-3xl font-bold">
                                            Airpods
                                        </p>
                                        <p className="text-[#008081] text-3xl phone:text-lg font-semibold phone:font-normal">
                                            The future of audio is here.
                                        </p>
                                        <p className="phone:hidden">
                                            Experience the sound of tomorrow
                                            today. With our newest range of
                                            AirPods, you can enjoy 5x more music
                                            in one day than ever before.
                                        </p>
                                    </Fade>
                                    <button className="w-max h-max bg-[#008081] text-white px-6 py-3 rounded">
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Test;
