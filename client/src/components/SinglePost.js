import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { singlePost } from "../Data/FetchData";
import PostInfo from "./PostInfo";

const SinglePost =()=> {
    const location = useLocation();
    const [post, setPost] = useState({});
    useEffect(()=> {
        (async ()=>{
            try {
                const location_id = location.pathname.slice(13);
                //id, title, content, comments, user, created_at
                const {id, title, content, comments, user, created_at} 
                    = await singlePost(location_id);
                setPost({id, title, content, comments, user, created_at})
            } catch (error) {
                console.error(error)
            }
        })()
    }, [location])
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
                                <Link to={`/dashboard/edit/${post?.id}`}>edit post</Link>
                        }
                    </div>
                </form>

                //Comments
            }
        </>
    );
}

export default SinglePost;