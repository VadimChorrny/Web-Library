import React, { useState, useEffect } from "react";
import PostsList from "./PostsList";
import { Context } from "./Context";

function Home() {
    const [posts, setPosts] = useState([]);
    const [postsTitle, setPostsTitle] = useState("");

    const handleClick = () => console.log("click");

    useEffect(() => {
        const raw = localStorage.getItem("posts") || [];
        setPosts(JSON.parse(raw));
    }, []);

    useEffect(() => {
        document.addEventListener("click", handleClick);
        localStorage.setItem("posts", JSON.stringify(posts));
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [posts]);

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

    const removePosts = (id) => {
        setPosts(
            posts.filter((post) => {
                return post.id !== id;
            })
        );
    };

    const togglePost = (id) => {
        setPosts(
            posts.map((post) => {
                if (post.id === id) {
                    post.completed = !post.completed;
                }
                return post;
            })
        );
    };

    return (
        <Context.Provider value={{ togglePost, removePosts }}>
            <div>
                <input
                    value={postsTitle}
                    onChange={(event) => setPostsTitle(event.target.value)}
                    onKeyPress={addPosts}
                ></input>
                <PostsList posts={posts} />
            </div>
        </Context.Provider>
    );
}

export default Home;
