import React from "react";
import { Link } from "react-router-dom";

const SinglePost =()=> {
    return (
        <>
            {/* PostInfo */}
            <h1>Single post</h1>

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
                                <Link to="/dashboard/edit/{{post.id}}">edit post</Link>
                        }
                    </div>
                </form>

                //Comments
            }
        </>
    );
}

export default SinglePost;