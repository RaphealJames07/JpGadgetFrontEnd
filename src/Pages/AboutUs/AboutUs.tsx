import aboutUs from "../../assets/aboutUsWho.jpg";
import whatWeDo from "../../assets/aboutUsWhat.jpg";
import ourAim from "../../assets/aboutUsAim.jpg";
import approach from "../../assets/abouUsApproach.jpg";
import AboutUsCarousel from "./AboutUsCarousel";

const AboutUs = () => {
    return (
        <>
            <div className="w-full h-max flex flex-col gap-10 pb-14">
                <div className="w-full h-max">
                    <AboutUsCarousel />
                </div>
                <div className="w-full h-max flex flex-col gap-14 phone:gap-5 px-44 phone:px-5">
                    <div className="w-full h-[50vh] flex gap-10 phone:flex-col phone:gap-2 phone:bg-slate-200 phone:p-2 phone:rounded">
                        <div className="w-1/2 phone:w-full h-full">
                            <img
                                src={aboutUs}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full h-full flex flex-col justify-center phone:items-center ">
                            <p className="text-2xl font-semibold">About Us</p>
                            <p className="phone:text-center">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Exercitationem sunt a nemo
                                iste quod, eaque suscipit voluptatem quibusdam
                                earum vitae doloremque quaerat ullam nisi modi,
                                error ea atque, eum repudiandae.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[50vh] flex gap-10 flex-row-reverse phone:flex-col phone:gap-2 phone:bg-slate-200 phone:p-2 phone:rounded">
                        <div className="w-1/2 h-full phone:w-full">
                            <img
                                src={whatWeDo}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full h-full flex flex-col justify-center phone:items-center">
                            <p className="text-2xl font-semibold">What We Do</p>
                            <p className="phone:text-center">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Exercitationem sunt a nemo
                                iste quod, eaque suscipit voluptatem quibusdam
                                earum vitae doloremque quaerat ullam nisi modi,
                                error ea atque, eum repudiandae.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-[50vh] flex gap-10 phone:flex-col phone:gap-2 phone:bg-slate-200 phone:p-2 phone:rounded">
                        <div className="w-1/2 h-full phone:w-full">
                            <img
                                src={ourAim}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full h-full flex flex-col justify-center phone:items-center">
                            <p className="text-2xl font-semibold">Our Aim</p>
                            <p className="phone:text-center">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Exercitationem sunt a nemo
                                iste quod, eaque suscipit voluptatem quibusdam
                                earum vitae doloremque quaerat ullam nisi modi,
                                error ea atque, eum repudiandae.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[50vh] flex flex-row-reverse gap-10 phone:flex-col phone:gap-2 phone:bg-slate-200 phone:p-2 phone:rounded">
                        <div className="w-1/2 h-full phone:w-full">
                            <img
                                src={approach}
                                alt=""
                                className="w-full h-full"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full h-full flex flex-col justify-center phone:items-center">
                            <p className="text-2xl font-semibold">
                                Our Approach
                            </p>
                            <p className="phone:text-center">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Exercitationem sunt a nemo
                                iste quod, eaque suscipit voluptatem quibusdam
                                earum vitae doloremque quaerat ullam nisi modi,
                                error ea atque, eum repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
