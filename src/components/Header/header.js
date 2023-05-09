import React from "react";
import './header.css';


function Header(props){
    return(
        <header className="header">
            <h2 className="header-text">{props.title}<span className="double-dot">:</span></h2>
        </header>
    )
}

export default Header;