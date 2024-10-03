import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="bg-dark d-flex justify-content-center flex-column align-items-center full-height w-100">
            <h1 className="display-1 text-white fw-bold">404</h1>
            <p className="text-white text-uppercase">Page Not Found</p>
            <Link to="/" className="btn btn-primary">zpět na domovskou stránku</Link>
        </div>
    );
}
 
export default Page404;