import './index.css'
import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
// import Test from './Components/Test';
import Testscrollbar from './Components/Testscrollbar';

const router = createBrowserRouter([
  //Entry Route
  {path: "/", element: <Home />},
  {path: "/test", element: <Testscrollbar />}

]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};
  
export default App;
