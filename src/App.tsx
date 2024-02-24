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
import TabletsC from "./Pages/Collection/TabletsC";
import LaptopsC from "./Pages/Collection/LaptopsC";
import AirpodsC from "./Pages/Collection/AirpodsC";
import SpeakersC from "./Pages/Collection/SpeakersC";
import SmartWatches from "./Pages/Collection/SmartWatches";
import ConsolesC from "./Pages/Collection/ConsolesC";

const App = () => {
    const [showAuth, setShowAuth] = useState<boolean>(false);
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const router = createBrowserRouter([
        {
            path: "",
            element: (
                <Structure
                    setShowAuth={setShowAuth}
                    showAuth={showAuth}
                    setShowInfo={setShowInfo}
                    showInfo={showInfo}
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
                    element: <Collection />,
                },
                {
                    path: "collections/tablets",
                    element: <TabletsC />,
                },
                {
                    path: "collections/laptops",
                    element: <LaptopsC />,
                },
                {
                    path: "collections/airpods",
                    element: <AirpodsC />,
                },
                {
                    path: "collections/speakers",
                    element: <SpeakersC />,
                },
                {
                    path: "collections/smartwatches",
                    element: <SmartWatches />,
                },
                {
                    path: "collections/consoles",
                    element: <ConsolesC />,
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
                    path: "checkout",
                    element: <Checkout />,
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
