import React, { useState } from "react";
import PostsList from "./PostsList";

function Home() {
    const [posts, setPosts] = useState([
        { id: 1, title: "First post", completed: false },
        { id: 2, title: "Second post", completed: false },
    ]);

    const [postsTitle, setPostsTitle] = useState("");

    const addPosts = (event) => {
        if (event.key === "Enter") {
            setPosts([
                ...posts,
                {
                    id: Date.now(),
                    title: postsTitle,
                    completed: false,
                },
            ]);
            setPostsTitle("");
        }
    };

    return (
        <>
            <input
                value={postsTitle}
                onChange={(event) => setPostsTitle(event.target.value)}
                onKeyPress={addPosts}
            ></input>
            <PostsList posts={posts} />
        </>
    );
}

export default Home;
