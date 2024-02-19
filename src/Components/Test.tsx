import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Fade} from "react-awesome-reveal";

const Test = () => {
    
    const owlOptions = {
        loop: true,
        autoWidth: false,
        items: 1,
        autoplay: true,
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
            <OwlCarousel {...owlOptions} className="w-full " >
                <div className="item w-full h-[80vh] ">
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
                <div className="item w-full h-[80vh] ">
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
                <div className="item w-full h-[80vh] ">
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
                <div className="item w-full h-[80vh] ">
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
