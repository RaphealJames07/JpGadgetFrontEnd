const DealOfTheDay = () => {
    return (
        <div className="w-full h-[70vh] phone:h-max flex phone:flex-col phone:py-10 dodBg bg-fixed mb-10">
            <div className="w-1/2 h-full"></div>
            <div className="w-1/2 h-full phone:w-full flex flex-col justify-center phone:items-center gap-6">
                <p className="text-6xl font-bold phone:text-center phone:text-4xl">Deal Of The Day</p>
                <p className="text-3xl text-[#008081] font-semibold phone:text-xl">It’s black friday, every friday!</p>
                <p className="w-[75%] phone:w-[80%] phone:text-center">
                    Praesent nec finibus massa. Phasellus id auctor lacus, at
                    iaculis lorem. Donec quis arcu elit. In vehicula purus se.
                </p>
                <button className="w-max h-max px-6 rounded py-2 bg-[#008081] text-white">
                    SHOP NOW
                </button>
            </div>
        </div>
    );
};

export default DealOfTheDay;
