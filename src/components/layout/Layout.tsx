import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Menu from "./menu/Menu";

const Layout = () => {
    return (
        <div className="Layout">
            <Header />
            <div className="d-flex">
                <Menu />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
 
export default Layout;