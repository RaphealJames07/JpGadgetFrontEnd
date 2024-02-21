import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
            <OwlCarousel {...owlOptions} className="w-full ">
                <div className="item w-full h-[50vh]  ">
                    <div className="w-full h-full flex items-center justify-center bg-sky-200">
                        Item 1
                    </div>
                </div>
                <div className="item w-full h-[50vh] ">
                    <div className="w-full h-full flex items-center justify-center bg-red-200">
                        Item 2
                    </div>
                </div>
                <div className="item w-full h-[50vh]  ">
                    <div className="w-full h-full flex items-center justify-center bg-green-200">
                        Item 3
                    </div>
                </div>
                <div className="item w-full h-[50vh]  ">
                    <div className="w-full h-full flex items-center justify-center bg-yellow-200">
                        Item 4
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Test;
