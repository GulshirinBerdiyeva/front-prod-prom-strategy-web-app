import React from "react";

import post from "../../assets/images/post.png";
import {Comment, Favorite} from "@material-ui/icons";

function Posts() {
    const photos = window.profileData.posts;
    const likesLength = 42;
    const commentsLength = 42;

    return (
        <div className="profile-posts-wrapper profile-posts">
            <div className="profile-posts-grid">
                {photos.map(photo => (
                    <div key={photo.id} className="profile-post-wrapper">
                        <img width="100%" height="100%" src={post} alt="SignIn"/>
                        <div className="profile-post-blank group-hover:flex hidden">
                            <p>
                                <Favorite className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>
                                {likesLength}
                            </p>
                            <p>
                                <Comment className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>
                                {commentsLength}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {!photos || (photos.length === 0 && <p>No Posts Yet</p>)}
        </div>
    );
}

export default Posts;