import React, {useState, useEffect} from "react";
import {BsBoxSeam} from "react-icons/bs";
import {PiPiggyBankLight} from "react-icons/pi";
import {CiGift} from "react-icons/ci";
import {RiCustomerService2Fill} from "react-icons/ri";

const Carousel: React.FC = () => {
    const [transformValue, setTransformValue] = useState<number>(0);

    useEffect(() => {
        // Function to update transform value every 5 seconds
        const updateTransform = () => {
            setTransformValue((prevTransform) =>
                prevTransform <= -1170 ? 0 : prevTransform - 390
            );
        };

        // Interval to call the updateTransform function every 5 seconds
        const intervalId = setInterval(updateTransform, 5000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full h-[10%] bg-sky-100 flex justify-between items-center reassurance-list owl-carousel owl-theme owl-loaded owl-drag rounded">
            <div className="owl-stage-outer relative overflow-hidden translate-x-0 translate-y-0 translate-z-0 w-full h-full flex items-center ">
                <div
                    className="owl-stage transition-all duration-500 relative touch-manipulation w-[1572px] h-full flex"
                    style={{
                        transform: `translate3d(${transformValue}px, 0px, 0px)`,
                    }}
                >
                    <div className="w-[378px] flex gap-2 h-full items-center mr-4 owl-item ">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <BsBoxSeam className="w-7 h-7" />
                        </div>
                        <div className="w-max flex flex-col">
                            <p className="font-semibold">Free Delivery</p>
                            <p className="text-xs">
                                Free delivery on orders worth up to 500,000
                            </p>
                        </div>
                    </div>
                    <div className="w-[378px] flex gap-2 h-full items-center mr-4 owl-item">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <PiPiggyBankLight className="w-7 h-7" />
                        </div>
                        <div className="w-max flex flex-col">
                            <p className="font-semibold">
                                Save Big on Fresh Deals
                            </p>
                            <p className="text-xs">
                                Enjoy exclusive offers and discounts for a
                                limited time.
                            </p>
                        </div>
                    </div>
                    <div className="w-[378px] flex gap-2 h-full items-center mr-4 owl-item">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <CiGift className="w-7 h-7" />
                        </div>
                        <div className="w-max flex flex-col">
                            <p className="font-semibold">Gift Voucher</p>
                            <p className="text-xs">
                                Recieve gift vouchers and use for next purchase
                            </p>
                        </div>
                    </div>
                    <div className="w-[378px] flex gap-2 h-full items-center mr-4 owl-item">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <RiCustomerService2Fill className="w-7 h-7" />
                        </div>
                        <div className="w-max flex flex-col">
                            <p className="font-semibold">Customer Support</p>
                            <p className="text-xs">
                                24 hour customer live support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;