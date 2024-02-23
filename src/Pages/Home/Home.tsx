//ENTRY FOR HOME PAGE

// import {useState} from "react";
import Hero from "./Components/Hero";
import SubHero from "./Components/SubHero";
// import HomeShop from "../Components/HomeShop";
import QuickView from "../../Components/QuickView";
import {Modal} from "antd";
import PopularCat from "./Components/PopularCol";
import Latest from "./Components/Latest";
import DealOfTheDay from "./Components/DealOfTheDay";
import BigDiscount from "./Components/BigDiscount";
import ShopSafely from "./Components/ShopSafely";
import HomeShopTwo from "./Components/HomeShopTwo";
import LatestNews from "./Components/LatestNews";

interface Props {
    setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
    showInfo: boolean;
}

const Home: React.FC<Props> = ({showInfo, setShowInfo}) => {
    return (
        <>
            <div className="w-full h-max relative ">
                <div className="w-full h-max">
                    <Hero />
                    <SubHero />
                    <HomeShopTwo setShowInfo={setShowInfo} />
                    <DealOfTheDay />
                    <PopularCat />
                    <Latest setShowInfo={setShowInfo} />
                    <BigDiscount />
                    <ShopSafely />
                    <LatestNews />
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
