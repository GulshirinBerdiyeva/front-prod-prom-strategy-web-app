import React from "react";
import {Loader, Post} from "../index";

function PostList() {
    let [loading, isLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(function () {
            isLoading(false);
        }.bind(this), 1000);
    });

    const posts = window.data.posts;
    const listPosts = posts.map((post) => <Post key={post.id} post={post}/>);

    return (
        <Loader loading={loading} posts={listPosts}/>
    );
}

export default PostList;