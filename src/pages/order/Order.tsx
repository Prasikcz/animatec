import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { orders } from "../../data";


const Order = () => {
    const { id } = useParams()
    const order = orders.find(order => order.id == Number(id));
    useEffect(() => { console.log('useEffect') }, [])
    return (
        <div className="bg-dark text-white w-100 px-3 py-2">
            {order ? (
                <div className="">

                    <h1>Objednávka č.: {order.orderNumber}</h1>
                    <div className="py-3">
                        <div>
                            <p><strong>Order Number:</strong> {order.orderNumber}</p>
                            <p><strong>Created:</strong> {order.created}</p>
                            <p><strong>Value:</strong> {order.value} Kč</p>
                            <p><strong>State:</strong> {order.state}</p>
                            <p><strong>User ID:</strong> {order.userId}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Objednávka nenalezena</p>
            )}

        </div >
    );
}

export default Order;