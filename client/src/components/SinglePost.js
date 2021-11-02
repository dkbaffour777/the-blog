import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { singlePost } from "../Data/FetchData";
import PostInfo from "./PostInfo";

const SinglePost =()=> {
    const [post, setPost] = useState({});
    const location = useLocation();
    const location_id = location.pathname.slice(13);
    useEffect(()=> {
        (async ()=>{
            try {
                //id, title, content, comments, user, created_at
                const _post = await singlePost(location_id);
                setPost(_post)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [location_id])
    return (
        <>
            {/* PostInfo */}
            <PostInfo
                post={post}
            />
            {
                true && //loggedIn
                    <form className="comment-form">
                    <div>
                        <textarea name="comment-body"></textarea>
                    </div>

                    <div>
                        <button type="submit">add comment</button>
                        {
                            true && //isEdit
                                <Link to={`/single-post/${post?.id}/edit`}>edit post</Link>
                        }
                    </div>
                </form>

                //Comments
            }
        </>
    );
}

export default SinglePost;