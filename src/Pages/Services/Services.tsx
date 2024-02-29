import ServicesCarousel from "./Components/ServicesCarousel";

const Services = () => {
    return (
        <>
            <div className="w-full h-max flex flex-col gap-5 pb-10">
                <ServicesCarousel />
                <div className="w-full h-max flex flex-col gap-3 items-center px-44 phone:px-5">
                    <p className="text-3xl font-semibold flex items-center justify-center relative h3textBg w-full">
                        Our Services
                    </p>
                    <p className="text-center ">
                        Everything and more we at JP Gadget presents you with
                    </p>
                    <div className="w-full h-max mt-5 flex flex-col gap-5">
                        <div className="w-full h-max flex phone:flex-col justify-between gap-8">
                            <div className="w-1/4 phone:w-full h-36 p-3 flex flex-col gap-2 cursor-pointer divIncrease bg-white shadow-lg rounded">
                                <p className="text-base font-semibold text-[#128889]">
                                    Efficient Delivery
                                </p>
                                <p className="text-sm">
                                    Our efficient delivery service guarantees
                                    prompt and secure delivery of your orders,
                                    ensuring they arrive at your doorstep
                                    swiftly and without delay.
                                </p>
                            </div>
                            <div className="w-1/4 phone:w-full h-36 p-3 flex flex-col gap-2 cursor-pointer divIncrease bg-white shadow-lg rounded">
                                <p className="text-base font-semibold text-[#128889]">
                                    Live Chat Support
                                </p>
                                <p className="text-sm">
                                    Benefit from our live chat support feature,
                                    where our dedicated team is available 24/7
                                    to provide instant assistance and address
                                    any questions or concerns you may have,
                                    ensuring a seamless shopping experience.
                                </p>
                            </div>
                            <div className="w-1/4 phone:w-full h-36 p-3 flex flex-col gap-2 cursor-pointer divIncrease bg-white shadow-lg rounded">
                                <p className="text-base font-semibold text-[#128889]">
                                    Easy Payment
                                </p>
                                <p className="text-sm">
                                    Our user-friendly payment system simplifies
                                    the checkout process, offering various
                                    payment options for convenient and secure
                                    transactions, making shopping with us
                                    hassle-free and enjoyable.
                                </p>
                            </div>
                            <div className="w-1/4 phone:w-full h-36 p-3 flex flex-col gap-2 cursor-pointer divIncrease bg-white shadow-lg rounded">
                                <p className="text-base font-semibold text-[#128889]">
                                    Best Offers
                                </p>
                                <p className="text-sm">
                                    Take advantage of our exclusive deals and
                                    discounts, curated to provide you with the
                                    best value for your money, allowing you to
                                    save on high-quality products and services.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-max flex phone:flex-col justify-between gap-8">
                            <div className="w-1/4 phone:w-full h-36 p-3 flex flex-col gap-2 cursor-pointer divIncrease bg-white shadow-lg rounded">
                                <p className="text-base font-semibold text-[#128889]">
                                    Return Policy
                                </p>
                                <p className="text-sm">
                                    Enjoy peace of mind with our flexible return
                                    policy, allowing you to return or exchange
                                    products hassle-free within a specified
                                    timeframe, ensuring your satisfaction with
                                    every purchase.
                                </p>
                            </div>
                            <div className="w-1/4 phone:w-full h-36 p-3 flex flex-col gap-2 cursor-pointer divIncrease bg-white shadow-lg rounded">
                                <p className="text-base font-semibold text-[#128889]">
                                    Hybrid Shopping (In-store or Online)
                                </p>
                                <p className="text-sm">
                                    Experience the best of both worlds with our
                                    hybrid shopping approach, giving you the
                                    flexibility to seamlessly transition between
                                    online and in-store shopping, catering to
                                    your preferences and convenience.
                                </p>
                            </div>
                            <div className="w-1/4 phone:w-full h-36 p-3 flex flex-col gap-2 cursor-pointer divIncrease bg-white shadow-lg rounded">
                                <p className="text-base font-semibold text-[#128889]">
                                    Order Tracker
                                </p>
                                <p className="text-sm">
                                    Stay informed about your orders with our
                                    order tracking feature, allowing you to
                                    monitor the status of your shipments every
                                    step of the way, ensuring transparency and
                                    reliability in your shopping experience.
                                </p>
                            </div>
                            <div className="w-1/4 phone:w-full h-36 p-3 flex flex-col gap-2 cursor-pointer divIncrease bg-white shadow-lg rounded">
                                <p className="text-base font-semibold text-[#128889]">
                                    Cashback Promo
                                </p>
                                <p className="text-sm">
                                    Avail yourself of our enticing cashback
                                    offers and promotional deals, rewarding you
                                    for your purchases and providing additional
                                    value on eligible transactions, making your
                                    shopping experience even more rewarding and
                                    fulfilling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
