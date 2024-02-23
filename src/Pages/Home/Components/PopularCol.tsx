import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import cat1 from "../../../assets/Category-1.png";
import cat2 from "../../../assets/Category-2.png";
import cat3 from "../../../assets/Category-3.png";
import cat4 from "../../../assets/Category-4.avif";
import cat5 from "../../../assets/Category-5.png";
import cat6 from "../../../assets/Category-6.png";

const PopularCol = () => {
    const owlOptions = {
        loop: true,
        autoWidth: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        mergeFit: true,
        stagePadding: 0,
        autoplaySpeed: 800,
        navSpeed: 800,
        dots: true,
        center: true,
        margin: 5,
        nav: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    };
    return (
        <div className="w-full h-max flex items-center justify-center flex-col gap-10 mb-5">
            <p className="text-3xl font-semibold flex items-center justify-center relative h3textBg w-full">
                Popular Collections
            </p>
            <div className="w-[80%] phone:w-[90%] h-max">
                <OwlCarousel {...owlOptions} className="w-full flex">
                    <div className="item w-max h-max  ">
                        <div className="w-max h-max rounded-lg flex flex-col items-center gap-2 justify-center ">
                            <img
                                src={cat1}
                                alt=""
                                className="w-52 h-52 phone:w-40 phone:h-40 object-contain rounded-lg"
                            />
                            <p className="w-max h-max flex gap-2 items-center">
                                <span className="w-3 h-3 flex items-center rounded-full bg-[#2f904f]"></span>{" "}
                                Headphones
                            </p>
                        </div>
                    </div>
                    <div className="item w-max h-max  ">
                        <div className="w-max h-max rounded-lg flex flex-col items-center gap-2 justify-center ">
                            <img
                                src={cat2}
                                alt=""
                                className="w-52 h-52 phone:w-40 phone:h-40 object-contain rounded-lg"
                            />
                            <p className="w-max h-max flex gap-2 items-center">
                                <span className="w-3 h-3 flex items-center rounded-full bg-[#2f904f]"></span>{" "}
                                Speaker
                            </p>
                        </div>
                    </div>
                    <div className="item w-max h-max  ">
                        <div className="w-max h-max rounded-lg flex flex-col items-center gap-2 justify-center ">
                            <img
                                src={cat3}
                                alt=""
                                className="w-52 h-52 phone:w-40 phone:h-40 object-contain rounded-lg"
                            />
                            <p className="w-max h-max flex gap-2 items-center">
                                <span className="w-3 h-3 flex items-center rounded-full bg-[#2f904f]"></span>{" "}
                                Phones
                            </p>
                        </div>
                    </div>
                    <div className="item w-max h-max  ">
                        <div className="w-max h-max rounded-lg flex flex-col items-center gap-2 justify-center ">
                            <img
                                src={cat4}
                                alt=""
                                className="w-52 h-52 phone:w-40 phone:h-40 object-contain rounded-lg"
                            />
                            <p className="w-max h-max flex gap-2 items-center">
                                <span className="w-3 h-3 flex items-center rounded-full bg-[#2f904f]"></span>{" "}
                                Speaker
                            </p>
                        </div>
                    </div>
                    <div className="item w-max h-max  ">
                        <div className="w-max h-max rounded-lg flex flex-col items-center gap-2 justify-center ">
                            <img
                                src={cat5}
                                alt=""
                                className="w-52 h-52 phone:w-40 phone:h-40 object-contain rounded-lg"
                            />
                            <p className="w-max h-max flex gap-2 items-center">
                                <span className="w-3 h-3 flex items-center rounded-full bg-[#2f904f]"></span>{" "}
                                Camera
                            </p>
                        </div>
                    </div>
                    <div className="item w-max h-max  ">
                        <div className="w-max h-max rounded-lg flex flex-col items-center gap-2 justify-center ">
                            <img
                                src={cat6}
                                alt=""
                                className="w-52 h-52 phone:w-40 phone:h-40 object-contain rounded-lg"
                            />
                            <p className="w-max h-max flex gap-2 items-center">
                                <span className="w-3 h-3 flex items-center rounded-full bg-[#2f904f]"></span>{" "}
                                Airpods
                            </p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default PopularCol;
