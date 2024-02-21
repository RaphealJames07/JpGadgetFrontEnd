import {HiOutlineHeart} from "react-icons/hi";
import {ImEye} from "react-icons/im";
import {TbStar, TbStarFilled} from "react-icons/tb";
import shopImg1 from "../assets/shopimg3.webp";
import {useState} from "react";

interface Props {
    setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const Latest: React.FC<Props> = ({setShowInfo}) => {
    const [showFeatured, setShowFeatured] = useState<boolean>(true);
    const [showBestSellers, setShowBestSellers] = useState<boolean>(false);
    const [showNewArrivals, setShowNewArrivals] = useState<boolean>(false);

    const handleShowFeatured = () => {
        setShowFeatured(true);
        setShowBestSellers(false);
        setShowNewArrivals(false);
    };
    const handleShowBestSellers = () => {
        setShowFeatured(false);
        setShowBestSellers(true);
        setShowNewArrivals(false);
    };
    const handleShowNewArrivals = () => {
        setShowFeatured(false);
        setShowBestSellers(false);
        setShowNewArrivals(true);
    };

    const handleShowInfo = () => {
        setShowInfo(true);
    };

    return (
        <>
            <div className="w-full h-max flex items-center justify-center flex-col gap-5 mb-5">
                <p className="text-3xl font-semibold flex items-center justify-center relative h3textBg w-full">
                    Latest Product
                </p>
                <div className="w-full h-16 flex items-center justify-center gap-5">
                    <div
                        className={`w-max h-max flex items-center cursor-pointer transition-all duration-500 justify-center px-4 py-2 ${
                            showFeatured ? "bg-yellow-300" : ""
                        } rounded`}
                        onClick={handleShowFeatured}
                    >
                        Featured
                    </div>
                    <div
                        className={`w-max h-max flex items-center cursor-pointer transition-all duration-500 justify-center px-4 py-2 ${
                            showBestSellers ? "bg-yellow-300" : ""
                        } rounded`}
                        onClick={handleShowBestSellers}
                    >
                        Best Sellers
                    </div>
                    <div
                        className={`w-max h-max flex items-center cursor-pointer transition-all duration-500 justify-center px-4 py-2 ${
                            showNewArrivals ? "bg-yellow-300" : ""
                        } rounded`}
                        onClick={handleShowNewArrivals}
                    >
                        New Arrivals
                    </div>
                </div>
                <div className="w-[80%] phone:w-[90%] h-max flex flex-col gap-8">
                    <div className="w-full h-max flex phone:flex-wrap gap-12 phone:gap-5 phone:justify-between">
                        {showFeatured ? (
                            <>
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                            </>
                        ) : showBestSellers ? (
                            <>
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                            </>
                        ) : showNewArrivals ? (
                            <>
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                                <div className="w-1/4 phone:w-[47%] h-[18rem] flex flex-col border border-gray-300 rounded">
                                    <div className="w-full h-[70%] bg-slate-100 flex flex-col items-center justify-center relative">
                                        <div className="w-8 h-16 absolute top-3 right-3 flex justify-between flex-col items-center">
                                            <span className="cursor-pointer  flex items-center justify-center">
                                                <ImEye
                                                    className="w-5 h-5"
                                                    onClick={handleShowInfo}
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
                            </>
                        ) : null}
                    </div>
                    <div className="w-full h-max flex items-center justify-center">
                        <button className="w-max h-max px-6 rounded py-2 bg-[#008081] text-white">
                            VIEW ALL
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Latest;
