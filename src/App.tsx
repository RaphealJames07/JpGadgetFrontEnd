import "./index.css";
import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Structure from "./Structure/Structure";
import Shop from "./Pages/Shop/Shop";
import Collection from "./Pages/Collection/Collection";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Blogs from "./Pages/Blogs/Blogs";
import Faq from "./Pages/Faq/Faq";
import Services from "./Pages/Services/Services";
import Wishlists from "./Pages/Account/Wishlists/Wishlists";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import MyProfle from "./Pages/Account/MyProfile/MyProfle";
import MyOrders from "./Pages/Account/MyOrders/MyOrders";
import Login from "./Pages/Account/Auth/Login";
import Register from "./Pages/Account/Auth/Register";
import Verify from "./Pages/Account/Auth/Verify";
import ResetPassword from "./Pages/Account/Auth/ResetPassword";
import ForgetPassword from "./Pages/Account/Auth/ForgetPassword";
import {useState} from "react";

import Test from "./Components/Test";
import PhonesCollection from "./Pages/Collection/Phones/PhonesCollection";
import TabletCollection from "./Pages/Collection/Tablet/TabletCollection";
import LaptopCollection from "./Pages/Collection/Laptop/LaptopCollection";
import AirpodsCollection from "./Pages/Collection/Airpods/AirpodsCollection";
import SpeakerCollection from "./Pages/Collection/Speaker/SpeakerCollection";
import SmartWatchCollection from "./Pages/Collection/SmartWatch/SmartWatchCollection";
import ConsolesCollection from "./Pages/Collection/Consoles/ConsolesCollection";
import OrderHistoryInfo from "./Pages/Account/MyOrders/OrderHistoryInfo";
// import 'swiper/css/swiper.css'

const App = () => {
    const [showAuth, setShowAuth] = useState<boolean>(false);
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const isUser = true;
    const router = createBrowserRouter([
        {
            path: "checkout",
            element: (
                <Checkout
                    setShowAuth={setShowAuth}
                    showAuth={showAuth}
                    isUser={isUser}
                />
            ),
        },
        {
            path: "",
            element: (
                <Structure
                    setShowAuth={setShowAuth}
                    showAuth={showAuth}
                    setShowInfo={setShowInfo}
                    showInfo={showInfo}
                    isUser={isUser}
                />
            ),
            children: [
                {
                    path: "",
                    element: (
                        <Home setShowInfo={setShowInfo} showInfo={showInfo} />
                    ),
                },
                {
                    path: "shop",
                    element: <Shop />,
                },
                {
                    path: "collections",
                    element: <Collection />,
                },
                {
                    path: "collections/phones",
                    element: <PhonesCollection />,
                },
                {
                    path: "collections/tablets",
                    element: <TabletCollection />,
                },
                {
                    path: "collections/laptops",
                    element: <LaptopCollection />,
                },
                {
                    path: "collections/airpods",
                    element: <AirpodsCollection />,
                },
                {
                    path: "collections/speakers",
                    element: <SpeakerCollection />,
                },
                {
                    path: "collections/smartwatches",
                    element: <SmartWatchCollection />,
                },
                {
                    path: "collections/consoles",
                    element: <ConsolesCollection />,
                },
                {
                    path: "about-us",
                    element: <AboutUs />,
                },
                {
                    path: "contact-us",
                    element: <ContactUs />,
                },
                {
                    path: "blog",
                    element: <Blogs />,
                },
                {
                    path: "frequently-asked",
                    element: <Faq />,
                },
                {
                    path: "services",
                    element: <Services />,
                },
                {
                    path: "my-wishlists",
                    element: <Wishlists />,
                },
                {
                    path: "cart",
                    element: <Cart />,
                },

                {
                    path: "profile",
                    element: <MyProfle />,
                },
                {
                    path: "my-orders",
                    element: <MyOrders />,
                },
                {
                    path: "my-orders/123",
                    element: <OrderHistoryInfo />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Register />,
                },
                {
                    path: "verify",
                    element: <Verify />,
                },
                {
                    path: "reset-password",
                    element: <ResetPassword />,
                },
                {
                    path: "forget-password",
                    element: <ForgetPassword />,
                },
                {
                    path: "test",
                    element: <Test />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
