import { Link } from "react-router-dom";
import "./footer.scss"


const Footer = () => {
    return (
        <footer className="bg-dark text-white fw-bold py-3 d-flex justify-content-center align-items-center">
            <div className="d-flex gap-2 flex-column align-items-center">
                <img src="../../../media/logo1.svg" />
                <Link to="/">&copy; {new Date().getFullYear()} DoProjektu.cz</Link>
            </div>
        </footer>
    );
}
 
export default Footer;