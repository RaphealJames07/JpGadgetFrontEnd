//ENTRY FOR HOME PAGE

import HeaderOne from "../Components/HeaderOne";
import HeaderTwo from "../Components/HeaderTwo";
import QuickView from "../Components/QuickView";
import {Modal} from "antd";
import Footer from "../Components/Footer";
import {Outlet} from "react-router";

interface StructureProps {
  // Define props interface
  showAuth: boolean;
  showInfo: boolean;
  setShowAuth: React.Dispatch<React.SetStateAction<boolean>>;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}
const Structure: React.FC<StructureProps> = ({ showInfo,setShowInfo, setShowAuth,showAuth }) => {

    return (
        <>
            <div className="w-full h-max relative ">
                <div className="w-full h-max">
                    <HeaderOne  showAuth={showAuth} setShowAuth={setShowAuth}/>
                    <HeaderTwo  showAuth={showAuth} setShowAuth={setShowAuth}/>
                    <Outlet />
                    <Footer />
                </div>
            </div>
            <Modal
                open={showInfo}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{hidden: true}}
                // closeIcon={false}
                onCancel={() => setShowInfo(false)}
                width={1000}
                style={{top: "80px"}}
            >
                <QuickView />
            </Modal>
        </>
    );
};

export default Structure;
// //ENTRY FOR HOME PAGE

// import {useState} from "react";
// import HeaderOne from "../Components/HeaderOne";
// import HeaderTwo from "../Components/HeaderTwo";
// import QuickView from "../Components/QuickView";
// import {Modal} from "antd";
// import Footer from "../Components/Footer";
// import {Outlet} from "react-router";

// const Structure = () => {
//     const [showAuth, setShowAuth] = useState<boolean>(false);
//     const [showInfo, setShowInfo] = useState<boolean>(false);

//     return (
//         <>
//             <div className="w-full h-max relative ">
//                 <div className="w-full h-max">
//                     <HeaderOne setShowAuth={setShowAuth} showAuth={showAuth} />
//                     <HeaderTwo setShowAuth={setShowAuth} showAuth={showAuth} />
//                     <Outlet />
//                     <Footer />
//                 </div>
//             </div>
//             <Modal
//                 open={showInfo}
//                 cancelButtonProps={{hidden: true}}
//                 okButtonProps={{hidden: true}}
//                 // closeIcon={false}
//                 onCancel={() => setShowInfo(false)}
//                 width={1000}
//                 style={{top: "80px"}}
//             >
//                 <QuickView />
//             </Modal>
//         </>
//     );
// };

// export default Structure;
