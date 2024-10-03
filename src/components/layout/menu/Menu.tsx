import { NavLink } from "react-router-dom";
import { menu } from "../../../data";
import './menu.scss';

const Menu = () => {
    return (
        <div className="menu d-flex flex-column bg-dark text-white px-3 py-3">
            {menu.map((item) => (
                <div className="item d-flex flex-column pb-2" key={item.id}>
                    <span className="text-uppercase fw-lighter text-white-50 pb-1">{item.title}</span>
                    {item.listItems.map((listItem) => (
                        <NavLink to={listItem.url} className="px-4 pb-1 mb-1" key={listItem.id} title={listItem.title}>
                            <img src={listItem.icon} alt="" />
                            <span className="ps-2 d-none d-md-inline">{listItem.title}</span>
                        </NavLink>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Menu;

