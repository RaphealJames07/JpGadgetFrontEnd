import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const CollCarousel = () => {
    const owlOptions = {
        loop: true,
        autoWidth: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        mergeFit: true,
        stagePadding: 0,
        autoplaySpeed: 1000,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navSpeed: 1000,
        dots: true,
        margin: 0,
        dotContainer: "#testimonialsDot",
        nav: false,
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
                <div className="item w-full h-[70vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="collBg1">
                            <div className="w-full h-full bg-[#00000089] flex items-center justify-center flex-col gap-5 text-white">
                                <p className="text-5xl ">Phones</p>
                                <p className="w-[90%] text-center items-center justify-center">
                                    Explore our wide range of smartphones and
                                    find the perfect match for your needs. Enjoy
                                    top-notch performance, stunning displays,
                                    and innovative features.
                                </p>
                                <button className="w-max h-max px-6 py-2 rounded bg-[#0f807f] text-white">
                                    View Phones
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[70vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="collBg2">
                            <div className="w-full h-full bg-[#00000089] flex items-center justify-center flex-col gap-5 text-white">
                                <p className="text-5xl">Tablets</p>
                                <p className="w-[90%] text-center items-center justify-center">
                                    Discover our collection of tablets, designed
                                    to enhance your productivity and
                                    entertainment experience. Immerse yourself
                                    in stunning visuals and powerful
                                    performance.
                                </p>
                                <button className="w-max h-max px-6 py-2 rounded bg-[#0f807f] text-white">
                                    View Tablets
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[70vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="collBg3">
                            <div className="w-full h-full bg-[#00000089] flex items-center justify-center flex-col gap-5 text-white">
                                <p className="text-5xl">Airpods</p>
                                <p className="w-[90%] text-center items-center justify-center">
                                    Elevate your audio experience with our range
                                    of Airpods. Enjoy crystal-clear sound and
                                    seamless connectivity for an immersive
                                    listening experience.
                                </p>
                                <button className="w-max h-max px-6 py-2 rounded bg-[#0f807f] text-white">
                                    View Airpods
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[70vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="collBg4">
                            <div className="w-full h-full bg-[#00000089] flex items-center justify-center flex-col gap-5 text-white">
                                <p className="text-5xl">Speakers</p>
                                <p className="w-[90%] text-center items-center justify-center">
                                    Immerse yourself in premium sound quality
                                    with our range of speakers. Experience rich,
                                    lifelike audio in any environment.
                                </p>
                                <button className="w-max h-max px-6 py-2 rounded bg-[#0f807f] text-white">
                                    View Speakers
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[70vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="collBg5">
                            <div className="w-full h-full bg-[#00000089] flex items-center justify-center flex-col gap-5 text-white">
                                <p className="text-5xl">Consoles</p>
                                <p className="w-[90%] text-center items-center justify-center">
                                    Dive into the world of gaming with our
                                    cutting-edge consoles. Experience
                                    unparalleled performance and immersive
                                    gameplay like never before.
                                </p>
                                <button className="w-max h-max px-6 py-2 rounded bg-[#0f807f] text-white">
                                    View Consoles
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[70vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="collBg6">
                            <div className="w-full h-full bg-[#00000089] flex items-center justify-center flex-col gap-5 text-white">
                                <p className="text-5xl">Smartwatches</p>
                                <p className="w-[90%] text-center items-center justify-center">
                                    Stay connected and stay active with our
                                    range of smartwatches. Track your fitness
                                    goals, receive notifications, and access
                                    essential apps right from your wrist.
                                </p>
                                <button className="w-max h-max px-6 py-2 rounded bg-[#0f807f] text-white">
                                    View Smartwatches
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default CollCarousel;
