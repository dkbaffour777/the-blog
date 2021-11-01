import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <>
            <article>
                <Link to="/dashboard"> &larr; Back to dashboard</Link>
                <h2>
                    Edit Post
                </h2>
                <form class="edit-post-form">
                    <div>
                        <input
                            type="text"
                            id="post-title"
                            name="post-title"
                            value={title}
                            defaultValue={"original title"}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                            id="post-content"
                            name="post-content"
                            value={content}
                            defaultValue={"original content"}
                            onChange={(e) => setContent(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <button type="submit">Save post</button>
                    <button type="button" class="delete-post-btn">Delete post</button>
                </form>
            </article>

            {/* Comments */}
        </>
    );
}

export default EditPost;