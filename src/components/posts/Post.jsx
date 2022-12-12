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
import postImage from "../../assets/images/post.png";
import Comments from "./Comments";
import {formatDistance} from "date-fns";

function Post({post}) {
    return (
        <div className="post">
            <div className="container">
                <Card className="animated fadeInUp">
                    <CardHeader className="post-header"
                                title={<span>{post.title}</span>}
                                subheader={
                                    <span>@{post.author}&nbsp;.&nbsp;{formatDistance(new Date(post.date), new Date())} ago</span>}
                                avatar={<img src={avatar} alt="Avatar img"/>}
                    />
                    <CardContent className="post-subheader">
                        <span>{post.description}</span>
                    </CardContent>
                    <CardMedia className="post-body">
                        <img width="100%" height="100%" src={postImage} alt="SignIn"/>
                    </CardMedia>
                    <CardActions>
                        <Comment/>
                        <label>42</label>
                        <Favorite/>
                        <label>42</label>
                    </CardActions>
                    <Comments/>
                </Card>
            </div>
        </div>
    );
}

export default Post;