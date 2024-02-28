import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const LaptopCarousel = () => {
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
                        <div className="laptopColBg1">
                            <div className="w-full h-full bg-[#00000089] flex items-center justify-center flex-col gap-5 text-white">
                                <p className="text-5xl ">HP </p>
                                <p className="w-[90%] text-center items-center justify-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Minima autem error vitae
                                    atque, natus commodi velit earum dicta
                                    sapiente eius odit ad nemo porro beatae
                                    ducimus accusantium placeat laudantium
                                    quasi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[70vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="laptopColBg2">
                            <div className="w-full h-full bg-[#00000089] flex items-center justify-center flex-col gap-5 text-white">
                                <p className="text-5xl">DELL</p>
                                <p className="w-[90%] text-center items-center justify-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Minima autem error vitae
                                    atque, natus commodi velit earum dicta
                                    sapiente eius odit ad nemo porro beatae
                                    ducimus accusantium placeat laudantium
                                    quasi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[70vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="laptopColBg3">
                            <div className="w-full h-full bg-[#00000089] flex items-center justify-center flex-col gap-5 text-white">
                                <p className="text-5xl">LENOVO</p>
                                <p className="w-[90%] text-center items-center justify-center">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Minima autem error vitae
                                    atque, natus commodi velit earum dicta
                                    sapiente eius odit ad nemo porro beatae
                                    ducimus accusantium placeat laudantium
                                    quasi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default LaptopCarousel;
