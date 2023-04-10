import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia
} from "@material-ui/core";
import {Comment, Favorite} from "@material-ui/icons";

import avatar from "../../assets/images/avatar.png";
import img_1 from "../../assets/images/gadgets/1.png";
import img_2 from "../../assets/images/gadgets/2.png";
import img_3 from "../../assets/images/gadgets/3.png";
import img_4 from "../../assets/images/gadgets/4.png";
import img_5 from "../../assets/images/gadgets/5.png";
import Comments from "./Comments";
import {formatDistance} from "date-fns";

function Post({post}) {
    return (
        <div className="post">
            <div className="container">
                <Card className="animated fadeInUp">
                    <CardHeader className="post-header"
                                title={<span id="title">{post.title}</span>}
                                subheader={
                                    <span>@{post.author}&nbsp;.&nbsp;{formatDistance(new Date(post.date), new Date())} ago</span>}
                                avatar={<img src={avatar} alt="Avatar img"/>}
                    />
                    <CardContent className="post-subheader">
                        <span>{post.description}</span>
                    </CardContent>
                    <CardMedia className="post-body">
                        <img width="100%" height="100%" src={img_1} alt="SignIn"/>
                    </CardMedia>
                    <CardActions>
                        <Comment/>
                        <label>{post.commentsAmount}</label>
                        <Favorite/>
                        <label>{post.likesAmount}</label>
                    </CardActions>
                    <Comments/>
                </Card>
            </div>
        </div>
    );
}

export default Post;