import {TbStar} from "react-icons/tb";
import {TbStarFilled} from "react-icons/tb";
import iphone from "../assets/iphone.png";
import headset from "../assets/shopimg3.webp";
import {useState} from "react";

interface Props {}

const QuickView: React.FC<Props> = () => {
    const [seeMore, setSeeMore] = useState(false);

    return (
        <div className="w-full h-[70vh] ">
            <div className=" w-full h-full phone:overflow-y-auto">
                <div className="w-full h-full phone:h-max flex phone:flex-col gap-5 p-5 phone:p-2">
                    <div className="w-1/2 phone:w-full h-max">
                        <div className="w-full h-80  flex items-center justify-center">
                            <img
                                src={iphone}
                                alt=""
                                className="w-[80%] h-[80%] object-cover"
                            />
                        </div>
                        <div className="w-full h-24 bg-lime-100 overflow-x-auto scrollbar-none">
                            <div className="w-max h-full flex gap-5">
                                <div className="w-24 h-full bg-sky-200">
                                    <img
                                        src={headset}
                                        alt=""
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="w-24 h-full bg-sky-200">
                                    <img
                                        src={headset}
                                        alt=""
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="w-24 h-full bg-sky-200">
                                    <img
                                        src={headset}
                                        alt=""
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="w-24 h-full bg-sky-200">
                                    <img
                                        src={headset}
                                        alt=""
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="w-24 h-full bg-sky-200">
                                    <img
                                        src={headset}
                                        alt=""
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 phone:w-full  h-full overflow-y-auto scrollbar-none relative">
                        <div className="w-full h-max flex flex-col gap-5">
                            <p className="text-3xl font-semibold">
                                Iphone 12 Pro Max
                            </p>
                            <p className="text-xl font-semibold flex items-center gap-5">
                                N320,000
                                <span className="text-base line-through text-[rgb(120,120,120)]">
                                    N300,000
                                </span>
                            </p>
                            <span className="w-max flex items-center gap-3 text-[rgb(120,120,120)]">
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStarFilled />
                                <TbStar />
                                <TbStar />
                            </span>
                            <p className="text-[rgb(120,120,120)] text-sm">
                                Faded short sleeves t-shirt with high neckline.
                                Soft and stretchy material for a comfortable
                                fit. Accessorize with a straw hat and you're
                                ready for summer!
                            </p>
                            <div className="w-full h-max flex flex-col gap-3">
                                {seeMore && (
                                    <>
                                        <p className="text-base font-semibold">
                                            Specifications
                                        </p>
                                        <ul className="text-sm text-[rgb(120,120,120)] flex flex-col gap-2">
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                            <li>Lorem ipsum dolor sit amet.</li>
                                        </ul>
                                        <p className="text-base font-semibold">
                                            Full Description
                                        </p>
                                        <span className="text-sm text-[rgb(120,120,120)]">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Iure
                                            possimus perspiciatis delectus
                                            suscipit deleniti dolorum asperiores
                                            ex, cumque a vitae cupiditate vero,
                                            alias mollitia ut.
                                        </span>
                                    </>
                                )}

                                <p
                                    onClick={() => setSeeMore(!seeMore)}
                                    className="underline underline-offset-2 font-semibold cursor-pointer"
                                >
                                    {seeMore ? "See Less" : "See More"}
                                </p>
                            </div>
                            <div className="w-max flex flex-col gap-2">
                                <p className="font-semibold">Color</p>
                                <div className="w-max flex gap-2">
                                    <span className="w-8 h-8 cursor-pointer rounded-full bg-red-500 border-2 border-black"></span>
                                    <span className="w-8 h-8 cursor-pointer rounded-full bg-blue-500"></span>
                                    <span className="w-8 h-8 cursor-pointer rounded-full bg-yellow-500"></span>
                                    <span className="w-8 h-8 cursor-pointer rounded-full bg-[#ddd]"></span>
                                </div>
                            </div>
                            <div className="w-max flex items-center gap-2">
                                <p className="font-semibold">Quantity</p>
                                <div className="w-8 h-8 cursor-pointer rounded text-lg border border-gray-600 flex items-center justify-center">
                                    -
                                </div>
                                <div className="w-8 h-8  rounded text-lg border border-gray-600 flex items-center justify-center">
                                    1
                                </div>
                                <div className="w-8 h-8 cursor-pointer rounded text-lg border border-gray-600 flex items-center justify-center">
                                    +
                                </div>
                            </div>
                            <div className="w-full h-max">
                                <button className="w-full h-12 bg-green-800 text-white rounded uppercase font-medium">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickView;
