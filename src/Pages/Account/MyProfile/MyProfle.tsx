import {BiSolidPencil} from "react-icons/bi";
import {Form, Input, Modal} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useState} from "react";
import {AiFillEdit} from "react-icons/ai";
import {BsFillCheckCircleFill} from "react-icons/bs";

const MyProfle = () => {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("test@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState("1234567890");
    const [editMode, setEditMode] = useState(false);
    // const [password, setPassword] = useState("*********");
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [editAddy, setEditAddy] = useState(false);
    const [addy, setAddy] = useState([
        "No 10 Somewhere in lagos nigeria Ikeja Lagos Nigeria",
        "No 2 Somewhere in lagos nigeria Ikeja Lagos Nigeria",
    ]);
    const handleFirstNameChange = (e:any) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e:any) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e:any) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e:any) => {
        setPhoneNumber(e.target.value);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleAddyChange = (e:any) => {
        setAddy(e.target.value);
    };

    const toggleEditAddy = () => {
        setEditAddy(!editAddy);
    };

    const handleEditPassword = () => {
        setShowPasswordModal(true);
    };
    return (
        <>
            <div className="w-full h-max flex flex-col gap-10 py-10 px-44 phone:px-5">
                <div className="w-full h-max flex flex-col items-center gap-3 ">
                    <div className="w-44 h-44 bg-sky-100 rounded-full relative">
                        <img
                            src={"profilePic"}
                            alt=""
                            className="w-full h-full rounded-full"
                        />
                        <span className="absolute top-0 right-2 w-12 h-12 rounded-full flex items-center justify-center bg-[#118686] cursor-pointer">
                            <BiSolidPencil className="text-2x   l text-white" />
                        </span>
                    </div>
                    <div className="w-full h-max flex items-center justify-center text-3xl font-semibold">
                        Welcome,&nbsp;<span>Rapheal James</span>
                    </div>
                </div>
                <div className="w-full h-max phone:h-max flex flex-col gap-5 phone:gap-5 justify-between pb-10">
                    <div className="w-full h-max phone:h-max bg-white border-x-2 border-y-2 border-pry rounded p-4">
                        <p className="text-pry text-2xl font-semibold w-full flex items-center">
                            Account Information
                        </p>
                        <div className="w-full h-max phone:h-72 flex flex-col gap-5 ">
                            <div className="w-full h-max flex flex-col gap-3">
                                <div className="w-full h-max flex justify-between">
                                    <div className="w-[45%] h-max flex  flex-col">
                                        <label
                                            htmlFor=""
                                            className="w-full h-max flex items-center text-lg"
                                        >
                                            {" "}
                                            First Name
                                        </label>
                                        <Input
                                            className="w-full h-10 text-lg border-pry"
                                            value={firstName}
                                            onChange={handleFirstNameChange}
                                            disabled={!editMode}
                                        />
                                    </div>
                                    <div className="w-[45%] h-max flex  flex-col">
                                        <label
                                            htmlFor=""
                                            className="w-full h-max flex items-center text-lg"
                                        >
                                            {" "}
                                            Last Name
                                        </label>
                                        <Input
                                            className="w-full h-10 text-lg border-pry"
                                            value={lastName}
                                            onChange={handleLastNameChange}
                                            disabled={!editMode}
                                        />
                                    </div>
                                </div>
                                <div className="w-full h-max flex justify-between">
                                    <div className="w-[45%] h-full flex  flex-col">
                                        <label
                                            htmlFor=""
                                            className="w-full h-10 flex items-center text-lg"
                                        >
                                            Email
                                        </label>
                                        <Input
                                            className="w-full h-10 text-lg border-pry"
                                            value={email}
                                            onChange={handleEmailChange}
                                            disabled={!editMode}
                                        />
                                    </div>
                                    <div className="w-[45%] h-full flex  flex-col">
                                        <label
                                            htmlFor=""
                                            className="w-full h-10 flex items-center text-lg"
                                        >
                                            Phone Number
                                        </label>
                                        <Input
                                            className="w-full h-10 text-lg border-pry"
                                            value={phoneNumber}
                                            onChange={handlePhoneNumberChange}
                                            disabled={!editMode}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-max flex items-center justify-center gap-10">
                                {editMode ? (
                                    <button
                                        onClick={() => setEditMode(false)}
                                        className=" bg-[#118686] w-32 rounded text-white h-10"
                                    >
                                        Save Initials
                                    </button>
                                ) : (
                                    <button
                                        onClick={toggleEditMode}
                                        className=" bg-[#118686] w-32 rounded text-white h-10"
                                    >
                                        Edit Account
                                    </button>
                                )}
                                <button
                                    onClick={handleEditPassword}
                                    className=" bg-[#118686] w-40 rounded text-white h-10"
                                >
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max phone:h-max flex flex-col gap-3 border-x-2 border-y-2 border-pry rounded p-4">
                        <p className="text-pry text-2xl font-semibold w-full flex items-center">
                            Delivery Address
                        </p>
                        <div className="w-full h-max flex items-center overflow phone:flex-col phone:h-max gap-3">
                            <span className="w-72 phone:w-full h-max flex flex-col gap-4 ">
                                <label className="w-full h-max flex items-end justify-between text-lg px-2">
                                    Address 1{" "}
                                    <span
                                        className="w-7 h-7 cursor-pointer"
                                        onClick={toggleEditAddy}
                                    >
                                        {editAddy ? (
                                            <BsFillCheckCircleFill className="text-2xl" />
                                        ) : (
                                            <AiFillEdit className="text-2xl" />
                                        )}
                                    </span>
                                </label>
                                <TextArea
                                    size="large"
                                    rows={4}
                                    placeholder=""
                                    className="w-full h-max border-pry"
                                    disabled={!editAddy}
                                    value={addy[0]}
                                    onChange={handleAddyChange}
                                />
                            </span>
                            <span className="w-72 phone:w-full h-max flex flex-col gap-4 ">
                                <label className="w-full h-max flex items-end justify-between text-lg px-2">
                                    Address 1{" "}
                                    <span
                                        className="w-7 h-7 cursor-pointer"
                                        onClick={toggleEditAddy}
                                    >
                                        {editAddy ? (
                                            <BsFillCheckCircleFill className="text-2xl" />
                                        ) : (
                                            <AiFillEdit className="text-2xl" />
                                        )}
                                    </span>
                                </label>
                                <TextArea
                                    size="large"
                                    rows={4}
                                    placeholder=""
                                    className="w-full h-max border-pry"
                                    disabled={!editAddy}
                                    value={addy[0]}
                                    onChange={handleAddyChange}
                                />
                            </span>
                            <span className="w-72 phone:w-full h-max flex flex-col gap-4">
                                <label className="w-full h-max flex items-end justify-between text-lg px-2">
                                    Address 1{" "}
                                    <span
                                        className="w-7 h-7 cursor-pointer"
                                        onClick={toggleEditAddy}
                                    >
                                        {editAddy ? (
                                            <BsFillCheckCircleFill className="text-2xl" />
                                        ) : (
                                            <AiFillEdit className="text-2xl" />
                                        )}
                                    </span>
                                </label>
                                <TextArea
                                    size="large"
                                    rows={4}
                                    placeholder=""
                                    className="w-full h-max border-pry"
                                    disabled={!editAddy}
                                    value={addy[1]}
                                    onChange={handleAddyChange}
                                />
                            </span>
                        </div>
                        <div className="w-full h-max phone:h-16  flex items-center justify-center">
                            <button className=" bg-[#118686] px-5 rounded text-white py-3">
                                Add New Address
                            </button>
                        </div>
                    </div>
                </div>
                <Modal
                    title="Change Password"
                    open={showPasswordModal}
                    onOk={() => setShowPasswordModal(false)}
                    onCancel={() => setShowPasswordModal(false)}
                >
                    <Form>
                        <Form.Item label="New Password">
                            <Input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item label="Confirm New Password">
                            <Input
                                type="password"
                                value={confirmNewPassword}
                                onChange={(e) =>
                                    setConfirmNewPassword(e.target.value)
                                }
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </>
    );
};

export default MyProfle;
