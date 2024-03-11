import HeaderOne from "../../Components/HeaderOne";
import paySuccess from "../../assets/paySuccess.gif";

interface StructureProps {
    // Define props interface
    showAuth: boolean;

    setShowAuth: React.Dispatch<React.SetStateAction<boolean>>;
    isUser: boolean;
}
const PaySuccess: React.FC<StructureProps> = ({
    setShowAuth,
    showAuth,
    isUser,
}) => {
    return (
        <>
            <HeaderOne
                setShowAuth={setShowAuth}
                showAuth={showAuth}
                isUser={isUser}
            />
            <div className="w-full h-[90vh] flex items-center justify-center flex-col">
                <p className="text-[#008081] text-3xl font-semibold">
                    Payment Successful
                </p>
                <img src={paySuccess} alt="" className="w-80 h-80" />
                <p>Dear Customer, your payment is successful </p>
                <p className="text-center w-[90%]">
                    Your Order has been Processed, Please check your Order
                    status
                </p>
                <div className="w-max h-max flex items-center justify-center gap-5 mt-10">
                    <button className="w-max h-max px-5 py-2 rounded border-[#008081] border-2 ">
                        View Order
                    </button>
                    <button className="w-max h-max px-5 py-2 rounded bg-[#008081] text-white">
                        Back To Home
                    </button>
                </div>
            </div>
        </>
    );
};

export default PaySuccess;
