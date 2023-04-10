import React from "react";

import post from "../../assets/images/post.png";
// import img_1 from "../../assets/images/bags/1.jpg";
// import img_2 from "../../assets/images/bags/2.jpg";
// import img_3 from "../../assets/images/bags/3.jpg";
// import img_4 from "../../assets/images/bags/4.jpg";
// import img_5 from "../../assets/images/bags/5.jpg";
// import img_6 from "../../assets/images/bags/6.jpg";
// import img_7 from "../../assets/images/bags/7.jpg";

import img_1 from "../../assets/images/gadgets/1.png";
import img_2 from "../../assets/images/gadgets/2.png";
import img_3 from "../../assets/images/gadgets/3.png";
import img_4 from "../../assets/images/gadgets/4.png";
import img_5 from "../../assets/images/gadgets/5.png";

import {Comment, Favorite} from "@material-ui/icons";

function Posts() {
    const photos = window.profileData.posts;
    const likesLength = 42;
    const commentsLength = 42;

    return (
        <div className="profile-posts-wrapper profile-posts">
            <div className="profile-posts-grid">
                {/*{photos.map(photo => (*/}
                {/*    <div key={photo.id} className="profile-post-wrapper">*/}
                {/*        <img width="100%" height="100%" src={post} alt="SignIn"/>*/}
                {/*        <div className="profile-post-blank group-hover:flex hidden">*/}
                {/*            <p>*/}
                {/*                <Favorite className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>*/}
                {/*                {likesLength}*/}
                {/*            </p>*/}
                {/*            <p>*/}
                {/*                <Comment className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>*/}
                {/*                {commentsLength}*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*))}*/}

                <div className="profile-post-wrapper">
                    <img width="100%" height="100%" src={img_3} alt="SignIn"/>
                    <div className="profile-post-blank group-hover:flex hidden">
                        <p>
                            <Favorite className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>
                            27
                        </p>
                        <p>
                            <Comment className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>
                            15
                        </p>
                    </div>
                </div>

                <div className="profile-post-wrapper">
                    <img width="100%" height="100%" src={img_4} alt="SignIn"/>
                    <div className="profile-post-blank group-hover:flex hidden">
                        <p>
                            <Favorite className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>
                            17
                        </p>
                        <p>
                            <Comment className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>
                            10
                        </p>
                    </div>
                </div>
                <div className="profile-post-wrapper">
                    <img width="100%" height="100%" src={img_4} alt="SignIn"/>
                    <div className="profile-post-blank group-hover:flex hidden">
                        <p>
                            <Favorite className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>
                            30
                        </p>
                        <p>
                            <Comment className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>
                            18
                        </p>
                    </div>
                </div>
                <div className="profile-post-wrapper">
                    <img width="100%" height="100%" src={img_5} alt="SignIn"/>
                    <div className="profile-post-blank group-hover:flex hidden">
                        <p>
                            <Favorite className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>
                            38
                        </p>
                        <p>
                            <Comment className="shade-icon" fillRule="evenodd" clipRule="evenodd"/>
                            20
                        </p>
                    </div>
                </div>
            </div>
            {!photos || (photos.length === 0 && <p>No Posts Yet</p>)}
        </div>
    );
}

export default Posts;