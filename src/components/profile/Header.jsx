import React from "react";

import avatar from "../../assets/images/avatar.png";

function Header() {
    let profileUsername = "Gulshirin";
    let fullName = "Gulshirin Berdiyeva";
    let photosCount = 42;
    let feedbacksCount = 42;

    return (
        <div className="profile-header-wrapper profile-header">
            <div className="img-wrapper">
                <img width="90px" height="90px" src={avatar} alt="Profile"/>
            </div>
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
        </div>
    );
}

export default Header;