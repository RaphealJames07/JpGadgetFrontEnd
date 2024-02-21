import "./scrollbar.css";

import {useState} from "react";

const Testscrollbar = () => {
    const [enter, setEnter] = useState<boolean>(false);
    return (
        <div className={`w-full h-screen flex items-center justify-center `}>
            <div
                className={`w-1/2 h-1/2 bg-sky-200 overflow-y-auto p-10 muse ${
                    enter ? "active" : ""
                }`}
                onMouseEnter={() => setEnter(true)}
                onMouseLeave={() => setEnter(false)}
            >
                <div className="w-full h-screen bg-white"></div>
            </div>
        </div>
    );
};

export default Testscrollbar;
