import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
const AppLayOut = () => {
    return (
        <React.Fragment>
             <Header/>
             <Body/>
             <Footer/>
        </React.Fragment>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut/>);