import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import aboutUsHero1 from "../../assets/aboutUsHero.jpg";
import aboutUsHero2 from "../../assets/aboutusHero2.jpg";
import aboutUsHero3 from "../../assets/aboutUsHero3.jpg";

const AboutUsCarousel = () => {
    const owlOptions = {
        loop: true,
        autoWidth: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        mergeFit: true,
        stagePadding: 0,
        autoplaySpeed: 1000,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navSpeed: 1000,
        dots: false,
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
                <div className="item w-full h-[40vh]">
                    <div className="w-full h-full flex items-center justify-center ">
                        <img
                            src={aboutUsHero1}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="item w-full h-[40vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <img
                            src={aboutUsHero2}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="item w-full h-[40vh]  ">
                    <div className="w-full h-full flex items-center justify-center ">
                        <img
                            src={aboutUsHero3}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default AboutUsCarousel;
