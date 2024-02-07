import './index.css'
import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  //Entry Route
  {path: "/", element: <Home />}

]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};
  
export default App;
