import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function LayOut() {
    return (
        <>
            <Header />
            <div>
                {/* <ToastContainer /> */}
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default LayOut;
