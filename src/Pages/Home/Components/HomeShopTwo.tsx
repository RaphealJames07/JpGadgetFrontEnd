import {useState} from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { ImEye } from "react-icons/im";
import {TbStar, TbStarFilled} from "react-icons/tb";
import iphone from '../../../assets/Iphone_12_test_img/Gold_1.webp'

interface Props {
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomeShopTwo: React.FC<Props> = ({setShowInfo}) => {
    const [showPhones, setShowPhones] = useState<boolean>(true);
    const [showTablets, setShowTablets] = useState<boolean>(false);
    const [showAirpods, setShowAirpods] = useState<boolean>(false);
    const [showConsole, setShowConsole] = useState<boolean>(false);

    const handleShowPhones = () => {
        setShowPhones(true);
        setShowTablets(false);
        setShowAirpods(false);
        setShowConsole(false);
    };
    const handleShowTabs = () => {
        setShowPhones(false);
        setShowTablets(true);
        setShowAirpods(false);
        setShowConsole(false);
    };
    const handleShowAirpods = () => {
        setShowPhones(false);
        setShowTablets(false);
        setShowAirpods(true);
        setShowConsole(false);
    };
    const handleShowConsoles = () => {
        setShowPhones(false);
        setShowTablets(false);
        setShowAirpods(false);
        setShowConsole(true);
    };

    const item = [1, 2, 3];
    const item2 = [1, 2, 3];

    const handleShowInfo = () => {
      setShowInfo(true);
  };

    return (
        <div className="w-full h-max px-5 flex phone:flex-col gap-5 mb-4">
            <div className="w-[25%] phone:w-full h-[37rem] bg-red-200 rounded-md shadow-lg">
                <div className="w-full h-[10%] flex items-center  pl-4 border-b border-b-gray-300">
                    <p className="text-2xl font-semibold flex items-center phone:justify-center relative h3textBg w-full">
                        Daily Deal
                    </p>
                </div>
                <div className="w-full h-[90%] flex flex-col items-center gap-5 justify-center">
                    <div className="w-52 h-52 bg-black">
                        <img src="" alt="" />
                    </div>
                    <div className="w-full h-max flex flex-col gap-2 items-center justify-center">
                        <div className="w-full h-max flex items-center justify-center gap-2">
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStarFilled />
                            <TbStar />
                            <TbStar />
                        </div>
                        <p>Apple Series 4</p>
                        <p>N120,000</p>
                    </div>
                    <div className="w-max h-max flex gap-2">
                        <div className="w-max h-max flex flex-col gap-1 items-center">
                            <span className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-lg">
                                <p className="tracking-widest">0</p>
                            </span>
                            <p>Days</p>
                        </div>
                        <div className="w-max h-max flex flex-col gap-1 items-center">
                            <span className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-lg">
                                <p className="tracking-widest">22</p>
                            </span>
                            <p>Hours</p>
                        </div>
                        <div className="w-max h-max flex flex-col gap-1 items-center">
                            <span className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-lg">
                                <p className="tracking-widest">09</p>
                            </span>
                            <p>Mins</p>
                        </div>
                        <div className="w-max h-max flex flex-col gap-1 items-center">
                            <span className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-lg">
                                <p className="tracking-widest">34</p>
                            </span>
                            <p>Secs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[75%] phone:w-full h-max  flex flex-col gap-5">
                <div className="w-full h-20 phone:h-max border-b border-b-gray-300 flex phone:flex-col items-center justify-between phone:gap-4 ">
                    <div className="w-max phone:w-full phone:flex phone:justify-between">
                        <p className="text-3xl phone:text-2xl font-semibold flex items-center justify-center relative h3textBg ">
                            Popular Product
                        </p>
                        <button className="w-max h-max px-4 py-2 rounded bg-green-700 text-white phone:flex hidden">
                            View All
                        </button>
                    </div>
                    <div className="w-max phone:w-full h-max flex phone:justify-center gap-7 phone:mb-3">
                        <p
                            className={`w-max flex items-center cursor-pointer transition-all duration-500 ${
                                showPhones ? "text-green-700" : ""
                            } font-medium`}
                            onClick={handleShowPhones}
                        >
                            Phones
                        </p>
                        <p
                            className={`w-max flex items-center cursor-pointer transition-all duration-500 ${
                                showTablets ? "text-green-700" : ""
                            } font-medium`}
                            onClick={handleShowTabs}
                        >
                            Tablets
                        </p>
                        <p
                            className={`w-max flex items-center cursor-pointer transition-all duration-500 ${
                                showAirpods ? "text-green-700" : ""
                            } font-medium`}
                            onClick={handleShowAirpods}
                        >
                            Airpods
                        </p>
                        <p
                            className={`w-max flex items-center cursor-pointer transition-all duration-500 ${
                                showConsole ? "text-green-700" : ""
                            } font-medium`}
                            onClick={handleShowConsoles}
                        >
                            Console
                        </p>
                    </div>
                    <div className="w-max h-max phone:hidden">
                        <button className="w-max h-max px-4 py-2 rounded bg-green-700 text-white ">
                            View All
                        </button>
                    </div>
                </div>
                <div className="w-full h-max">
                    {showPhones ? (
                        <>
                            <div className="w-full h-max flex flex-col phone:flex-row gap-5">
                                <div className="w-full phone:w-1/2 h-max flex phone:flex-col gap-5">
                                    {item.map((index) => (
                                        <div
                                            className="w-1/3 phone:w-full h-max flex bg-gray-200"
                                            key={index}
                                        >
                                            <div className="w-[40%] phone:w-full h-max flex flex-col items-center p-2 gap-2">
                                                <div className="w-full h-28 bg-white p-2 relative">
                                                    <div className="w-8 h-12 absolute top-1 right-0 flex justify-between flex-col items-center">
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <ImEye
                                                                className="w-4 h-4"
                                                                onClick={
                                                                    handleShowInfo
                                                                }
                                                            />
                                                        </span>
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <HiOutlineHeart className="w-4 h-4" />
                                                        </span>
                                                    </div>
                                                    <img
                                                        src={iphone}
                                                        alt=""
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="w-full flex items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                                <p className="hidden phone:flex">
                                                    Iphone 12 Pro Max
                                                </p>
                                                <p className="text-lg phone:flex gap-2 items-center hidden ">
                                                    N200,000
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm hidden phone:flex">
                                                    (3) reviews
                                                </p>
                                            </div>
                                            <div className="w-[60%] h-full p-1 flex flex-col gap-1 phone:hidden">
                                                <p className="text-lg font-medium">
                                                    Iphone 12 Pro Max{" "}
                                                </p>
                                                <p className="text-lg flex gap-2 items-center">
                                                    N200,000{" "}
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm">
                                                    128GB UK Used.
                                                </p>
                                                <p className="text-sm">
                                                    (3) reviews
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full phone:w-1/2 h-max flex phone:flex-col gap-5">
                                    {item2.map((index) => (
                                        <div
                                            className="w-1/3 phone:w-full h-max flex bg-gray-200"
                                            key={index}
                                        >
                                            <div className="w-[40%] phone:w-full h-max flex flex-col items-center p-2 gap-2">
                                                <div className="w-full h-28 bg-indigo-300 relative">
                                                    <div className="w-8 h-12 absolute top-1 right-0 flex justify-between flex-col items-center">
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <ImEye
                                                                className="w-4 h-4"
                                                                onClick={
                                                                    handleShowInfo
                                                                }
                                                            />
                                                        </span>
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <HiOutlineHeart className="w-4 h-4" />
                                                        </span>
                                                    </div>
                                                    <img
                                                        src={""}
                                                        alt=""
                                                        
                                                    />
                                                </div>
                                                <div className="w-full flex items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                                <p className="hidden phone:flex">
                                                    Iphone 12 Pro Max
                                                </p>
                                                <p className="text-lg phone:flex gap-2 items-center hidden ">
                                                    N200,000
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm hidden phone:flex">
                                                    (3) reviews
                                                </p>
                                            </div>
                                            <div className="w-[60%] h-full p-1 flex flex-col gap-1 phone:hidden">
                                                <p className="text-lg font-medium">
                                                    Iphone 12 Pro Max{" "}
                                                </p>
                                                <p className="text-lg flex gap-2 items-center">
                                                    N200,000{" "}
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm">
                                                    128GB UK Used.
                                                </p>
                                                <p className="text-sm">
                                                    (3) reviews
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : showTablets ? (
                        <>
                            <div className="w-full h-max flex flex-col phone:flex-row gap-5">
                                <div className="w-full phone:w-1/2 h-max flex phone:flex-col gap-5">
                                    {item.map((index) => (
                                        <div
                                            className="w-1/3 phone:w-full h-max flex bg-gray-200"
                                            key={index}
                                        >
                                            <div className="w-[40%] phone:w-full h-max flex flex-col items-center p-2 gap-2">
                                                <div className="w-full h-28 bg-indigo-300 relative">
                                                    <div className="w-8 h-12 absolute top-1 right-0 flex justify-between flex-col items-center">
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <ImEye
                                                                className="w-4 h-4"
                                                                onClick={
                                                                    handleShowInfo
                                                                }
                                                            />
                                                        </span>
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <HiOutlineHeart className="w-4 h-4" />
                                                        </span>
                                                    </div>
                                                    <img
                                                        src={""}
                                                        alt=""
                                                        
                                                    />
                                                </div>
                                                <div className="w-full flex items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                                <p className="hidden phone:flex">
                                                    Iphone 12 Pro Max
                                                </p>
                                                <p className="text-lg phone:flex gap-2 items-center hidden ">
                                                    N200,000
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm hidden phone:flex">
                                                    (3) reviews
                                                </p>
                                            </div>
                                            <div className="w-[60%] h-full p-1 flex flex-col gap-1 phone:hidden">
                                                <p className="text-lg font-medium">
                                                    Iphone 12 Pro Max{" "}
                                                </p>
                                                <p className="text-lg flex gap-2 items-center">
                                                    N200,000{" "}
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm">
                                                    128GB UK Used.
                                                </p>
                                                <p className="text-sm">
                                                    (3) reviews
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full phone:w-1/2 h-max flex phone:flex-col gap-5">
                                    {item2.map((index) => (
                                        <div
                                            className="w-1/3 phone:w-full h-max flex bg-gray-200"
                                            key={index}
                                        >
                                            <div className="w-[40%] phone:w-full h-max flex flex-col items-center p-2 gap-2">
                                                <div className="w-full h-28 bg-indigo-300 relative">
                                                    <div className="w-8 h-12 absolute top-1 right-0 flex justify-between flex-col items-center">
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <ImEye
                                                                className="w-4 h-4"
                                                                onClick={
                                                                    handleShowInfo
                                                                }
                                                            />
                                                        </span>
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <HiOutlineHeart className="w-4 h-4" />
                                                        </span>
                                                    </div>
                                                    <img
                                                        src={""}
                                                        alt=""
                                                        
                                                    />
                                                </div>
                                                <div className="w-full flex items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                                <p className="hidden phone:flex">
                                                    Iphone 12 Pro Max
                                                </p>
                                                <p className="text-lg phone:flex gap-2 items-center hidden ">
                                                    N200,000
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm hidden phone:flex">
                                                    (3) reviews
                                                </p>
                                            </div>
                                            <div className="w-[60%] h-full p-1 flex flex-col gap-1 phone:hidden">
                                                <p className="text-lg font-medium">
                                                    Iphone 12 Pro Max{" "}
                                                </p>
                                                <p className="text-lg flex gap-2 items-center">
                                                    N200,000{" "}
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm">
                                                    128GB UK Used.
                                                </p>
                                                <p className="text-sm">
                                                    (3) reviews
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : showAirpods ? (
                        <>
                            <div className="w-full h-max flex flex-col phone:flex-row gap-5">
                                <div className="w-full phone:w-1/2 h-max flex phone:flex-col gap-5">
                                    {item.map((index) => (
                                        <div
                                            className="w-1/3 phone:w-full h-max flex bg-gray-200"
                                            key={index}
                                        >
                                            <div className="w-[40%] phone:w-full h-max flex flex-col items-center p-2 gap-2">
                                                <div className="w-full h-28 bg-indigo-300 relative">
                                                    <div className="w-8 h-12 absolute top-1 right-0 flex justify-between flex-col items-center">
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <ImEye
                                                                className="w-4 h-4"
                                                                onClick={
                                                                    handleShowInfo
                                                                }
                                                            />
                                                        </span>
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <HiOutlineHeart className="w-4 h-4" />
                                                        </span>
                                                    </div>
                                                    <img
                                                        src={""}
                                                        alt=""
                                                        
                                                    />
                                                </div>
                                                <div className="w-full flex items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                                <p className="hidden phone:flex">
                                                    Iphone 12 Pro Max
                                                </p>
                                                <p className="text-lg phone:flex gap-2 items-center hidden ">
                                                    N200,000
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm hidden phone:flex">
                                                    (3) reviews
                                                </p>
                                            </div>
                                            <div className="w-[60%] h-full p-1 flex flex-col gap-1 phone:hidden">
                                                <p className="text-lg font-medium">
                                                    Iphone 12 Pro Max{" "}
                                                </p>
                                                <p className="text-lg flex gap-2 items-center">
                                                    N200,000{" "}
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm">
                                                    128GB UK Used.
                                                </p>
                                                <p className="text-sm">
                                                    (3) reviews
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full phone:w-1/2 h-max flex phone:flex-col gap-5">
                                    {item2.map((index) => (
                                        <div
                                            className="w-1/3 phone:w-full h-max flex bg-gray-200"
                                            key={index}
                                        >
                                            <div className="w-[40%] phone:w-full h-max flex flex-col items-center p-2 gap-2">
                                                <div className="w-full h-28 bg-indigo-300 relative">
                                                    <div className="w-8 h-12 absolute top-1 right-0 flex justify-between flex-col items-center">
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <ImEye
                                                                className="w-4 h-4"
                                                                onClick={
                                                                    handleShowInfo
                                                                }
                                                            />
                                                        </span>
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <HiOutlineHeart className="w-4 h-4" />
                                                        </span>
                                                    </div>
                                                    <img
                                                        src={""}
                                                        alt=""
                                                        
                                                    />
                                                </div>
                                                <div className="w-full flex items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                                <p className="hidden phone:flex">
                                                    Iphone 12 Pro Max
                                                </p>
                                                <p className="text-lg phone:flex gap-2 items-center hidden ">
                                                    N200,000
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm hidden phone:flex">
                                                    (3) reviews
                                                </p>
                                            </div>
                                            <div className="w-[60%] h-full p-1 flex flex-col gap-1 phone:hidden">
                                                <p className="text-lg font-medium">
                                                    Iphone 12 Pro Max{" "}
                                                </p>
                                                <p className="text-lg flex gap-2 items-center">
                                                    N200,000{" "}
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm">
                                                    128GB UK Used.
                                                </p>
                                                <p className="text-sm">
                                                    (3) reviews
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : showConsole ? (
                        <>
                            <div className="w-full h-max flex flex-col phone:flex-row gap-5">
                                <div className="w-full phone:w-1/2 h-max flex phone:flex-col gap-5">
                                    {item.map((index) => (
                                        <div
                                            className="w-1/3 phone:w-full h-max flex bg-gray-200"
                                            key={index}
                                        >
                                            <div className="w-[40%] phone:w-full h-max flex flex-col items-center p-2 gap-2">
                                                <div className="w-full h-28 bg-indigo-300 relative">
                                                    <div className="w-8 h-12 absolute top-1 right-0 flex justify-between flex-col items-center">
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <ImEye
                                                                className="w-4 h-4"
                                                                onClick={
                                                                    handleShowInfo
                                                                }
                                                            />
                                                        </span>
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <HiOutlineHeart className="w-4 h-4" />
                                                        </span>
                                                    </div>
                                                    <img
                                                        src={""}
                                                        alt=""
                                                        
                                                    />
                                                </div>
                                                <div className="w-full flex items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                                <p className="hidden phone:flex">
                                                    Iphone 12 Pro Max
                                                </p>
                                                <p className="text-lg phone:flex gap-2 items-center hidden ">
                                                    N200,000
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm hidden phone:flex">
                                                    (3) reviews
                                                </p>
                                            </div>
                                            <div className="w-[60%] h-full p-1 flex flex-col gap-1 phone:hidden">
                                                <p className="text-lg font-medium">
                                                    Iphone 12 Pro Max{" "}
                                                </p>
                                                <p className="text-lg flex gap-2 items-center">
                                                    N200,000{" "}
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm">
                                                    128GB UK Used.
                                                </p>
                                                <p className="text-sm">
                                                    (3) reviews
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full phone:w-1/2 h-max flex phone:flex-col gap-5">
                                    {item2.map((index) => (
                                        <div
                                            className="w-1/3 phone:w-full h-max flex bg-gray-200"
                                            key={index}
                                        >
                                            <div className="w-[40%] phone:w-full h-max flex flex-col items-center p-2 gap-2">
                                                <div className="w-full h-28 bg-indigo-300 relative">
                                                    <div className="w-8 h-12 absolute top-1 right-0 flex justify-between flex-col items-center">
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <ImEye
                                                                className="w-4 h-4"
                                                                onClick={
                                                                    handleShowInfo
                                                                }
                                                            />
                                                        </span>
                                                        <span className="cursor-pointer  flex items-center justify-center">
                                                            <HiOutlineHeart className="w-4 h-4" />
                                                        </span>
                                                    </div>
                                                    <img
                                                        src={""}
                                                        alt=""
                                                        
                                                    />
                                                </div>
                                                <div className="w-full flex items-center justify-center gap-1">
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStarFilled />
                                                    <TbStar />
                                                    <TbStar />
                                                </div>
                                                <p className="hidden phone:flex">
                                                    Iphone 12 Pro Max
                                                </p>
                                                <p className="text-lg phone:flex gap-2 items-center hidden ">
                                                    N200,000
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm hidden phone:flex">
                                                    (3) reviews
                                                </p>
                                            </div>
                                            <div className="w-[60%] h-full p-1 flex flex-col gap-1 phone:hidden">
                                                <p className="text-lg font-medium">
                                                    Iphone 12 Pro Max{" "}
                                                </p>
                                                <p className="text-lg flex gap-2 items-center">
                                                    N200,000{" "}
                                                    <span className="text-sm text-gray-500">
                                                        N220,000
                                                    </span>
                                                </p>
                                                <p className="text-sm">
                                                    128GB UK Used.
                                                </p>
                                                <p className="text-sm">
                                                    (3) reviews
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
                <div className="w-full h-max">
                    <div className="w-full h-max flex items-center justify-center py-4">
                        <div className="w-20 h-8 flex items-center justify-center gap-3 font-semibold">
                            <p>Page</p>
                            <input
                                type="text"
                                className="w-20 h-8 flex items-center justify-center text-center border border-gray-400 rounded"
                                value={1}
                                readOnly
                            />
                            <p className="flex items-center w-max h-max gap-3">
                                of <span>1</span>
                            </p>
                            <div className="w-max h-max flex gap-4">
                                <button
                                    className="w-6 h-6  rounded border border-gray-400 bg-[#008081] disabled:bg-[#008081] disabled:cursor-not-allowed text-white flex items-center justify-center"
                                    // onClick={handlePrevPage}
                                    // disabled={currentPage <= 1}
                                >
                                    &lt;
                                </button>
                                <button
                                    className="w-6 h-6  rounded border border-gray-400 bg-[#008081] disabled:bg-[#008081] disabled:cursor-not-allowed text-white flex items-center justify-center"
                                    // onClick={handleNextPage}
                                    // disabled={currentPage >= totalPages}
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeShopTwo;
