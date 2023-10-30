import React from "react";
import ReactDOM from "react-dom";
import {APP_LOGO, USER_ICON} from "./constants";
const Header = () => {
    return (
        <>
        <header className="header">
            <div className="left">
                <img className="logo-img"src={APP_LOGO}/>
            </div>
            <div className="center">
                <input className="input" type="text" placholder="Search anything"/>
                <button type="sumbit">
                <i class="fa fa-search"></i>
                </button>
            </div>
            <div className="right">
            <img className="user-img"src={USER_ICON}/>

            </div>
        </header>
        </>
    )
}
const rootElement =ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<Header/>);
export default Header;