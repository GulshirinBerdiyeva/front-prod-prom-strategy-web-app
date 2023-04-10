import React from "react";

import {Menu, MenuButton, MenuDivider, MenuItem} from "@szhsin/react-menu";
import {Instagram, MenuOutlined, MenuRounded} from "@material-ui/icons";

// import avatar from "../../assets/images/avatar.png";
import avatar from "../../assets/images/ayka-avatar.png";

function Header() {
    let profileUsername = "aya.sprouse";
    let fullName = "Aygul Berdiyeva";
    let photosCount = 7;
    let feedbacksCount = 6;

    return (
        <div className="profile-header-wrapper profile-header">
            <div className="column left img-wrapper">
                <img width="90px" height="90px" src={avatar} alt="Profile"/>
            </div>

            <div className="column middle">
                <div className="profile-user-name-wrapper">
                    <div className="profile-user-name">
                        <p>{profileUsername}</p>
                    </div>
                </div>
                <div className="profile-params-wrapper">
                    <p><span>{photosCount}</span> posts</p>
                    <p><span>{feedbacksCount}</span> feedbacks</p>
                </div>
                <div className="profile-full-name-wrapper">
                    <p>{fullName}</p>
                </div>
                <a href="#"><Instagram className="social-media-link"/></a>
            </div>

            <div className="column right menu-wrapper">
                <Menu className="menu-button" menuButton={<MenuButton className="menu-button"><MenuRounded className="menu-icon"/></MenuButton>}>
                    <MenuItem className="menu-item">
                        <a href="#">Promotion Strategies</a>
                    </MenuItem>
                    {/*<MenuItem className="menu-item">*/}
                    {/*    <a href="#">Statistics</a>*/}
                    {/*</MenuItem>*/}
                    {/*<MenuItem className="menu-item">*/}
                    {/*    <a href="#">Event Calendar</a>*/}
                    {/*</MenuItem>*/}
                </Menu>
            </div>
        </div>
    );
}

export default Header;