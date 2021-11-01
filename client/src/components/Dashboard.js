import React, { useReducer, useState } from "react";
//import PostInfo from "./PostInfo";

const Dashboard = () => {
    const [displayNPForm, setdisplayNPForm] = useReducer(isDisplay => !isDisplay, false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    async function newFormHandler(event) {
        event.preventDefault();
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }

    return (
        <>
            <section>
                <h2>Create New Post</h2>
                <button
                    id="new-post-btn"
                    className="btn"
                    onClick={() => setdisplayNPForm(displayNPForm)}
                >
                    New Post {displayNPForm ? "-" : "+"}
                </button>
                <form
                    id="new-post-form"
                    className="new-post-form"
                    style={{ display: displayNPForm ? "block" : "none" }}
                    onSubmit={newFormHandler}
                >
                    <div>
                        <label htmlFor="post-title">Title</label>
                        <input
                            type="text"
                            id="post-title"
                            name="post-title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="post-content">Content</label>
                        <textarea
                            id="post-content"
                            name="post-content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <button type="submit" className="btn">Create</button>
                </form>
            </section>

            {
                false && // posts.length
                <section>
                    <h2>Your Posts</h2>
                    <ol>
                        all posts
                        {
                            /* posts.map((post, i) => 
                            //id, title, content, comments, user, created_at
                                <li key={post.id}>
                                    <PostInfo 
                                        id={post.id}
                                        title={post.title}
                                        content={post.content}
                                        comments={post.comments}
                                        user={post.user}
                                        created_at={post.created_at}
                                    />
                                </li>
                            ) */
                        }
                    </ol>
                </section>
            }
        </>
    );
}

export default Dashboard;