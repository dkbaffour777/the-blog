import React, { useReducer } from "react";
import { format_plural, format_date } from "../utils/helpers";
import Comment from "./Comment";

const PostInfo = ({ post }) => {
    const { id, title, content, comments, user, created_at } = post;
    const [showComments, setShowComments] = useReducer(isShow => !isShow, false);
    return (
        <div to={`/post/${id}`} className="post">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="content">
                <p>{content}</p>
            </div>
            <div className="meta">
                <p style={{ margin: "20px 30px", fontSize: "small" }}>Posted by {user?.username} on {format_date(created_at)}</p>
                <div>
                    {comments?.length} {format_plural("comment", comments?.length)}
                    <span
                        onClick={() => setShowComments(showComments)}
                        style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        {showComments ? " -" : " +"}
                    </span>
                </div>
                <div className="comments" style={{ height: showComments ? "auto" : "0px", overflow: "hidden" }}>
                    {
                        comments?.map((comment) =>
                            <Comment
                                key={comment.id}
                                username={comment.user.username}
                                comment_text={comment.comment_text}
                                created_at={format_date(comment.created_at)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default PostInfo;