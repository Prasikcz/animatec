import { Link } from "react-router-dom";
import "./header.scss";


const Header = () => {
    return (
        <header className="bg-dark d-flex justify-content-between align-items-center px-5 py-3">
            <Link to="/" className="d-flex align-items-center text-white fw-bold"><img className="logo" src="/media/logo.png" alt="Logo" /></Link>
            <div className="toolBar text-white d-flex flex-end gap-3">
                <Link to="/"><img src="/media/search.svg" alt="" title="Hledat" /></Link>
                <Link to="/"><img src="/media/app.svg" alt="" title="Aplikace" /></Link>
                <Link to="/"><img src="/media/settings.svg" alt="" title="Nastavení" /></Link>
                <Link to="/"><img src="/media/admin.png" alt="" title="Admin" /></Link>
                <Link to="/"><img src="/media/logout.png" alt="" title="Odhlásit se"/></Link>
            </div>
        </header>
    );
}
 
export default Header;