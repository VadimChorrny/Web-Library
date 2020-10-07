import React, { useState, useContext } from "react";
import { Context } from "./Context";

function PostsItem({ title, id, completed }) {
    const { togglePost, removePosts } = useContext(Context);
    const cls = ["todo"];

    if (completed) {
        cls.push("completed");
    }

    return (
        <li className={cls.join(" ")}>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => togglePost(id)}
                />
                <span>{title}</span>
                <i
                    className="material-icons red-text"
                    onClick={() => removePosts(id)}
                >
                    delete
                </i>
            </label>
        </li>
    );
}

export default PostsItem;
