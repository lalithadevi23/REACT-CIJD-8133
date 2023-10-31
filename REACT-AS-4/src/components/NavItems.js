import { Link } from "react-router-dom";
const NavItems = () => (
    <div className="nav-items">
        <ul>
            <button><li><Link to= "/home">HOME</Link></li></button>
            <button><li><Link to ="/about">ABOUT US</Link></li></button>
            <button><li><Link to = "/contact">CONTACT</Link></li></button>
            <button><li><Link to = "/cart">CART</Link></li></button>
        </ul>
    </div>
);

export default NavItems;