import { useState } from "react";
import { APP_LOG } from "./utils/constants";

const Title = () => (
    <a href="/">
      <img className="logo" src={APP_LOG} alt="Food Fire Logo" />
    </a>
  );  
const Header = () => {
    const [isLoggedin,setIsLoggedin] = useState(true);
    return (
        <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>{
            isLoggedin?(
            <button className="logout-btn" onClick={()=>setIsLoggedin(false)}>
                Logout
            </button>):(
                <button className="login-btn" onClick={()=>setIsLoggedin(true)}>
                    Login
                </button>
            )}
          </li>
        </ul>
      </div>
    </div>
    )
}
export default Header;