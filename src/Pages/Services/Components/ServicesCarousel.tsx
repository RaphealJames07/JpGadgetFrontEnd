import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ServicesCarousel = () => {
    const owlOptions = {
        loop: true,
        autoWidth: false,
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        mergeFit: true,
        stagePadding: 0,
        autoplaySpeed: 1000,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navSpeed: 1000,
        dots: true,
        margin: 0,
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
                <div className="item w-full h-[60vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="servicesDelBg w-full h-full flex items-center justify-center">
                            <div className="w-full h-full bg-[#ffffff67] flex items-center justify-center flex-col gap-5 text-[#128889]">
                                <p className="text-5xl font-semibold">
                                    Efficient Delivery
                                </p>
                                <p className="text-lg font-semibold text-center">
                                    Swift and reliable delivery service ensuring
                                    your orders reach you on time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[60vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="servicesChatBg w-full h-full flex items-center justify-center">
                            <div className="w-full h-full bg-[#ffffff67] flex items-center justify-center flex-col gap-5 text-[#128889]">
                                <p className="text-5xl font-semibold">
                                    Live Chat Support
                                </p>
                                <p className="text-lg font-semibold text-center">
                                    Instant assistance via live chat for any
                                    queries or concerns you may have.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[60vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="servicesPayBg w-full h-full flex items-center justify-center">
                            <div className="w-full h-full bg-[#ffffff67] flex items-center justify-center flex-col gap-5 text-[#128889]">
                                <p className="text-5xl font-semibold">
                                    Easy Payment
                                </p>
                                <p className="text-lg font-semibold text-center">
                                    Simplified payment process for hassle-free
                                    transactions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[60vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="servicesOfferBg w-full h-full flex items-center justify-center">
                            <div className="w-full h-full bg-[#ffffff67] flex items-center justify-center flex-col gap-5 text-[#128889]">
                                <p className="text-5xl font-semibold">
                                    Best Offer
                                </p>
                                <p className="text-lg font-semibold text-center">
                                    Exclusive discounts and deals offering great
                                    savings on your purchases.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[60vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="servicesReturnBg w-full h-full flex items-center justify-center">
                            <div className="w-full h-full bg-[#ffffff67] flex items-center justify-center flex-col gap-5 text-[#128889]">
                                <p className="text-5xl font-semibold">
                                    Return Policy
                                </p>
                                <p className="text-lg font-semibold text-center">
                                    Flexible return policy for easy product
                                    returns and exchanges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[60vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="servicesHybBg w-full h-full flex items-center justify-center">
                            <div className="w-full h-full bg-[#ffffff67] flex items-center justify-center flex-col gap-5 text-[#128889]">
                                <p className="text-5xl font-semibold">
                                    Hybrid Shopping
                                </p>
                                <p className="text-lg font-semibold text-center">
                                    Seamlessly switch between online and
                                    in-store shopping for convenience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[60vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="servicesTrackBg w-full h-full flex items-center justify-center">
                            <div className="w-full h-full bg-[#ffffff67] flex items-center justify-center flex-col gap-5 text-[#128889]">
                                <p className="text-5xl font-semibold">
                                    Order Tracker
                                </p>
                                <p className="text-lg font-semibold text-center">
                                    Track the status of your orders in real-time
                                    for complete transparency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item w-full h-[60vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <div className="servicesPromoBg w-full h-full flex items-center justify-center">
                            <div className="w-full h-full bg-[#ffffff67] flex items-center justify-center flex-col gap-5 text-[#128889]">
                                <p className="text-5xl font-semibold">
                                    Cashback and Promo
                                </p>
                                <p className="text-lg font-semibold text-center">
                                    Enjoy cashback rewards and promotional
                                    offers on eligible purchases.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default ServicesCarousel;
