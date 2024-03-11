import HeaderOne from "../../Components/HeaderOne";
import failedPay from "../../assets/failedpay.gif";

interface StructureProps {
    // Define props interface
    showAuth: boolean;

    setShowAuth: React.Dispatch<React.SetStateAction<boolean>>;
    isUser: boolean;
}
const PayFailed: React.FC<StructureProps> = ({
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
                <p className="text-red-500 text-3xl font-semibold">
                    Payment Failed !
                </p>
                <img src={failedPay} alt="" className="w-80 h-80" />
                <div className="w-max h-max flex items-center justify-center gap-5 mt-10">
                    <button className="w-max h-max px-5 py-2 rounded border-[#008081] border-2 ">
                        Try Again
                    </button>
                    <button className="w-max h-max px-5 py-2 rounded bg-[#008081] text-white">
                        Back To Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default PayFailed;
