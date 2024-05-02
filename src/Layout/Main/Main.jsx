import { Outlet } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Footer from "../../Pages/Shared/Footer/Footer";
import Naveber from "../../Pages/Shared/Naveber";


const Main = () => {
    return (
        <div>
           <Naveber></Naveber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;