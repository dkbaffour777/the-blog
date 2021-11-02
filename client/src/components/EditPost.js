import React, { useEffect, useState } from "react";
import { Link , useLocation} from "react-router-dom";
import { singlePost } from "../Data/FetchData";

const EditPost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const location = useLocation();
    const location_id 
        = location.pathname
            .replace("/single-post/", "")
            .replace("/edit", "");
    useEffect(()=> {
        (async ()=>{
            try {
                //id, title, content, comments, user, created_at
                const _post = await singlePost(location_id);
                setTitle(_post.title);
                setContent(_post.content)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [location_id])

    return (
        <>
            <article>
                <Link to={`/single-post/${location_id}`}> &larr; Back to post</Link>
                <h2>
                    Edit Post
                </h2>
                <form className="edit-post-form">
                    <div>
                        <input
                            type="text"
                            id="post-title"
                            name="post-title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                            id="post-content"
                            name="post-content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <button type="submit">Save post</button>
                    <button type="button" className="delete-post-btn">Delete post</button>
                </form>
            </article>

            {/* Comments */}
        </>
    );
}

export default EditPost;