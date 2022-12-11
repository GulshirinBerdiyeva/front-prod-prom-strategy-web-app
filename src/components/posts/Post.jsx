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
import post from "../../assets/images/post.png";

function Post() {
    return (
        <div className="post">
            <div className="container">
                <Card className="animated fadeInUp">
                    <CardHeader className="post-header"
                                title={<span>Title</span>}
                                subheader={<span>@Author&nbsp;.&nbsp;23h</span>}
                                avatar={<img src={avatar} alt="Avatar img"/>}
                    />
                    <CardContent className="post-subheader">
                        <span>Text...</span>
                    </CardContent>
                    <CardMedia className="post-body">
                        <img width="100%" height="100%" src={post} alt="SignIn"/>
                    </CardMedia>
                    <CardActions>
                        <Comment/>
                        <label>42</label>
                        <Favorite/>
                        <label>42</label>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default Post;