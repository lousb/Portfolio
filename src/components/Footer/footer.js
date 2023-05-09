import React from "react";
import './footer.css';


function Footer(){
    return(
        <footer className="footer">
            <h2 className="footer-text">
                <div className="footer-home">
                    Home
                </div>
                <div className="footer-about">
                    About
                </div>
                <div className="footer-projects">
                    Projects
                </div>
                <div className="footer-process">
                    Process
                </div>
                <div className="footer-contact">
                    Contact
                </div>
            </h2>
        </footer>
    )
}

export default Footer;