//ENTRY FOR HOME PAGE

import {useState} from "react";
import HeaderOne from "../Components/HeaderOne";
import HeaderTwo from "../Components/HeaderTwo";
import Hero from "../Components/Hero";
import SubHero from "../Components/SubHero";

const Home = () => {
    const [showAuth, setShowAuth] = useState<boolean>(false);

    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-max">
                    <HeaderOne setShowAuth={setShowAuth} showAuth={showAuth} />
                    <HeaderTwo setShowAuth={setShowAuth} showAuth={showAuth} />
                    <Hero/>
                    <SubHero/>
                </div>
            </div>
        </>
    );
};

export default Home;
