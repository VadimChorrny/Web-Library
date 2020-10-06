import React from "react";
import PostsItem from "./PostsItem";

function PostsList({ posts }) {
    return (
        <ul>
            {posts.map((item) => (
                <PostsItem key={item.id} {...item} />
            ))}
        </ul>
    );
}

export default PostsList;
