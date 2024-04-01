import { Outlet } from "react-router-dom";
import Navigations from "./Navigations";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
        <div className="capitalize">
            <Navigations></Navigations>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;