import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { users } from "../../data";


const User = () => {
    const { id } = useParams()
    const user = users.find(user => user.id == Number(id));
    useEffect(() => { console.log('useEffect') }, [])
    return (
        <div className="bg-dark text-white w-100 px-3 py-2">
            {user ? (
                <div className="">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1>Uživatel: {user.firstName} {user.lastName}(ID: {user.id})</h1>
                        <Link to='/uzivatele' className="btn-primary btn text-uppercase">Zavřít</Link>
                    </div>
                    <div className="py-3">
                        <div>
                            <p><strong>Order Number:</strong> {user.firstName}</p>
                            <p><strong>Created:</strong> {user.lastName}</p>
                            <p><strong>Value:</strong> {user.email} Kč</p>
                            <p><strong>State:</strong> {user.phone}</p>
                            <p><strong>User ID:</strong> {user.id}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Objednávka nenalezena</p>
            )}

        </div >
    );
}

export default User;