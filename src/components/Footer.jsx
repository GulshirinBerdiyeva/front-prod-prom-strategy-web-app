import React from "react";

import logoSvg from "../assets/images/footer-logo.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__logo">
                    <img src={logoSvg} alt="IP3 logo"/>
                    <p>© 2022 Intelligent Product Promotion Platform.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
