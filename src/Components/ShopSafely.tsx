import img1 from '../assets/shopsafe1.webp'
import img2 from '../assets/shopsafe2.webp'
import img3 from '../assets/shopsafe3.webp'

const ShopSafely = () => {
    return (
        <>
            <div className="w-full h-max flex items-center justify-center flex-col gap-10 my-10">
                <p className="text-3xl phone:text-2xl font-semibold flex items-center justify-center relative h3textBg w-full">
                    Shop Safely With JP Gadgets
                </p>
                <div className="w-[80%] h-20 phone:h-max flex phone:flex-col gap-10">
                    <div className="w-1/3 phone:w-full h-full phone:h-40 flex phone:flex-col">
                        <div className='w-[25%] phone:w-full h-full flex items-center phone:justify-center'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='w-[75%] phone:w-full h-full flex phone:items-center flex-col gap-1'>
                            <p className='text-lg font-semibold'>Free Deliveryy</p>
                            <p className='text-sm phone:text-center'>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatum, consectetur
                                laborum!
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 phone:w-full h-full phone:h-40 flex phone:flex-col">
                        <div className='w-[25%] phone:w-full h-full flex items-center phone:justify-center'>
                            <img src={img2} alt="" />
                        </div>
                        <div className='w-[75%] phone:w-full h-full flex phone:items-center flex-col gap-1'>
                            <p className='text-lg font-semibold'>Way To Buy</p>
                            <p className='text-sm phone:text-center'>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatum, consectetur
                                laborum!
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 phone:w-full h-full phone:h-40 flex phone:flex-col">
                        <div className='w-[25%] phone:w-full h-full flex items-center phone:justify-center'>
                            <img src={img3} alt="" />
                        </div>
                        <div className='w-[75%] phone:w-full h-full flex phone:items-center flex-col gap-1'>
                            <p className='text-lg font-semibold'>Gift Voucher</p>
                            <p className='text-sm phone:text-center'>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatum, consectetur
                                laborum!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopSafely;
