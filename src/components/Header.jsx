import React from "react";

import logoSvg from "../assets/images/header-logo.svg";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logoSvg} alt="IP3 logo" />
                    <div>
                        <h1>Intelligent Product Promotion Platform</h1>
                        <p>эффективные маркетинговые решения</p>
                    </div>
                </div>
                <div className="header__sign">
                    <ul>
                        <li><a href="#Sign-in">Sign in</a></li>
                        <li><a href="#Log-in">Log in</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;