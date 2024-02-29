import {
    FaFacebookF,
    FaInstagram,
    FaSnapchatGhost,
    FaTiktok,
} from "react-icons/fa";
import contactImg from "../../assets/ContactUsImg1.jpg";
import {FaXTwitter} from "react-icons/fa6";

const ContactUs = () => {
    return (
        <>
            <div className="w-full h-max flex flex-col gap-5">
                <div className="w-full h-max flex flex-col items-center gap-5 px-44 phone:px-5 py-5">
                    <p className="text-3xl font-semibold flex items-center justify-center relative h3textBg w-full">
                        CONTACT US
                    </p>
                    <div className="w-full h-max flex gap-10 phone:gap-5 phone:flex-col">
                        <div className="w-1/2 phone:w-full h-[60vh] phone:h-[40vh]">
                            <img
                                src={contactImg}
                                alt=""
                                className="w-full h-full object-contain bg-center"
                            />
                        </div>
                        <div className="w-1/2 phone:w-full h-[60vh] phone:h-max flex flex-col gap-5 justify-center">
                            <p className="text-3xl font-semibold flex flex-col text-[#108383] ">
                                GET IN TOUCH
                                <span className="text-sm font-semibold text-gray-500">
                                    We'd Love to Hear From You, Lets Get In
                                    Touch!
                                </span>
                            </p>
                            <div className="w-full h-max flex flex-col gap-6">
                                <div className="w-full h-max flex phone:flex-col gap-3 justify-between">
                                    <div className="w-1/2 phone:w-full h-max flex flex-col gap-2">
                                        <p className="font-semibold text-[#108383]">
                                            Address
                                        </p>
                                        <p className="text-gray-500">
                                            120 Shop Mall Ikeja, Lagos Nigeria
                                        </p>
                                    </div>
                                    <div className="w-1/2 phone:w-full h-max flex flex-col gap-2">
                                        <p className="font-semibold text-[#108383]">
                                            Phone
                                        </p>
                                        <p className="text-gray-500">
                                            +123 1234567890, +123 1234567890
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-max flex phone:flex-col gap-3 justify-between">
                                    <div className="w-1/2 phone:w-full h-max flex flex-col gap-2">
                                        <p className="font-semibold text-[#108383]">
                                            Email
                                        </p>
                                        <p className="text-gray-500">
                                            JpGadget@gmail.com
                                        </p>
                                    </div>
                                    <div className="w-1/2 phone:w-full h-max flex flex-col gap-2">
                                        <p className="font-semibold text-[#108383]">
                                            Working Hours
                                        </p>
                                        <p className="text-gray-500">
                                            Physical Office Opens: Monday -
                                            Saturday, 10AM - 5PM
                                        </p>
                                        <p className="text-gray-500">
                                            Business Orders and Customer Service
                                            is available 24/7
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-max flex flex-col gap-2">
                                <p className="font-semibold text-[#108383]">
                                    Social
                                </p>
                                <div className="w-full flex gap-4">
                                    <span className="w-7 h-7 rounded-full border-2 border-gray-500 flex items-center justify-center text-gray-500 hover:text-[#108383] cursor-pointer transition-all duration-500 hover:border-[#108383]">
                                        <FaXTwitter />
                                    </span>
                                    <span className="w-7 h-7 rounded-full border-2 border-gray-500 flex items-center justify-center text-gray-500 hover:text-[#108383] cursor-pointer transition-all duration-500 hover:border-[#108383]">
                                        <FaFacebookF />
                                    </span>
                                    <span className="w-7 h-7 rounded-full border-2 border-gray-500 flex items-center justify-center text-gray-500 hover:text-[#108383] cursor-pointer transition-all duration-500 hover:border-[#108383]">
                                        <FaInstagram />
                                    </span>
                                    <span className="w-7 h-7 rounded-full border-2 border-gray-500 flex items-center justify-center text-gray-500 hover:text-[#108383] cursor-pointer transition-all duration-500 hover:border-[#108383]">
                                        <FaTiktok />
                                    </span>
                                    <span className="w-7 h-7 rounded-full border-2 border-gray-500 flex items-center justify-center text-gray-500 hover:text-[#108383] cursor-pointer transition-all duration-500 hover:border-[#108383]">
                                        <FaSnapchatGhost />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[65vh] flex flex-col gap-5">
                    <p className="text-3xl font-semibold flex items-center justify-center relative h3textBg w-full">
                        LOCATE US
                    </p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d990.8517117295021!2d3.340912600000001!3d6.5962522000000074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1697210657602!5m2!1sen!2sng"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full border-none"
                    ></iframe>
                </div>
                <div className="w-full h-max flex flex-col gap-5 mb-5">
                    <p className="text-3xl font-semibold flex items-center justify-center relative h3textBg w-full">
                        LEAVE US A MESSAGE
                    </p>
                    <div className="w-full h-max flex flex-col px-44 phone:px-5 gap-5">
                        <div className="w-full h-max flex phone:flex-col gap-5">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-1/3 phone:w-full h-10 rounded outline-none border border-gray-300 pl-2"
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-1/3 phone:w-full h-10 rounded outline-none border border-gray-300 pl-2"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-1/3 phone:w-full h-10 rounded outline-none border border-gray-300 pl-2"
                            />
                        </div>
                        <div className="w-full h-max ">
                            <textarea
                                name=""
                                id=""
                                cols={30}
                                rows={10}
                                className="w-full h-max rounded outline-none border border-gray-300 pl-2"
                            ></textarea>
                        </div>
                    </div>
                    <div className="w-full h-12 flex items-center justify-center">
                      <button className="w-max h-max px-4 py-2 rounded bg-[#108383] text-white">SEND</button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
