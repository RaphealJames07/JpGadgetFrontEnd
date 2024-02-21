const BigDiscount = () => {
    return (
        <>
            <div className="w-full h-[35vh] phone:h-[20vh] flex items-center justify-center my-5 rounded-lg">
                <div className="w-[80%] phone:w-[95%] h-full discountBg flex flex-col justify-center gap-4 rounded-lg pl-20 phone:pl-5">
                    <p className="text-4xl phone:text-2xl text-white font-semibold">
                        Big Discount
                    </p>
                    <div className=" ml-2 phone:ml-1 w-max h-max flex items-center justify-center px-3 phone:px-2 py-2 phone:py-1 phone:text-sm phone:tracking-tight border rounded border-yellow-500 text-yellow-500 tracking-widest">
                        Save Up To 80% Off
                    </div>
                    <p className="text-base text-white underline underline-offset-2 ml-14 phone:ml-7 phone:text-sm">
                        SHOP NOW
                    </p>
                </div>
            </div>
        </>
    );
};

export default BigDiscount;
