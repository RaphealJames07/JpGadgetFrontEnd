import {TbStar} from "react-icons/tb";
import {TbStarFilled} from "react-icons/tb";
import shopImg1 from "../assets/shopimg3.webp";
import {ImEye} from "react-icons/im";
import {HiOutlineHeart} from "react-icons/hi";
import productImg1 from "../assets/product_banner1.webp";
import productImg2 from "../assets/product_banner2.webp";
import productImg3 from "../assets/product_banner3.webp";
import productImg4 from "../assets/product_banner4.webp";
import {useState} from "react";

interface Props {
    setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;

}

const HomeShop: React.FC<Props> = ({ setShowInfo}) => {
    const [phones, setPhones] = useState<boolean>(true);
    const [tablets, setTablets] = useState<boolean>(false);
    const [airpods, setAirpods] = useState<boolean>(false);
    const [others, setOthers] = useState<boolean>(false);
    const data = [1, 2, 3, 4];

    const showPhone = () => {
        setPhones(true);
        setTablets(false);
        setAirpods(false);
        setOthers(false);
    };
    const showTablet = () => {
        setPhones(false);
        setTablets(true);
        setAirpods(false);
        setOthers(false);
    };
    const showAirpod = () => {
        setPhones(false);
        setTablets(false);
        setAirpods(true);
        setOthers(false);
    };
    const showOther = () => {
        setPhones(false);
        setTablets(false);
        setAirpods(false);
        setOthers(true);
    };

    const handleShowInfo = () => {
        setShowInfo(true);
    };

    return (
        <>
            <div className="w-full h-max flex items-center justify-center flex-col gap-10 my-10 px-5 phone:px-3">
                <p className="text-3xl font-semibold flex items-center justify-center relative h3textBg">
                    Trending Products
                </p>
                <div className="w-full h-max flex items-center gap-5 phone:flex-col">
                    <div className="w-72 phone:w-full h-max flex flex-col border rounded border-gray-300 ">
                        <div className="w-full h-14 bg-slate-100 flex items-center pl-10 text-2xl font-semibold">
                            Choose Cateory
                        </div>
                        <div
                            className={`w-full h-12 border-b border-b-gray-300 cursor-pointer flex items-center pl-10 transition-all duration-500 text-lg ${
                                phones ? "text-white bg-[#2f904f]" : ""
                            } `}
                            onClick={showPhone}
                        >
                            Phones
                        </div>
                        <div
                            className={`w-full h-12 border-b border-b-gray-300 cursor-pointer flex items-center pl-10 transition-all duration-500 text-lg ${
                                tablets ? "text-white bg-[#2f904f]" : ""
                            } `}
                            onClick={showTablet}
                        >
                            Tablets
                        </div>
                        <div
                            className={`w-full h-12 border-b border-b-gray-300 cursor-pointer flex items-center pl-10 transition-all duration-500 text-lg ${
                                airpods ? "text-white bg-[#2f904f]" : ""
                            } `}
                            onClick={showAirpod}
                        >
                            Airpods
                        </div>
                        <div
                            className={`w-full h-12 border-b border-b-gray-300 cursor-pointer flex items-center pl-10 transition-all duration-500 text-lg ${
                                others ? "text-white bg-[#2f904f]" : ""
                            } `}
                            onClick={showOther}
                        >
                            Others
                        </div>
                    </div>
                    <div className="w-full h-[18rem] overflow-x-auto">
                        <div className="w-max h-full flex gap-8 p-2">
                            {phones ? (
                                <>
                                    {data.map((index) => (
                                        <div
                                            className="w-1/5 h-full flex flex-col border border-gray-300 rounded"
                                            key={index}
                                        >
                                            <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                                <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                                    <span className="cursor-pointer  flex items-center justify-center">
                                                        <ImEye
                                                            className="w-5 h-5"
                                                            onClick={
                                                                handleShowInfo
                                                            }
                                                        />
                                                    </span>
                                                    <span className="cursor-pointer  flex items-center justify-center">
                                                        <HiOutlineHeart className="w-5 h-5" />
                                                    </span>
                                                </div>
                                                <img
                                                    src={shopImg1}
                                                    alt=""
                                                    className="w-[85%] h-[70%] object-cover"
                                                />
                                                <div className="w-full flex h-[30%] items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                            </div>
                                            <div className="w-full h-[30%] p-2 flex flex-col justify-center items-center gap-1">
                                                <p className="font-semibold">
                                                    Iphone 12 Pro Max 128GB
                                                </p>
                                                <p className="font-semibold text-lg flex items-center gap-5">
                                                    N300,000{" "}
                                                    <span className="font-normal line-through text-sm">
                                                        320,000
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="w-1/5 h-full flex flex-col border border-gray-300 rounded">
                                        <img
                                            src={productImg1}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </>
                            ) : tablets ? (
                                <>
                                    {data.map((index) => (
                                        <div
                                            className="w-1/5 h-full flex flex-col border border-gray-300 rounded"
                                            key={index}
                                        >
                                            <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                                <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                                    <span className="cursor-pointer  flex items-center justify-center">
                                                        <ImEye className="w-5 h-5" />
                                                    </span>
                                                    <span className="cursor-pointer  flex items-center justify-center">
                                                        <HiOutlineHeart className="w-5 h-5" />
                                                    </span>
                                                </div>
                                                <img
                                                    src={shopImg1}
                                                    alt=""
                                                    className="w-[85%] h-[70%] object-cover"
                                                />
                                                <div className="w-full flex h-[30%] items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                            </div>
                                            <div className="w-full h-[30%] p-2 flex flex-col justify-center items-center gap-1">
                                                <p className="font-semibold">
                                                    Iphone 12 Pro Max 128GB
                                                </p>
                                                <p className="font-semibold text-lg flex items-center gap-5">
                                                    N300,000{" "}
                                                    <span className="font-normal line-through text-sm">
                                                        320,000
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="w-1/5 h-full flex flex-col border border-gray-300 rounded">
                                        <img
                                            src={productImg2}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </>
                            ) : airpods ? (
                                <>
                                    {data.map((index) => (
                                        <div
                                            className="w-1/5 h-full flex flex-col border border-gray-300 rounded"
                                            key={index}
                                        >
                                            <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                                <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                                    <span className="cursor-pointer  flex items-center justify-center">
                                                        <ImEye className="w-5 h-5" />
                                                    </span>
                                                    <span className="cursor-pointer  flex items-center justify-center">
                                                        <HiOutlineHeart className="w-5 h-5" />
                                                    </span>
                                                </div>
                                                <img
                                                    src={shopImg1}
                                                    alt=""
                                                    className="w-[85%] h-[70%] object-cover"
                                                />
                                                <div className="w-full flex h-[30%] items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                            </div>
                                            <div className="w-full h-[30%] p-2 flex flex-col justify-center items-center gap-1">
                                                <p className="font-semibold">
                                                    Iphone 12 Pro Max 128GB
                                                </p>
                                                <p className="font-semibold text-lg flex items-center gap-5">
                                                    N300,000{" "}
                                                    <span className="font-normal line-through text-sm">
                                                        320,000
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="w-1/5 h-full flex flex-col border border-gray-300 rounded">
                                        <img
                                            src={productImg3}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </>
                            ) : others ? (
                                <>
                                    {data.map((index) => (
                                        <div
                                            className="w-1/5 h-full flex flex-col border border-gray-300 rounded"
                                            key={index}
                                        >
                                            <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                                <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                                    <span className="cursor-pointer  flex items-center justify-center">
                                                        <ImEye className="w-5 h-5" />
                                                    </span>
                                                    <span className="cursor-pointer  flex items-center justify-center">
                                                        <HiOutlineHeart className="w-5 h-5" />
                                                    </span>
                                                </div>
                                                <img
                                                    src={shopImg1}
                                                    alt=""
                                                    className="w-[85%] h-[70%] object-cover"
                                                />
                                                <div className="w-full flex h-[30%] items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                            </div>
                                            <div className="w-full h-[30%] p-2 flex flex-col justify-center items-center gap-1">
                                                <p className="font-semibold">
                                                    Iphone 12 Pro Max 128GB
                                                </p>
                                                <p className="font-semibold text-lg flex items-center gap-5">
                                                    N300,000{" "}
                                                    <span className="font-normal line-through text-sm">
                                                        320,000
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="w-1/5 h-full flex flex-col border border-gray-300 rounded">
                                        <img
                                            src={productImg4}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeShop;
