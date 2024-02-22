import {FaComment, FaRegCalendarAlt} from "react-icons/fa";
import OwlCarousel from "react-owl-carousel";
import "./LatestNews.css";

const LatestNews = () => {
    const owlOptions = {
        loop: true,
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: "slideOutUp",
        dots: false,
        margin: 5,
        nav: true,
        rewind: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 2,
            },
        },
    };
    return (
        <>
            <div className="w-full h-[60vh] flex items-center justify-center bg-gray-100">
                <div className="w-[70%] phone:w-[90%] h-max flex flex-col gap-10 items-center justify-center ">
                    <p className="text-3xl font-semibold flex items-center justify-center relative h3textBg w-full">
                        Latest News
                    </p>
                    <div className="w-full h-max flex">
                        <OwlCarousel {...owlOptions} className="w-full">
                            <div className="item w-full h-40 phone:h-max">
                                <div className="w-max phone:w-full flex phone:flex-col h-full phone:h-max bg-sky-200">
                                    <div className="w-56 phone:w-full h-full phone:h-44 bg-lime-300">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="w-[17rem] phone:w-full h-full phone:h-max flex flex-col phone:items-center gap-1 bg-white p-4">
                                        <div className="w-full h-max flex items-center phone:justify-center gap-2 phone:gap-3">
                                            <p className="w-max flex items-center  gap-1">
                                                <FaRegCalendarAlt /> 29, Jan
                                                2022
                                            </p>
                                            <p className="w-max flex items-center gap-1">
                                                <FaComment /> 0 Comments
                                            </p>
                                        </div>
                                        <p className="text-base font-semibold">
                                            Easter Sale is here
                                        </p>
                                        <p className=" text-sm phone:text-center">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Quasi,
                                            illo dolorem neque harum aliquam
                                            dolor?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item w-full h-40 phone:h-max">
                                <div className="w-max phone:w-full flex phone:flex-col h-full phone:h-max bg-sky-200">
                                    <div className="w-56 phone:w-full h-full phone:h-44 bg-red-300">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="w-[17rem] phone:w-full h-full phone:h-max flex flex-col phone:items-center gap-1 bg-white p-4">
                                        <div className="w-full h-max flex items-center phone:justify-center gap-2 phone:gap-3">
                                            <p className="w-max flex items-center  gap-1">
                                                <FaRegCalendarAlt /> 29, Jan
                                                2022
                                            </p>
                                            <p className="w-max flex items-center gap-1">
                                                <FaComment /> 0 Comments
                                            </p>
                                        </div>
                                        <p className="text-base font-semibold">
                                            Easter Sale is here
                                        </p>
                                        <p className=" text-sm phone:text-center">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Quasi,
                                            illo dolorem neque harum aliquam
                                            dolor?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item w-full h-40 phone:h-max">
                                <div className="w-max phone:w-full flex phone:flex-col h-full phone:h-max bg-sky-200">
                                    <div className="w-56 phone:w-full h-full phone:h-44 bg-blue-300">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="w-[17rem] phone:w-full h-full phone:h-max flex flex-col phone:items-center gap-1 bg-white p-4">
                                        <div className="w-full h-max flex items-center phone:justify-center gap-2 phone:gap-3">
                                            <p className="w-max flex items-center  gap-1">
                                                <FaRegCalendarAlt /> 29, Jan
                                                2022
                                            </p>
                                            <p className="w-max flex items-center gap-1">
                                                <FaComment /> 0 Comments
                                            </p>
                                        </div>
                                        <p className="text-base font-semibold">
                                            Easter Sale is here
                                        </p>
                                        <p className=" text-sm phone:text-center">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Quasi,
                                            illo dolorem neque harum aliquam
                                            dolor?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item w-full h-40 phone:h-max">
                                <div className="w-max phone:w-full flex phone:flex-col h-full phone:h-max bg-sky-200">
                                    <div className="w-56 phone:w-full h-full phone:h-44 bg-purple-300">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="w-[17rem] phone:w-full h-full phone:h-max flex flex-col phone:items-center gap-1 bg-white p-4">
                                        <div className="w-full h-max flex items-center phone:justify-center gap-2 phone:gap-3">
                                            <p className="w-max flex items-center  gap-1">
                                                <FaRegCalendarAlt /> 29, Jan
                                                2022
                                            </p>
                                            <p className="w-max flex items-center gap-1">
                                                <FaComment /> 0 Comments
                                            </p>
                                        </div>
                                        <p className="text-base font-semibold">
                                            Easter Sale is here
                                        </p>
                                        <p className=" text-sm phone:text-center">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Quasi,
                                            illo dolorem neque harum aliquam
                                            dolor?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item w-full h-40 phone:h-max">
                                <div className="w-max phone:w-full flex phone:flex-col h-full phone:h-max bg-sky-200">
                                    <div className="w-56 phone:w-full h-full phone:h-44 bg-yellow-300">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="w-[17rem] phone:w-full h-full phone:h-max flex flex-col phone:items-center gap-1 bg-white p-4">
                                        <div className="w-full h-max flex items-center phone:justify-center gap-2 phone:gap-3">
                                            <p className="w-max flex items-center  gap-1">
                                                <FaRegCalendarAlt /> 29, Jan
                                                2022
                                            </p>
                                            <p className="w-max flex items-center gap-1">
                                                <FaComment /> 0 Comments
                                            </p>
                                        </div>
                                        <p className="text-base font-semibold">
                                            Easter Sale is here
                                        </p>
                                        <p className=" text-sm phone:text-center">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Quasi,
                                            illo dolorem neque harum aliquam
                                            dolor?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="item w-full h-40 phone:h-max">
                                <div className="w-max phone:w-full flex phone:flex-col h-full phone:h-max bg-sky-200">
                                    <div className="w-56 phone:w-full h-full phone:h-44 bg-orange-300">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="w-[17rem] phone:w-full h-full phone:h-max flex flex-col phone:items-center gap-1 bg-white p-4">
                                        <div className="w-full h-max flex items-center phone:justify-center gap-2 phone:gap-3">
                                            <p className="w-max flex items-center  gap-1">
                                                <FaRegCalendarAlt /> 29, Jan
                                                2022
                                            </p>
                                            <p className="w-max flex items-center gap-1">
                                                <FaComment /> 0 Comments
                                            </p>
                                        </div>
                                        <p className="text-base font-semibold">
                                            Easter Sale is here
                                        </p>
                                        <p className=" text-sm phone:text-center">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Quasi,
                                            illo dolorem neque harum aliquam
                                            dolor?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestNews;
