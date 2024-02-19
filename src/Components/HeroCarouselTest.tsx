import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const HeroCarouselTest = () => {
    const owlOptions = {
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: "slideOutUp",
        dots: true,
        margin: 5,
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
        <div className="w-full h-screen">
            <OwlCarousel {...owlOptions} className="w-full h-screen">
                <div className="item w-full h-[80vh]">
                    <div className="w-full h-full bg-sky-200">A</div>
                </div>
                <div className="item w-full h-[80vh]">
                    <div className="w-full h-full bg-red-200">B</div>
                </div>
                <div className="item w-full h-[80vh]">
                    <div className="w-full h-full bg-green-200">C</div>
                </div>
                <div className="item w-full h-[80vh]">
                    <div className="w-full h-full bg-yellow-200">C</div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default HeroCarouselTest;
