//ENTRY FOR HOME PAGE

import {useState} from "react";
import HeaderOne from "../Components/HeaderOne";
import HeaderTwo from "../Components/HeaderTwo";
import Hero from "../Components/Hero";
import SubHero from "../Components/SubHero";
import HomeShop from "../Components/HomeShop";
import QuickView from "../Components/QuickView";
import {Modal} from "antd";
import PopularCat from "../Components/PopularCol";
import Latest from "../Components/Latest";
import DealOfTheDay from "../Components/DealOfTheDay";
import BigDiscount from "../Components/BigDiscount";
import ShopSafely from "../Components/ShopSafely";

const Home = () => {
    const [showAuth, setShowAuth] = useState<boolean>(false);
    const [showInfo, setShowInfo] = useState<boolean>(false);

    return (
        <>
            <div className="w-full h-max relative ">
                <div className="w-full h-max">
                    <HeaderOne setShowAuth={setShowAuth} showAuth={showAuth} />
                    <HeaderTwo setShowAuth={setShowAuth} showAuth={showAuth} />
                    <Hero />
                    <SubHero />
                    <HomeShop setShowInfo={setShowInfo} />
                    <DealOfTheDay />
                    <PopularCat />
                    <Latest setShowInfo={setShowInfo} />
                    <BigDiscount />
                    <ShopSafely />
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

export default Home;
