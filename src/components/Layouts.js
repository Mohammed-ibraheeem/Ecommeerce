import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Layouts() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Layouts;